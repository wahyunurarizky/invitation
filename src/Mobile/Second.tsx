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
          className="font-light font-crimson flex flex-col text-inv-grayA text-[24px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          Joglo Asri Sari Kuring Indah, Kota Cilegon
          <a className="flex items-center justify-start text-base" href="https://maps.app.goo.gl/Rdm81Bm1dh7B26up8" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
              <g fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M15.69 9.534a3 3 0 0 1 1.859 1.925l1.301 4.05c.512 1.594-.33 3.312-1.879 3.838a2.9 2.9 0 0 1-.927.153h-8.09C6.324 19.5 5 18.14 5 16.462c0-.323.05-.645.15-.952l1.3-4.05a3 3 0 0 1 1.86-1.926C8.116 8.901 8 8.297 8 7.786C8 5.419 9.79 3.5 12 3.5s4 1.919 4 4.286c0 .511-.115 1.115-.31 1.748"
                  clipRule="evenodd"
                  opacity={0.2}
                ></path>
                <path fillRule="evenodd" d="M10 8.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clipRule="evenodd"></path>
                <path
                  fillRule="evenodd"
                  d="M5.5 6.286C5.5 8.959 8.153 13.5 10 13.5c1.848 0 4.5-4.541 4.5-7.214C14.5 3.65 12.493 1.5 10 1.5S5.5 3.65 5.5 6.286m8 0c0 2.193-2.348 6.214-3.5 6.214c-1.151 0-3.5-4.02-3.5-6.214C6.5 4.187 8.075 2.5 10 2.5s3.5 1.687 3.5 3.786"
                  clipRule="evenodd"
                ></path>
                <path d="M13.435 9.14a.5.5 0 0 1 .369-.929a3 3 0 0 1 1.74 1.84l1.334 4A3 3 0 0 1 14.03 18H5.97a3 3 0 0 1-2.846-3.949l1.333-4A3 3 0 0 1 6.24 8.194a.5.5 0 1 1 .355.935a2 2 0 0 0-1.19 1.239l-1.333 4A2 2 0 0 0 5.97 17h8.062a2 2 0 0 0 1.897-2.633l-1.332-4a2 2 0 0 0-1.16-1.226"></path>
              </g>
            </svg>
            View Location
          </a>
        </motion.h4>
      </div>
    </motion.div>
  );
};

export default Second;
