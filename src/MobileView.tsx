import { useState } from 'react';
import { motion } from 'framer-motion';
import First from './Mobile/First';
import Second from './Mobile/Second';
import Third from './Mobile/Third';

const MobileView = ({ toggleMusic }: { toggleMusic: () => void }) => {
  const [isCoverVisible, setIsCoverVisible] = useState(true);

  const handleOpenInvitation = () => {
    setIsCoverVisible(false);
    toggleMusic();
  };

  return (
    <div className="w-full max-w-md mx-auto overflow-auto max-h-dvh bg-inv-white4">
      {isCoverVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col px-6 py-10 h-dvh font-crimson"
        >
          <h2 className="mb-4 text-xl font-light text-center">YOU'RE INVITED TO</h2>
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
                className="mb-4 text-xl tracking-widest"
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
                className="my-8 text-sm font-light tracking-widest font-RedHat "
              >
                <span className="date">MINGGU, 09 DESEMBER 2024</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
                Kepada Yth. <br />
                Bapak/Ibu/Sdr/I:
              </motion.div>
              <motion.div
                className="mt-2 font-semibold uppercase font-RedHat"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                Wahyu Nur Arizky
              </motion.div>

              <motion.button
                onClick={handleOpenInvitation}
                className="px-4 py-2 mt-4 font-semibold tracking-wide text-gray-900 transition duration-300 bg-white border border-gray-400 rounded-md shadow-md hover:bg-gray-100 active:bg-gray-200 animate-shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                OPEN INVITATION
              </motion.button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <First />
          <Second />
          <Third />
        </motion.div>
      )}
    </div>
  );
};

export default MobileView;
