import React from 'react';
import { Trophy, Coins, CalendarClock, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, title, value, accent }) => (
  <div className="flex-1 min-w-[180px] rounded-2xl p-4 bg-white/5 border border-white/10 backdrop-blur">
    <div className="flex items-center gap-3">
      <div className={`p-2.5 rounded-xl ${accent} text-white/90`}> 
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs text-slate-300/80">{title}</p>
        <p className="text-lg font-semibold text-white">{value}</p>
      </div>
    </div>
  </div>
);

const ProgressBar = ({ percent }) => (
  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400"
      style={{ width: `${percent}%` }}
    />
  </div>
);

const DashboardOverview = () => {
  const utilization = 62;

  return (
    <motion.div
      id="dashboard"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="w-full rounded-3xl p-5 md:p-6 bg-gradient-to-b from-white/10 to-white/5 dark:from-white/5 dark:to-white/0 backdrop-blur-xl border border-white/10 shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-white">Loan Overview</h3>
        <span className="text-xs text-slate-300/80">Education • Disbursed</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <StatCard icon={Coins} title="Loan Balance" value="₹ 2,40,000" accent="bg-emerald-500/20" />
        <StatCard icon={Gauge} title="Utilized" value={`${utilization}%`} accent="bg-cyan-500/20" />
        <StatCard icon={CalendarClock} title="Next Due" value="15 Dec 2025" accent="bg-indigo-500/20" />
        <StatCard icon={Trophy} title="Points" value="1,420" accent="bg-violet-500/20" />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-slate-200/90">Utilization Progress</p>
          <span className="text-xs text-slate-300/70">Milestone: 75% for badge</span>
        </div>
        <ProgressBar percent={utilization} />
      </div>
    </motion.div>
  );
};

export default DashboardOverview;
