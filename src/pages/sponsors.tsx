import React from 'react';
import { motion } from 'framer-motion';

const sponsorshipPrograms = [
  ['Diamond', 'Rs. 5,00,000', 'Platinum', 'Rs. 3,00,000'],
  ['Gold', 'Rs. 2,00,000', 'Silver', 'Rs. 1,00,000'],
  ['Lunch', 'Rs. 1,00,000/day', 'Dinner', 'Rs. 1,50,000/day'],
  ['TECHNICAL PARTNER', 'Rs. 50,000', 'High Tea', 'Rs. 35,000/day'],
];

const souvenirAds = [
  ['Inside Front', 'Rs. 30,000'],
  ['Inside Back', 'Rs. 20,000'],
  ['Back', 'Rs. 25,000'],
  ['Full Page', 'Rs. 10,000'],
  ['Half Page', 'Rs. 5,000'],
];

export function Sponsors() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-black dark:via-zinc-900 dark:to-[#001A00] font-jetbrains py-20 relative overflow-hidden">
      <head>
        <title>Sponsorship Opportunities - SCHEMCON 2025</title>
        <meta name="description" content="Explore sponsorship opportunities for SCHEMCON 2025 at VIT Vellore." />
      </head>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Sponsorship Programs Section */}
          <div className="glass-container p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text font-jetbrains">
            BECOME A SPONSER
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-pink-200/30 dark:divide-[#00FF00]/30">
                  {sponsorshipPrograms.map((row, index) => (
                    <tr key={index} className="hover:bg-white/40 dark:hover:bg-zinc-900/40 transition-colors">
                      <td className="py-4 px-4 text-black/80 dark:text-white/80 font-medium">{row[0]}</td>
                      <td className="py-4 px-4 text-pink-600 dark:text-[#00FF00] font-bold">{row[1]}</td>
                      <td className="py-4 px-4 text-black/80 dark:text-white/80 font-medium">{row[2]}</td>
                      <td className="py-4 px-4 text-pink-600 dark:text-[#00FF00] font-bold">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Souvenir Advertisement Section */}
          <div className="glass-container p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text font-jetbrains">
              Souvenir Advertisement
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-pink-300/50 dark:border-[#00FF00]/50">
                    <th className="py-4 px-6 text-left text-lg font-bold gradient-text font-jetbrains">Advertisement Type</th>
                    <th className="py-4 px-6 text-left text-lg font-bold gradient-text font-jetbrains">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-200/30 dark:divide-[#00FF00]/30">
                  {souvenirAds.map((row, index) => (
                    <tr key={index} className="hover:bg-white/40 dark:hover:bg-zinc-900/40 transition-colors">
                      <td className="py-4 px-6 text-black/80 dark:text-white/80 font-medium">{row[0]}</td>
                      <td className="py-4 px-6 text-pink-600 dark:text-[#00FF00] font-bold">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-container p-8 text-center"
          >
            <p className="text-lg text-black/80 dark:text-white/80 mb-8">
              For sponsorship inquiries, please contact us at{' '}
              <a href="mailto:iicheschemcon2025@vit.ac.in" className="gradient-text font-bold">
                iicheschemcon2025@vit.ac.in
              </a>
            </p>

            {/* Download Brochure Button */}
            <motion.a
              href="/brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4
                        backdrop-blur-xl bg-white/40 dark:bg-zinc-900/30
                        border border-pink-200/50 dark:border-[#00FF00]/30
                        rounded-xl shadow-lg
                        font-cinzel font-bold text-lg
                        transform hover:scale-105 hover:bg-white/50 dark:hover:bg-zinc-900/40
                        active:scale-95
                        transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="gradient-text">
                Download Brochure
              </span>
              <svg 
                className="w-5 h-5 text-pink-500 dark:text-[#00FF00]" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}