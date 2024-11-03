import One from './Slide/One';
import Two from './Slide/Two';
import Three from './Slide/Three';
import HTMLFlipBook from 'react-pageflip';
import { Icon } from '@iconify/react';

const DesktopView = ({
  isScaled,
  realWidth,
  realHeight,
  flipWidth,
  flipHeight,
  toggleScale
}: {
  isScaled: boolean;
  realWidth: number;
  realHeight: number;
  flipWidth: number;
  flipHeight: number;
  toggleScale: () => void;
}) => {
  return (
    <>
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
    </>
  );
};

export default DesktopView;
