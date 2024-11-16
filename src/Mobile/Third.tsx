import { motion } from 'framer-motion';

const Third = () => {
  return (
    <motion.div
      className="relative flex flex-col justify-start w-full pt-16 pb-8 h-dvh"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      {/* Main content animation */}
      <motion.div
        className="px-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="font-gideon text-[60px]/[62px]">
          TIMING <br />
          OF
          <br />
          THE DAY
        </h1>
      </motion.div>

      {/* Animated timing.svg with fade-in and slide-up effect */}
      <motion.img
        src="/timing.svg"
        className="w-[280px] mr-10 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        alt="Timing Illustration"
      />

      {/* Animated flower image with hover effect */}
      {/* <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ amount: 0.5 }}
        className="absolute bottom-0 flex items-end justify-start h-full p-8 -right-0 opacity-15"
      >
        <motion.img
          src="/flower.png"
          className="w-40 opacity-40"
          alt="Flower"
          whileHover={{
            scale: 1.1, // Slight scaling on hover
            rotate: 10 // Small rotation on hover
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.div> */}
    </motion.div>
  );
};

export default Third;
