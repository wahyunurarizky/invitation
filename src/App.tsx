import HTMLFlipBook from 'react-pageflip';
import useWindowDimensions from './hooks/useWindowDimensions';
import { useState, useRef } from 'react';
import { PiVinylRecord } from 'react-icons/pi';
import One from './Slide/One';
import { Icon } from '@iconify/react';
import Two from './Slide/Two';
import Three from './Slide/Three';
import First from './Mobile/First';
import Second from './Mobile/Second';
import Third from './Mobile/Third';

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

  if (width >= 1440) {
    return (
      <div className="relative flex items-center justify-center w-full h-screen bg-cover bg-table">
        {!isScaled && (
          <div className="absolute z-[1000] flex w-full h-full justify-center items-center">
            <button className="flex items-center gap-2 px-4 py-2 text-xl font-bold text-white rounded-md font-crimson bg-inv-gray" onClick={toggleScale}>
              <Icon icon="pepicons-pencil:letter-open" /> Buka Undangan
            </button>
          </div>
        )}

        <div
          className={`absolute py-8 px-16 ${
            isScaled ? 'scale-100 translate-x-0' : 'scale-[.6] translate-x-32'
          } transition-transform duration-500 ease-in-out overflow-hidden`}
          style={{
            width: `${realWidth}px`,
            height: `${realHeight}px`
          }}
        >
          <HTMLFlipBook
            showPageCorners
            drawShadow
            size={'stretch'}
            showCover={true}
            width={flipWidth}
            height={flipHeight}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...({} as any)}
          >
            <div className="rounded-sm shadow-lg cursor-pointer bg-inv-white370 backdrop-blur-md">
              <One />
            </div>
            <div className="bg-inv-white380 backdrop-blur-md">
              <Two />
            </div>
            <div className="bg-inv-white370 backdrop-blur-md">
              <Three />
            </div>
            <div className="bg-red-200">Page 3</div>
            <div className="bg-red-200">Page 4</div>
            <div className="bg-red-200">Page 5</div>
            <div className="bg-red-200">Page 6</div>
            <div className="bg-red-200">Page 7</div>
            <div className="bg-red-200 back">Page 8</div>
          </HTMLFlipBook>
        </div>

        <div className="absolute bottom-4 right-4 z-[1000] cursor-pointer" onClick={toggleMusic}>
          <PiVinylRecord className={`text-5xl  ${isPlaying ? 'animate-spin' : ''}`} />
        </div>

        {/* Audio element */}
        <audio ref={audioRef} src="/song.mp3" />
      </div>
    );
  } else {
    return (
      <div className="relative flex items-center justify-center w-full h-screen bg-cover bg-table">
        <div className="h-screen max-w-md mx-auto min-w-[400px] bg-inv-white5 overflow-auto">
          <First />
          <Second />
          <Third />
        </div>
      </div>
    );
  }
}

export default App;
