import React, { useState } from 'react';
import { Smartphone, User, Shield, FileCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const TabButton = ({ active, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors border ${
      active
        ? 'bg-emerald-500/10 border-emerald-400/40 text-emerald-200'
        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
    }`}
  >
    <Icon className="h-4 w-4" />
    {label}
  </button>
);

const AuthPanel = () => {
  const [tab, setTab] = useState('mobile');
  const [otpSent, setOtpSent] = useState(false);

  return (
    <motion.div
      id="auth"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-3xl p-5 md:p-6 bg-gradient-to-b from-white/10 to-white/5 dark:from-white/5 dark:to-white/0 backdrop-blur-xl border border-white/10 shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">Sign in securely</h3>
          <p className="text-xs md:text-sm text-slate-300/80">Aadhaar, Mobile OTP, or DigiLocker</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-emerald-300">
          <CheckCircle2 className="h-5 w-5" />
          <span className="text-xs">Govt-grade KYC</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <TabButton active={tab==='mobile'} onClick={() => setTab('mobile')} icon={Smartphone} label="Mobile OTP" />
        <TabButton active={tab==='aadhaar'} onClick={() => setTab('aadhaar')} icon={User} label="Aadhaar OTP" />
        <TabButton active={tab==='digilocker'} onClick={() => setTab('digilocker')} icon={Shield} label="DigiLocker" />
      </div>

      {tab === 'mobile' && (
        <div className="space-y-3">
          <label className="block text-xs text-slate-300/80">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter 10-digit mobile"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          />
          <div className="flex gap-2">
            <button
              onClick={() => setOtpSent(true)}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium"
            >
              Send OTP
            </button>
            <input
              type="text"
              placeholder="Enter OTP"
              className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          {otpSent && (
            <p className="text-xs text-emerald-300">OTP sent successfully · Demo flow</p>
          )}
        </div>
      )}

      {tab === 'aadhaar' && (
        <div className="space-y-3">
          <label className="block text-xs text-slate-300/80">Aadhaar Number</label>
          <input
            type="text"
            placeholder="XXXX-XXXX-XXXX"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none"
          />
          <button className="w-full px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium">Request OTP</button>
        </div>
      )}

      {tab === 'digilocker' && (
        <div className="space-y-3">
          <p className="text-sm text-slate-300/90 flex items-center gap-2">
            <FileCheck className="h-4 w-4 text-emerald-300" />
            Verify identity via DigiLocker for secure KYC.
          </p>
          <button className="w-full px-4 py-2 rounded-xl bg-indigo-500/90 hover:bg-indigo-400 text-white text-sm font-medium">Connect DigiLocker</button>
        </div>
      )}
    </motion.div>
  );
};

export default AuthPanel;
