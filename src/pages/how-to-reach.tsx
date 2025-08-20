import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HowToReach() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] relative overflow-hidden">
      {/* Animated Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: 'url("/images/maps.avif")',
          animation: 'slowZoom 30s infinite alternate'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 dark:from-black/90 dark:via-black/70 dark:to-black/90 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-br from-white/40 to-white/30 dark:from-zinc-900/40 dark:to-zinc-800/30 
                    p-8 md:p-12 rounded-2xl shadow-2xl 
                    border border-pink-200/50 dark:border-[#00FF00]/20 max-w-5xl mx-auto
                    hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-all duration-300
                    shadow-pink-100/50 dark:shadow-[#00FF00]/10
                    hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-center mb-12 
                     bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 
                     dark:from-[#00FF00] dark:via-[#00DD00] dark:to-[#00FF00] 
                     bg-clip-text text-transparent
                     font-cinzel tracking-wide uppercase 
                     [text-shadow:_2px_2px_2px_rgb(0_0_0_/_10%)]
                     animate-gradient-x"
          >
            How to Reach
          </motion.h1>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Transportation Options */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* By Train */}
              <motion.div 
                variants={itemVariants}
                className="group bg-gradient-to-br from-white/70 to-white/60 
                          dark:from-zinc-900/70 dark:to-zinc-800/60 
                          p-6 rounded-xl border border-pink-200/50 dark:border-[#00FF00]/20
                          hover:bg-white/90 dark:hover:bg-zinc-900/90 
                          transition-all duration-300
                          hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20
                          hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500/20 to-rose-500/20 
                                dark:from-[#00FF00]/20 dark:to-[#00DD00]/20 
                                rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500 dark:text-[#00FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 
                               dark:from-[#00FF00] dark:to-[#00DD00] 
                               bg-clip-text text-transparent">By Train</h2>
                </div>
                <p className="text-gray-800 dark:text-white/90">
                  Katpadi Railway Station (KPD) is the nearest railway station, approximately 3 km from the campus.
                  <br /><br />
                  Regular bus and taxi services are available from the station to VIT.
                  <br /><br />
                  The Katpadi Railway Station is well-connected to major cities like Chennai and Bangalore.
                </p>
                
                {/* Excel Upload Section */}
                <div className="mt-6 p-4 bg-gradient-to-br from-white/50 to-white/40 
                              dark:from-zinc-800/50 dark:to-zinc-700/40 
                              rounded-lg border border-pink-200/30 dark:border-[#00FF00]/30
                              hover:from-white/60 hover:to-white/50 
                              dark:hover:from-zinc-800/60 dark:hover:to-zinc-700/50 
                              transition-all duration-300">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-500 
                               dark:from-[#00FF00] dark:to-[#00DD00] 
                               bg-clip-text text-transparent mb-2">Train Schedule</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    View the train schedule for detailed information:
                  </p>
                  <a 
                    href="https://1drv.ms/x/c/677b5d5e53cd80ca/EW0G75oDeINJqhAYS7mGpqoBiI7IIK-epaHDlCinTk3qew" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 
                             bg-gradient-to-r from-pink-500/20 to-rose-500/20 
                             dark:from-[#00FF00]/20 dark:to-[#00DD00]/20 
                             text-pink-700 dark:text-[#00FF00] rounded-lg 
                             hover:from-pink-500/30 hover:to-rose-500/30 
                             dark:hover:from-[#00FF00]/30 dark:hover:to-[#00DD00]/30 
                             transition-all duration-300 hover:scale-105
                             hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Train Schedule
                  </a>
                </div>
              </motion.div>

              {/* By Bus */}
              <motion.div 
                variants={itemVariants}
                className="group bg-gradient-to-br from-white/70 to-white/60 
                          dark:from-zinc-900/70 dark:to-zinc-800/60 
                          p-6 rounded-xl border border-pink-200/50 dark:border-[#00FF00]/20
                          hover:bg-white/90 dark:hover:bg-zinc-900/90 
                          transition-all duration-300
                          hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20
                          hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500/20 to-rose-500/20 
                                dark:from-[#00FF00]/20 dark:to-[#00DD00]/20 
                                rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500 dark:text-[#00FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 
                               dark:from-[#00FF00] dark:to-[#00DD00] 
                               bg-clip-text text-transparent">By Bus</h2>
                </div>
                <p className="text-gray-800 dark:text-white/90">
                  Vellore Bus Stand is well-connected to major cities.
                  <br /><br />
                  Local bus services (Route No. 1) connect the bus stand to VIT campus.
                </p>
              </motion.div>

              {/* By Air */}
              <motion.div 
                variants={itemVariants}
                className="group bg-gradient-to-br from-white/70 to-white/60 
                          dark:from-zinc-900/70 dark:to-zinc-800/60 
                          p-6 rounded-xl border border-pink-200/50 dark:border-[#00FF00]/20
                          hover:bg-white/90 dark:hover:bg-zinc-900/90 
                          transition-all duration-300
                          hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20
                          hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500/20 to-rose-500/20 
                                dark:from-[#00FF00]/20 dark:to-[#00DD00]/20 
                                rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500 dark:text-[#00FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 
                               dark:from-[#00FF00] dark:to-[#00DD00] 
                               bg-clip-text text-transparent">By Air</h2>
                </div>
                <p className="text-gray-800 dark:text-white/90">
                  Chennai International Airport (MAA) is the nearest airport, approximately 140 km from Vellore.
                  <br /><br />
                  Regular bus and taxi services are available from the airport to Vellore.
                </p>
              </motion.div>

              {/* By Road */}
              <motion.div 
                variants={itemVariants}
                className="group bg-gradient-to-br from-white/70 to-white/60 
                          dark:from-zinc-900/70 dark:to-zinc-800/60 
                          p-6 rounded-xl border border-pink-200/50 dark:border-[#00FF00]/20
                          hover:bg-white/90 dark:hover:bg-zinc-900/90 
                          transition-all duration-300
                          hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20
                          hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500/20 to-rose-500/20 
                                dark:from-[#00FF00]/20 dark:to-[#00DD00]/20 
                                rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500 dark:text-[#00FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 
                               dark:from-[#00FF00] dark:to-[#00DD00] 
                               bg-clip-text text-transparent">By Road</h2>
                </div>
                <p className="text-gray-800 dark:text-white/90">
                  Vellore is well-connected by National Highways (NH-4 and NH-46).
                </p>
              </motion.div>
            </div>

            {/* Map Embed */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-white/70 to-white/60 
                        dark:from-zinc-900/70 dark:to-zinc-800/60 
                        p-6 rounded-xl border border-pink-200/50 dark:border-[#00FF00]/20
                        hover:bg-white/90 dark:hover:bg-zinc-900/90 
                        transition-all duration-300
                        hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 
                           dark:from-[#00FF00] dark:to-[#00DD00] 
                           bg-clip-text text-transparent mb-4">Location Map</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg
                            hover:shadow-xl hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20
                            transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.002966615217!2d79.1574!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5292b83236611%3A0x7c5b1c5b1c5b1c5b!2sVIT%20University!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Nearby Places Link */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-white/70 to-white/60 
                        dark:from-zinc-900/70 dark:to-zinc-800/60 
                        p-6 rounded-xl border border-pink-200/50 dark:border-[#00FF00]/20
                        hover:bg-white/90 dark:hover:bg-zinc-900/90 
                        transition-all duration-300
                        hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 
                           dark:from-[#00FF00] dark:to-[#00DD00] 
                           bg-clip-text text-transparent mb-4">Nearby Places to Visit</h2>
              <p className="text-gray-800 dark:text-white/90 mb-6">
                Explore fascinating destinations near VIT University during your visit to Vellore. Discover historical sites, temples, and natural attractions.
              </p>
              <Link 
                to="/nearby-places" 
                className="inline-flex items-center px-6 py-3 
                         bg-gradient-to-r from-pink-500/20 to-rose-500/20 
                         dark:from-[#00FF00]/20 dark:to-[#00DD00]/20 
                         text-pink-700 dark:text-[#00FF00] rounded-lg 
                         hover:from-pink-500/30 hover:to-rose-500/30 
                         dark:hover:from-[#00FF00]/30 dark:hover:to-[#00DD00]/30 
                         transition-all duration-300 font-medium
                         hover:scale-105 hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20"
              >
                <span>Explore Nearby Places</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.2);
          }
        }
        
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
} 