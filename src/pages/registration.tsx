import React from 'react';
import { motion } from 'framer-motion';

const bubbles = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  size: Math.random() * 300 + 100, // Random size between 100-400px
  initialX: Math.random() * 100 - 50, // Random initial X position
  initialY: Math.random() * 100 - 50, // Random initial Y position
  duration: Math.random() * 20 + 15 // Random duration between 15-35s
}));

export function Registration() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-black dark:via-zinc-900 dark:to-[#001A00] font-jetbrains pt-8 relative overflow-hidden">
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ 
              x: `${bubble.initialX}%`, 
              y: `${bubble.initialY}%`,
              scale: 0
            }}
            animate={{ 
              x: [`${bubble.initialX}%`, `${bubble.initialX + 30}%`, `${bubble.initialX - 20}%`, `${bubble.initialX}%`],
              y: [`${bubble.initialY}%`, `${bubble.initialY - 40}%`, `${bubble.initialY + 20}%`, `${bubble.initialY}%`],
              scale: [0, 1, 0.8, 1]
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              width: bubble.size,
              height: bubble.size,
              background: `radial-gradient(circle at 30% 30%, ${bubble.id % 2 === 0 ? 'rgb(244 114 182 / 0.2)' : 'rgb(251 113 133 / 0.2)'}, transparent)`,
              filter: 'blur(8px)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/40 dark:bg-zinc-900/30 p-8 md:p-12 rounded-2xl shadow-2xl 
                    border border-pink-200/50 dark:border-zinc-700/50 max-w-4xl mx-auto
                    hover:bg-white/50 dark:hover:bg-zinc-900/40 transition-colors duration-300
                    shadow-pink-100 dark:shadow-[#00FF00]/10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-[#00FF00] dark:to-[#00DD00] bg-clip-text text-transparent
                         font-cinzel tracking-wide uppercase [text-shadow:_2px_2px_2px_rgb(0_0_0_/_10%)]">
            Registration Fees
          </h1>

          <div className="overflow-hidden rounded-xl border border-pink-200/50 dark:border-[#00FF00]/20 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse backdrop-blur-md bg-white/60 dark:bg-black/50">
                <thead>
                  <tr className="border-b-2 border-pink-300/50 dark:border-[#00FF00]/50 bg-gradient-to-r from-pink-100/80 to-rose-100/80 dark:from-[#00FF00]/10 dark:to-[#00DD00]/10">
                    <th className="py-6 px-6 text-left text-lg font-bold bg-gradient-to-r from-pink-500 to-rose-500 dark:from-[#00FF00] dark:to-[#00DD00] bg-clip-text text-transparent font-cinzel">Category</th>
                    <th className="py-6 px-6 text-left text-lg font-bold bg-gradient-to-r from-pink-500 to-rose-500 dark:from-[#00FF00] dark:to-[#00DD00] bg-clip-text text-transparent font-cinzel">IIChE Member</th>
                    <th className="py-6 px-6 text-left text-lg font-bold bg-gradient-to-r from-pink-500 to-rose-500 dark:from-[#00FF00] dark:to-[#00DD00] bg-clip-text text-transparent font-cinzel">Non-Member</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-200/30 dark:divide-[#00FF00]/30">
                  {[
                    ["Student (UG/PG)", "Rs. 750", "Rs. 1000"],
                    ["Research Scholar", "Rs. 1000", "Rs. 1500"],
                    ["Academics", "Rs. 1500", "Rs. 2000"],
                    ["Industry", "Rs. 2000", "Rs. 3000"],
                    ["Accompanying Person", "---", "Rs. 1000"],
                    ["Overseas Delegates", "$150", "$250"]
                  ].map((row, index) => (
                    <tr key={index} 
                        className="backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-50/50 hover:to-rose-50/50 
                                 dark:hover:from-[#00FF00]/5 dark:hover:to-[#00DD00]/5
                                 transition-colors duration-300">
                      <td className="py-5 px-6 text-gray-800 dark:text-white/80 font-medium">{row[0]}</td>
                      <td className="py-5 px-6 text-gray-800 dark:text-white/80 font-medium">{row[1]}</td>
                      <td className="py-5 px-6 text-gray-800 dark:text-white/80 font-medium">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
                </div>
              </div>

          <div className="mt-12 text-center">
            <a 
              href="https://events.vit.ac.in/" 
              className="inline-block px-8 py-4 
                        backdrop-blur-xl bg-white/40 dark:bg-zinc-900/30
                        border border-pink-200/50 dark:border-[#00FF00]/30
                        rounded-xl shadow-lg
                        font-cinzel font-bold text-lg tracking-wider uppercase
                        gradient-text
                        transform hover:scale-105 hover:bg-white/50 dark:hover:bg-zinc-900/40
                        active:scale-95
                        transition-all duration-300"
              >
                Register Now
            </a>
            </div>
          </motion.div>
      </div>
    </div>
  );
}