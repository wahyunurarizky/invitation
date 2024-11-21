import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Fourth = () => {
  const [timeLeft, setTimeLeft] = useState<Record<string, number>>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('December 8, 2024 08:00:00').getTime();

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

  return (
    <div className="relative flex flex-col justify-between w-full gap-4 pt-16 pb-8 h-dvh font-Comfortaa">
      <img src="/circle2.png" alt="" className="absolute z-20 -top-24 -left-24" />
      {/* Title Animation (first to show) */}
      <motion.div
        className="px-10 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="font-gideon text-[60px]/[62px]">
          THERE
          <br />
          ARE
        </h1>
      </motion.div>

      {/* Countdown Section (animated with staggered delays) */}
      <div className="flex flex-col items-start w-full gap-8 px-10">
        {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
          <motion.div
            key={unit}
            className="flex flex-col items-start justify-center gap-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + 0.3 * index }} // Staggered delays
            viewport={{ amount: 0.5 }}
          >
            <div className="text-[40px]/[30px] font-light text-inv-dark2 font-gideon">{timeLeft[unit]}</div>
            <div className="font-light text-[20px] text-inv-grayA font-crimson">{unit}</div>
          </motion.div>
        ))}
      </div>

      {/* "until 08/12/2024" Text (appears after countdown) */}
      <motion.div
        className="px-10 font-light font-crimson text-[20px] text-inv-grayA"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }} // Delay to show after countdown
        viewport={{ amount: 0.5 }}
      >
        until 08/12/2024
      </motion.div>

      {/* Line SVG (appears last with slight delay) */}
      <motion.div
        className="px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }} // Delay to show after text
        viewport={{ amount: 0.5 }}
      >
        <img src="/line.svg" className="w-full" alt="Line decoration" />
      </motion.div>
    </div>
  );
};

export default Fourth;
