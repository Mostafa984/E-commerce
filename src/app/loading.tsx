"use client"
import { motion } from 'framer-motion';
// FROM GEMINI AI GENERATED
const CartLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50 z-50">
      <div className="relative">
        {/* Animated Cart Icon */}
        <motion.div
          animate={{
            x: [-10, 10, -10],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </motion.div>

        {/* Rolling Wheels Animation */}
        <div className="flex justify-between px-5 mt-[-12px]">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 bg-blue-800 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-6 text-slate-500 font-medium tracking-widest uppercase text-sm"
      >
        LOADING....
      </motion.p>
    </div>
  );
};

export default CartLoader;