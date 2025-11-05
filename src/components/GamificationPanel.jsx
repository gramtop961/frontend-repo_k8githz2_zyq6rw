import React from 'react';
import { Trophy, Star, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Badge = ({ label, color }) => (
  <div className={`px-3 py-2 rounded-2xl text-xs font-medium border ${color} bg-white/5 backdrop-blur`}>{label}</div>
);

const GamificationPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full rounded-3xl p-5 md:p-6 bg-gradient-to-b from-white/10 to-white/5 dark:from-white/5 dark:to-white/0 backdrop-blur-xl border border-white/10 shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-300" />
          <h3 className="text-lg md:text-xl font-semibold text-white">Gamification</h3>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Badge label="100% Transparent Borrower" color="border-emerald-400/40 text-emerald-200" />
          <Badge label="On-Time Repayer" color="border-cyan-400/40 text-cyan-200" />
          <Badge label="Smart Proof Uploader" color="border-violet-400/40 text-violet-200" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
          <p className="text-sm text-slate-300/90">Your Rank</p>
          <div className="mt-2 flex items-center gap-3">
            <Crown className="h-6 w-6 text-amber-300" />
            <div>
              <p className="text-white font-semibold">#12</p>
              <p className="text-xs text-slate-400">District Leaderboard</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
          <p className="text-sm text-slate-300/90">Milestones</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge label="Upload 10 proofs" color="border-emerald-400/40 text-emerald-200" />
            <Badge label="Maintain 80% score" color="border-cyan-400/40 text-cyan-200" />
            <Badge label="Zero flags" color="border-violet-400/40 text-violet-200" />
          </div>
        </div>

        <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
          <p className="text-sm text-slate-300/90">Rewards</p>
          <div className="mt-3 flex items-center gap-2 text-amber-200">
            <Star className="h-5 w-5" />
            <p className="text-sm">Redeem points for vouchers & perks</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GamificationPanel;
