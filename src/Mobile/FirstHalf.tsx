import { motion } from 'framer-motion';

const FirstHalf = () => {
  return (
    <motion.div
      className="flex flex-col justify-center w-full gap-10 px-10 h-dvh bg-inv-white5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      <motion.div
        className="font-light font-crimson text-inv-dark2 text-[20px]/[18px] "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>With the grace of Allah,</div>
        <div className="text-inv-grayA text-[18px]/[20px] block mt-6 text-justify">
          we are blessed to begin our journey towards completing half of our deen. We ask for your prayers and blessings as we start this path with faith and
          love.
        </div>
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
          className="absolute left-24 -bottom-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-gideon text-[36px]/[36px] text-inv-dark2 mb-[12px]">
            Naurotun
            <br /> Nadhifah
          </h2>
          <h3 className="text-inv-grayA font-crimson text-[18px]/[20px] font-light">
            daughter of Ahmad Suhada <br />& Neneng Munawaroh
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
          className="absolute left-24 -bottom-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-gideon text-[36px]/[36px] text-inv-dark2 mb-[12px]">
            Wahyu
            <br />
            Nur Arizky
          </h2>
          <h3 className="text-inv-grayA font-crimson text-[18px]/[20px] font-light">son of Suyitno & Supami</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FirstHalf;
