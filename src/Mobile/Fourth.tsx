import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiCopy } from 'react-icons/bi';

const Fourth = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddressExpanded, setIsAddressExpanded] = useState(false);

  const address = 'The Oak Tower Lobby B - Jl. Perintis Kemerdekaan No.99, RT.1/RW.8, Pulo Gadung, Kec. Pulo Gadung, East Jakarta, DKI Jakarta 13260';
  const shortAddress = address.slice(0, 21) + '...';

  useEffect(() => {
    const targetDate = new Date('December 8, 2024 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <div className="flex flex-col justify-between w-full gap-4 pt-16 pb-8 h-dvh font-Comfortaa">
      <div className="flex flex-col items-center w-full gap-8">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl font-semibold font-Belleza">{timeLeft.days}</div>
          <div className="text-sm text-inv-grayA">DAYS</div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl font-semibold font-Belleza">{timeLeft.hours}</div>
          <div className="text-sm text-inv-grayA">HOURS</div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl font-semibold font-Belleza">{timeLeft.minutes}</div>
          <div className="text-sm text-inv-grayA">MINUTES</div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl font-semibold font-Belleza">{timeLeft.seconds}</div>
          <div className="text-sm text-inv-grayA">SECONDS</div>
        </motion.div>
      </div>

      {/* Bouncing and Clickable Gift Image */}
      <motion.div
        className="flex items-center justify-center flex-1 h-full cursor-pointer"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        onClick={() => setIsPopupOpen(true)}
      >
        <img className="h-[120px]" src="/gift.png" alt="Gift" />
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
              <p className="mb-2 text-sm">
                Your presence and blessings are the greatest gifts to us. However, if you would like to share in our happiness, here is the information you can
                use:
              </p>
              <svg className="mt-4" width="310" height="9" viewBox="0 0 310 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="245" y2="0.5" stroke="#616161" />
                <line x1="66" y1="8.5" x2="310" y2="8.50002" stroke="#616161" />
              </svg>

              <motion.div
                className="flex flex-col items-center justify-center gap-2 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src="/bca.png" className="h-[20px]" alt="BCA Logo" />
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Wahyu Nur Arizky - </p>
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
                transition={{ duration: 0.5 }}
              >
                <img src="/mandiri.png" className="h-[24px]" alt="Mandiri Logo" />
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Naurotun Nadhifah - </p>
                  <span>700010423437</span>
                  <button onClick={() => copyToClipboard('700010423437')} className="px-2 py-1 text-sm text-white rounded bg-inv-dark">
                    <BiCopy />
                  </button>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-center gap-2 my-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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

export default Fourth;
