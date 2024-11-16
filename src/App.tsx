import useWindowDimensions from './hooks/useWindowDimensions';
import { useState, useRef } from 'react';
import { PiVinylRecord } from 'react-icons/pi';
import MobileView from './MobileView';
import DesktopView from './DesktopView';
import clsx from 'clsx';

function App() {
  const { width, height } = useWindowDimensions();
  const [showMusic, setShowMusic] = useState(false);

  const realWidth = (width > 1920 ? 1920 : width) - 0;
  const realHeight = realWidth * 0.6 < height ? realWidth * 0.6 : height;

  const flipWidth = realWidth / 2 - 32;
  const flipHeight = realHeight - 32;

  // State to manage the scale
  const [isScaled, setIsScaled] = useState(false);
  // State to manage the music playback
  const [isPlaying, setIsPlaying] = useState(false);

  // Ref for the audio element
  const audioRef = useRef<HTMLAudioElement>(null);

  // Function to toggle the scale
  const toggleScale = () => {
    setIsScaled(true);
    setShowMusic(true);
    toggleMusic();
  };

  const showMusicAndPlay = () => {
    setShowMusic(true);
    toggleMusic();
  };

  // Function to toggle music play/pause
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const isDesktop = width >= 4000;

  return (
    <div
      className={clsx('relative flex items-center justify-center w-full bg-cover h-dvh ', {
        'bg-inv-white4': !isDesktop,
        'bg-table': isDesktop
      })}
    >
      {isDesktop ? (
        <DesktopView
          flipHeight={flipHeight}
          flipWidth={flipWidth}
          isScaled={isScaled}
          realHeight={realHeight}
          realWidth={realWidth}
          toggleScale={toggleScale}
        />
      ) : (
        <MobileView showMusicAndPlay={showMusicAndPlay} />
      )}
      <div className="absolute bottom-4 right-4 z-[1000] cursor-pointer" onClick={toggleMusic}>
        {showMusic && <PiVinylRecord className={`text-5xl ${isDesktop ? 'text-black' : 'text-inv-grayA'}  ${isPlaying ? 'animate-spinLong' : ''}`} />}
      </div>
      <audio ref={audioRef} src="/song.mp3" />
    </div>
  );
}

export default App;
