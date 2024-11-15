import { motion } from 'framer-motion';

const FirstHalf = () => {
  return (
    <motion.div
      className="flex flex-col justify-center w-full gap-8 p-10 h-dvh bg-inv-white5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      <motion.div
        className="font-light font-crimson text-inv-dark2 text-[18px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Insya Allah will get married
        <br /> to complete half the faith:
      </motion.div>

      <div className="relative">
        <motion.img
          src="/Nana.png"
          className="w-[250px]"
          alt=""
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute right-0 -bottom-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-gideon text-[40px]/[46px] text-inv-dark2">
            Naurotun
            <br /> Nadhifah
          </h2>
          <h3 className="text-inv-grayA font-crimson text-[18px]/[20px] font-light">
            daughter of A. Suhada Husni <br />& Neneng Munawaroh
          </h3>
        </motion.div>
      </div>

      <div className="relative mt-8">
        <motion.img
          src="/Wahyu.png"
          className="w-[250px]"
          alt=""
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute right-0 -bottom-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-gideon text-[40px]/[46px] text-inv-dark2">
            Wahyu
            <br /> Nur Arizky
          </h2>
          <h3 className="text-inv-grayA font-crimson text-[18px]/[20px] font-light">son of Suyitno & Supami</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FirstHalf;
