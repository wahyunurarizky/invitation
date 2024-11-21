/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import First from './Mobile/First';
import Second from './Mobile/Second';
import Third from './Mobile/Third';
import Fourth from './Mobile/Fourth';
import Fifth from './Mobile/Fifth';
import FirstHalf from './Mobile/FirstHalf';
import Sixth from './Mobile/Sixth';
import SwitchModeAlert from './Mobile/SwitchModeAlert';

const MobileView = ({ showMusicAndPlay }: { showMusicAndPlay: () => void }) => {
  const [isCoverVisible, setIsCoverVisible] = useState(true);
  const [recipient, setRecipient] = useState('');

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set the initial theme
    setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  const switchToLightMode = () => {
    document.documentElement.classList.remove('dark');
    setIsDarkMode(false);
  };

  const handleOpenInvitation = () => {
    setIsCoverVisible(false);
    showMusicAndPlay();

    // Request fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if ((document.documentElement as any).mozRequestFullscreen) {
      // Firefox
      (document.documentElement as any).mozRequestFullscreen();
    } else if ((document.documentElement as any).webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      (document.documentElement as any).webkitRequestFullscreen();
    } else if ((document.documentElement as any).msRequestFullscreen) {
      // IE/Edge
      (document.documentElement as any).msRequestFullscreen();
    }
  };

  useEffect(() => {
    // Parse the 'to' query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');

    // If 'to' parameter exists, update the recipient
    if (toParam) {
      setRecipient(toParam);
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto overflow-x-hidden overflow-y-scroll snap-y snap-mandatory h-dvh bg-inv-white5">
      {isDarkMode && <SwitchModeAlert onConfirm={switchToLightMode} />}

      <AnimatePresence>
        {isCoverVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
            transition={{ duration: 1 }}
            className="flex flex-col px-6 pt-10 pb-4 h-dvh font-Comfortaa"
          >
            {/* <h2 className="mb-4 text-xl font-light text-center">YOU'RE INVITED TO</h2> */}
            <div className="relative rounded-t-[200px] overflow-hidden shadow-xl h-full bg-inv-white5">
              <div className="absolute inset-0 z-40 gradient-overlay2"></div>
              <div className="relative">
                <motion.img
                  src="/mobile2.png"
                  className="object-cover w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <div className="absolute inset-0 gradient-overlay"></div>
              </div>
              <div className="absolute bottom-0 z-50 flex flex-col items-center justify-center w-full pb-8 font-light text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mb-2 text-lg tracking-widest"
                >
                  THE WEDDING OF
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="text-5xl font-Belleza"
                >
                  WAHYU
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="text-xl font-Belleza"
                >
                  &
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="text-5xl font-Belleza"
                >
                  NANA
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="flex items-center justify-center gap-2 my-4 text-sm font-light tracking-widest font-RedHat"
                >
                  <span>MINGGU, 08 DESEMBER 2024</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }} className="font-crimson">
                  Kepada Yth. <br />
                  Bapak/Ibu/Sdr/I:
                </motion.div>
                <motion.div
                  className="mt-2 tracking-widest uppercase font-normal text-sm max-w-[200px]  px-2 py-1 rounded"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  {recipient}
                </motion.div>

                <motion.button
                  onClick={handleOpenInvitation}
                  className="px-4 py-2 mt-4 font-bold tracking-wide text-gray-900 transition duration-300 bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-100 active:bg-gray-200 animate-shadow-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  OPEN INVITATION
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isCoverVisible && (
        <div>
          <div className="snap-start">
            <First />
          </div>
          <div className="snap-start">
            <FirstHalf />
          </div>
          <div className="snap-start">
            <Second />
          </div>
          <div className="snap-start">
            <Third />
          </div>
          <div className="snap-start">
            <Fourth />
          </div>
          <div className="snap-start">
            <Fifth />
          </div>
          <div className="snap-start">
            <Sixth />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileView;
