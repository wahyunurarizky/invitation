import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiCopy } from 'react-icons/bi';
import { Button } from '@mui/material';

const Sixth = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddressExpanded, setIsAddressExpanded] = useState(false);

  const address = 'The Oak Tower Lobby B - Jl. Perintis Kemerdekaan No.99, RT.1/RW.8, Pulo Gadung, Kec. Pulo Gadung, East Jakarta, DKI Jakarta 13260';
  const shortAddress = address.slice(0, 21) + '...';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <div className="flex flex-col items-center justify-start w-full gap-8 pt-16 pb-8 h-dvh font-Comfortaa">
      {/* Animated Line Divider */}
      {/* <motion.div
        className="px-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ originX: 0 }}
        viewport={{ once: false }}
      >
        <img src="/line.svg" className="w-full" alt="" />
      </motion.div> */}

      {/* Thank You Message Animation */}
      <motion.div
        className="px-10 font-crimson text-justify font-light text-inv-dark2 text-[20px]/[22px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Thanks for being part of our memorable day and let’s meet!
      </motion.div>

      {/* Optional Gift Text and Button */}
      <motion.div
        className="flex flex-col gap-8 px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <h3 className="font-crimson text-justify text-inv-grayA font-light text-[18px]/[20px]">
          Your presence and blessings are the greatest gifts to us. However, if you would like to share in our happiness, here is the information you can use{' '}
        </h3>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          onClick={() => setIsPopupOpen(true)}
          sx={{
            backgroundColor: '#171717',
            '&:hover': {
              backgroundColor: '#171717'
            },
            '&:focus': {
              backgroundColor: '#171717'
            }
          }}
        >
          Gift
        </Button>
      </motion.div>

      {/* Love Birds Section Animation */}
      <motion.div
        className="flex flex-col w-full px-10 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false }}
      >
        <p className="font-crimson font-light text-[16px] text-inv-grayA">Love birds,</p>
        <h2 className="font-gideon text-[22px] font-light text-inv-dark2">NANA & WAHYU</h2>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-sm p-8 mx-auto text-center bg-white rounded-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Best Wishes</h2>
              <svg className="mt-4" width="310" height="9" viewBox="0 0 310 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="245" y2="0.5" stroke="#616161" />
                <line x1="66" y1="8.5" x2="310" y2="8.50002" stroke="#616161" />
              </svg>

              {/* Bank Information Animation */}
              <motion.div
                className="flex flex-col items-center justify-center gap-2 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false }}
              >
                <img src="/bca.png" className="h-[20px]" alt="BCA Logo" />
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Wahyu Nur A - </p>
                  <span>6090551483</span>
                  <button onClick={() => copyToClipboard('6090551483')} className="px-2 py-1 text-sm text-white rounded bg-inv-dark">
                    <BiCopy />
                  </button>
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
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Naurotun N - </p>
                  <span>700010423437</span>
                  <button onClick={() => copyToClipboard('700010423437')} className="px-2 py-1 text-sm text-white rounded bg-inv-dark">
                    <BiCopy />
                  </button>
                </div>
              </motion.div>

              {/* Address Section Animation */}
              <motion.div
                className="flex flex-col items-center justify-center gap-2 my-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: false }}
              >
                <img src="/location.png" className="h-[24px]" alt="Location Icon" />
                <div className="">
                  <p className="font-semibold">
                    {isAddressExpanded ? address : shortAddress}{' '}
                    <button onClick={() => setIsAddressExpanded(!isAddressExpanded)} className="underline text-inv-dark">
                      {isAddressExpanded ? 'See Less' : 'See More'}
                    </button>
                  </p>
                </div>
              </motion.div>

              <svg className="mb-4" width="310" height="9" viewBox="0 0 310 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="245" y2="0.5" stroke="#616161" />
                <line x1="66" y1="8.5" x2="310" y2="8.50002" stroke="#616161" />
              </svg>

              <p className="text-sm text-gray-500">Thank you for all the attention and kindness given. We truly appreciate it.</p>

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
