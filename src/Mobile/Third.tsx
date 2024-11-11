import { motion } from 'framer-motion';

const Third = () => {
  return (
    <motion.div
      className="flex flex-col justify-between w-full pt-16 pb-8 h-dvh"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      {/* Main content animation */}
      <motion.div
        className="flex-1 px-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="font-gideon text-[60px]">DETAILS</h1>

        {/* Akad Nikah Animation from Left */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ amount: 0.5 }}>
          <h2 className="font-gideon text-[40px] mt-20">08.00 - 10.30</h2>
          <h3 className="text-[24px] font-Comfortaa font-light text-inv-grayA">Akad Nikah</h3>
        </motion.div>

        {/* Greeting Guest Animation from Right */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ amount: 0.5 }}>
          <h2 className="font-gideon text-[40px] mt-10">10.30 - 14.00</h2>
          <h3 className="text-[24px] font-Comfortaa font-light text-inv-grayA">Greeting Guest</h3>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ amount: 0.5 }}
        className="flex items-end justify-end p-8 2-full"
      >
        <img src="/flower.webp" className="w-40" alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Third;
