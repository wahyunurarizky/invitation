import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SwitchModeAlert = ({ onConfirm }: { onConfirm: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Close the alert after a delay or on user action
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 8000); // 5 seconds
    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="fixed backdrop-blur-sm inset-0 flex items-center justify-center z-[1000]"
    >
      <div className="w-full max-w-sm p-4 text-center bg-white rounded-lg shadow-lg font-Comfortaa">
        <h3 className="text-lg font-semibold">Switch to Light Mode?</h3>
        <p className="mt-2 text-gray-500">For a better experience in bright environments</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button onClick={onConfirm} className="px-4 py-2 text-white transition rounded-lg bg-inv-dark2 hover:bg-inv-dark">
            Yes, switch
          </button>
          <button onClick={() => setIsVisible(false)} className="px-4 py-2 text-gray-700 transition bg-gray-300 rounded-lg hover:bg-gray-400">
            No, thanks
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SwitchModeAlert;
