import useWindowDimensions from './hooks/useWindowDimensions';
import { useState, useRef } from 'react';
import { PiVinylRecord } from 'react-icons/pi';
import MobileView from './MobileView';
import DesktopView from './DesktopView';
import clsx from 'clsx';

function App() {
  const { width, height } = useWindowDimensions();

  const realWidth = (width > 1440 ? 1440 : width) - 0;
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

  const isDesktop = width >= 1440;

  return (
    <div
      className={clsx('relative flex items-center justify-center w-full bg-cover h-dvh ', {
        'bg-inv-white6': !isDesktop,
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
        <MobileView toggleMusic={toggleMusic} />
      )}
      <div className="absolute bottom-4 right-4 z-[1000] cursor-pointer" onClick={toggleMusic}>
        <PiVinylRecord className={`text-5xl  ${isPlaying ? 'animate-spinLong' : ''}`} />
      </div>
      <audio ref={audioRef} src="/song.mp3" />
    </div>
  );
}

export default App;
