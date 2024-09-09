import HTMLFlipBook from 'react-pageflip'
import useWindowDimensions from './hooks/useWindowDimensions'
import { useState } from 'react'

function App() {
  const { width, height } = useWindowDimensions()
  const portrait = width < height

  // State to manage the scale
  const [isScaled, setIsScaled] = useState(false)

  // Function to toggle the scale
  const toggleScale = () => {
    setIsScaled(true)
  }

  return (
    <div className="w-full h-screen bg-cover bg-table">
      {/* Conditionally apply scale-75 or scale-100 with animation */}

      {!isScaled && (
        <div className="absolute z-[1000] flex w-full h-full justify-center items-center">
          <button className="text-3xl font-bold" onClick={toggleScale}>
            Buka Undangan
          </button>
        </div>
      )}

      <div
        className={`absolute p-8  w-full h-full ${
          isScaled ? 'scale-100 translate-x-0' : 'scale-[.6] translate-x-32'
        } transition-transform duration-500 ease-in-out overflow-hidden`}
      >
        <HTMLFlipBook
          showPageCorners
          drawShadow
          size={portrait ? 'fixed' : 'stretch'}
          showCover={true}
          width={(portrait ? width - 16 : width / 2) - 16}
          height={height - 32}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...({} as any)}
        >
          <div className="cursor-pointer cover">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="mr-16 text-[80px]">Wahyu</div>
              <div className="text-[40px]">&</div>
              <div className="ml-16 text-[80px]">Nana</div>
            </div>
          </div>
          <div className="bg-red-200">
            <button>asd</button>
          </div>
          <div className="bg-red-200">Page 3</div>
          <div className="bg-red-200">Page 4</div>
          <div className="bg-red-200">Page 5</div>
          <div className="bg-red-200">Page 6</div>
          <div className="bg-red-200">Page 7</div>
          <div className="bg-red-200 back">Page 8</div>
        </HTMLFlipBook>
      </div>
    </div>
  )
}

export default App
