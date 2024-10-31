import { motion } from 'framer-motion';

const Second = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ amount: 0.5 }}>
      <motion.img
        src="/mobile3.png"
        className="w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ amount: 0.5 }}
        alt=""
      />
      <div className="p-10">
        <motion.h2
          className="font-gideon text-[60px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ amount: 0.5 }}
        >
          08 Desember 2024
        </motion.h2>
        <motion.h4
          className="font-light font-crimson text-inv-grayA text-[24px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          Joglo Asri Sari Kuring Indah, Kota Cilegon
        </motion.h4>
      </div>
    </motion.div>
  );
};

export default Second;
