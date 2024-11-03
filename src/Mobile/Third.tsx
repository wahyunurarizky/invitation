import { motion } from 'framer-motion';

const Third = () => {
  return (
    <motion.div
      className="flex flex-col justify-between w-full h-screen py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      {/* Animated top SVG flowers */}
      <motion.div
        className="flex justify-center w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ amount: 0.5 }}
      >
        <svg width="310" height="9" viewBox="0 0 310 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="245" y2="0.5" stroke="#616161" />
          <line x1="66" y1="8.5" x2="310" y2="8.50002" stroke="#616161" />
        </svg>
      </motion.div>

      {/* Main content animation */}
      <motion.div
        className="flex-1 p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="font-gideon text-[60px]">DETAILS</h1>
        <h2 className="font-gideon text-[40px] mt-20">08.00 - 10.30</h2>
        <h3 className="text-[24px] font-crimson font-light text-inv-grayA">Akad Nikah</h3>
        <h2 className="font-gideon text-[40px] mt-10">08.00 - 10.30</h2>
        <h3 className="text-[24px] font-crimson font-light text-inv-grayA">Greeting Guest</h3>
      </motion.div>

      {/* Animated bottom SVG flowers */}
      <motion.div
        className="flex justify-center w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ amount: 0.5 }}
      >
        <svg width="310" height="9" viewBox="0 0 310 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="245" y2="0.5" stroke="#616161" />
          <line x1="66" y1="8.5" x2="310" y2="8.50002" stroke="#616161" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Third;
