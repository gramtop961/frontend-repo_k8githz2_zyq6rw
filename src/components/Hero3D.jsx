import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative w-full h-[520px] md:h-[620px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlays (non-blocking) */}
      <div className="pointer-events-none absolute -inset-24 opacity-60 mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
        <div className="absolute -top-10 -right-10 w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-[380px] h-[380px] rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      {/* Copy */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 drop-shadow-sm">
            Smart Loan Tracker
          </h1>
          <p className="mt-3 md:mt-5 text-sm md:text-lg text-slate-200/90 dark:text-slate-300/90">
            A futuristic 3D fintech experience for transparent, gamified, and AI‑assisted loan utilization.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 md:gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#auth"
              className="px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-medium shadow-lg shadow-emerald-500/30">
              Get Started
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#dashboard"
              className="px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur border border-white/20">
              View Dashboard
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
