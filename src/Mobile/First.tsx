import { motion } from 'framer-motion';

const First = () => {
  return (
    <motion.div
      className="flex flex-col justify-between h-dvh"
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }} // Triggers animation when 50% of the element is in view
    >
      <div className="flex-1 overflow-hidden bg-bottom bg-cover bg-mobile1 animate-zoomInOut">
        <img src="/mobile1.png" className="w-full opacity-0" alt="" />
      </div>
      <div className="p-10">
        <motion.h2
          className="font-Comfortaa text-[24px] text-inv-grayA font-light max-w-[200px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
        >
          TO CELEBRATE THE JOYOUS UNION OF
        </motion.h2>
        <motion.h1
          className="font-gideon text-[60px]/[60px] mt-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ amount: 0.5 }}
        >
          NANA & WAHYU
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default First;
