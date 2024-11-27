import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiCopy } from 'react-icons/bi';

const Sixth = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <div className="flex flex-col items-center justify-start w-full gap-6 pb-16 h-dvh font-Comfortaa">
      <div className="flex-1 w-full bg-bottom bg-cover bg-lastimg">
        {/* <img src="/lastimg.png" alt="Top Banner" className="object-contain object-bottom w-full h-full" /> */}
      </div>

      <motion.div
        className="px-10 font-crimson text-justify font-light text-inv-dark2 text-[20px]/[22px] mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Thanks for being part of our memorable day and let’s meet!
      </motion.div>

      <motion.div
        className="flex flex-col gap-8 px-10 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <h3 className="font-crimson text-justify text-inv-grayA font-light text-[18px]/[20px]">
          Your presence and blessings are the greatest gifts to us. However, if you would like to share in our happiness, please see the gift information here:{' '}
          <span onClick={() => setIsPopupOpen(true)} className="font-light underline cursor-pointer text-inv-dark2">
            Gift
          </span>
        </h3>
      </motion.div>

      <motion.div
        className="flex flex-col w-full px-10 mt-8 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false }}
      >
        <p className="font-crimson font-light text-[16px] text-inv-grayA">Lovebirds,</p>
        <h2 className="font-gideon text-[22px] font-light text-inv-dark2">NANA & WAHYU</h2>
      </motion.div>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-sm p-8 mx-auto text-center bg-white rounded-lg min-w-[400px]"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col items-center justify-center gap-2 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false }}
              >
                <img src="/bca.png" className="h-[20px]" alt="BCA Logo" />
                <div className="flex flex-col items-center justify-start gap-2">
                  <p className="font-semibold">Wahyu Nur Arizky</p>
                  <div className="flex items-start justify-center w-full gap-2 text-center">
                    <span>6090551483</span>
                    <button onClick={() => copyToClipboard('6090551483')} className="px-2 py-1 text-sm text-white rounded bg-inv-dark">
                      <BiCopy />
                    </button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-center gap-2 my-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: false }}
              >
                <img src="/mandiri.png" className="h-[24px]" alt="Mandiri Logo" />
                <div className="flex flex-col items-center justify-start gap-2">
                  <p className="font-semibold">Naurotun Nadhifah </p>
                  <div className="flex justify-center gap-2">
                    <span>700010423437</span>
                    <button onClick={() => copyToClipboard('700010423437')} className="px-2 py-1 text-sm text-white rounded bg-inv-dark">
                      <BiCopy />
                    </button>
                  </div>
                </div>
              </motion.div>
              <button onClick={() => setIsPopupOpen(false)} className="px-4 py-2 mt-4 text-black rounded hover:bg-white">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sixth;
