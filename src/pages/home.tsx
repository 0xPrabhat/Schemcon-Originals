import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Marquee } from '@/components/ui/marquee';
import { ScrollSponsors } from '@/components/ui/scroll-sponsors';

const tracks = [
  "Catalysis for Sustainable Future in Chemical Engineering",
  "Modelling and Simulation in Process Engineering",
  "Petroleum /Petrochemical/Polymer Technology",
  "Environmental and Sustainable Development",
  "Alternative Energy Sources and Storage",
  "AI/ML in Chemical/Allied Engineering",
  "Electro-Chemical Engineering",
  "Pharmaceutical Technology",
  "Biochemical Engineering",
  "Green Chemistry",
  "Nanotechnology",
  "Industry 5.0"
];

const abstractThemes = [
  "Catalysis for Sustainable Future in Chemical Engineering",
  "Modelling and Simulation in Process Engineering",
  "Petroleum/Petrochemical/Polymer Technology",
  "Environmental and Sustainable Development",
  "Alternative Energy Sources and Storage",
  "AI/ML in Chemical/Allied Engineering",
  "Electro-Chemical Engineering",
  "Pharmaceutical Technology",
  "Biochemical Engineering",
  "Green Chemistry",
  "Nanotechnology",
  "Industry 5.0"
];

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-jetbrains">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0A0A0A] overflow-hidden">
        {/* Grid Background - Optimized */}
        <div className="absolute inset-0 grid grid-cols-8 gap-2 opacity-10 pointer-events-none">
          {Array.from({ length: 32 }).map((_, i) => ( // Reduced from 64 to 32
            <div key={i} className="aspect-square border border-black/20 dark:border-white/20" />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Logos Section - Optimized */}
            <div className="flex justify-center items-center gap-8 mb-8">
              {[
                { src: "/images/logos/iiche.webp", alt: "IIChE Logo", delay: 0.1 },
                { src: "/images/logos/iiche.png", alt: "IIChE VIT Logo", delay: 0.2 },
                { src: "/images/logos/vit.png", alt: "VIT Vellore Logo", delay: 0.3 }
              ].map((logo, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: logo.delay,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 md:h-32"
                  loading="eager" // Prioritize loading
                />
              ))}
            </div>

            {/* Event Title - Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4,
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-pink-500 dark:text-[#00FF00]">
                SCHEMCON
              </h1>
              <p className="text-4xl font-bold mb-8 text-black dark:text-white">2025</p>
              <div className="bg-pink-500 dark:bg-[#00FF00] text-white dark:text-black p-4 neu-border inline-block">
                <p className="text-xl font-bold">03-04 OCTOBER 2025</p>
                <p>VIT VELLORE</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Optimized */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <ArrowRight size={32} className="rotate-90 text-black dark:text-white" />
        </motion.div>
      </section>

      {/* Abstract Themes Marquee */}
      <Marquee 
        items={abstractThemes} 
        className="border-y-4 border-pink-500 dark:border-[#00FF00]" 
        speed={30}
      />

      {/* Information Sections */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-[#1A1A1A] dark:to-black">
        <div className="container mx-auto px-4">
          {/* Main Cards - SCHEMCON and VIT */}
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-center mb-12 text-pink-500 dark:text-[#00FF00]">
              About The Conference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/80 dark:bg-zinc-900/80 p-8 rounded-xl shadow-xl 
                          border border-white/20 dark:border-zinc-700/20"
              >
                <h2 className="text-3xl font-bold mb-6 text-pink-500 dark:text-[#00FF00]">About SCHEMCON</h2>
                <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                  SCHEMCON, the Students' Chemical Engineering Congress, is an annual gathering organized by the Students chapter of the Indian Institute of Chemical Engineers (IIChE) under one of its regional centers. It provides a vital platform for Chemical Engineering students to connect, expand their knowledge, and explore the evolving landscape of their discipline.


                  SCHEMCON 2025 marks the 21st edition of this esteemed event, hosted collaboratively by the School of Chemical Engineering(SCHEME), VIT University, Vellore and the Vellore Regional Centre of the  Indian Institute of Chemical Engineers (IIChE), This year's theme,"Sustainable Development in Energy and Environment" aims to spotlight emerging trends and transformative advancements in the field. Set in a leading institution for Chemical engineering education, the event will feature diverse perspectives and groundbreaking ideas, attracting industry experts, researchers, academicians, and talented students from various domains.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/80 dark:bg-zinc-900/80 p-8 rounded-xl shadow-xl 
                          border border-white/20 dark:border-zinc-700/20"
              >
                <h2 className="text-3xl font-bold mb-6 text-pink-500 dark:text-[#00FF00]">VIT Vellore</h2>
                <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                  One of India's top engineering institutions, known for excellence in education and research.
                  With state-of-the-art facilities and a commitment to innovation, VIT Vellore continues to
                  shape the future of engineering education.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Organizations Section */}
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-center mb-12 text-pink-500 dark:text-[#00FF00]">
              Organizations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/80 dark:bg-zinc-900/80 p-8 rounded-xl shadow-xl 
                          border border-white/20 dark:border-zinc-700/20"
              >
                <h2 className="text-3xl font-bold mb-6 text-pink-500 dark:text-[#00FF00]">About IIChE</h2>
                <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                  The Indian Institute of Chemical Engineers (IIChE) is the premier professional organization 
                  dedicated to promoting excellence in chemical engineering education and practice in India. 
                  Founded in 1947, IIChE has been instrumental in advancing the chemical engineering profession.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/80 dark:bg-zinc-900/80 p-8 rounded-xl shadow-xl 
                          border border-white/20 dark:border-zinc-700/20"
              >
                <h2 className="text-3xl font-bold mb-6 text-pink-500 dark:text-[#00FF00]">About IIChE Vellore Regional Center</h2>
                <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                  The Vellore Regional Center of IIChE serves as a vital hub for chemical engineering professionals 
                  and students in the region. It actively promotes technical excellence and professional development.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Department and Award Section */}
          <div>
            <h2 className="text-5xl font-bold text-center mb-12 text-pink-500 dark:text-[#00FF00]">
              Department & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/80 dark:bg-zinc-900/80 p-8 rounded-xl shadow-xl 
                          border border-white/20 dark:border-zinc-700/20"
              >
                <h2 className="text-3xl font-bold mb-6 text-pink-500 dark:text-[#00FF00]">About CBE Department</h2>
                <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                  The Chemical and Biochemical Engineering Department is committed to excellence in education, 
                  research, and innovation. With state-of-the-art facilities and distinguished faculty, 
                  the department prepares students for successful careers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/80 dark:bg-zinc-900/80 p-8 rounded-xl shadow-xl 
                          border border-white/20 dark:border-zinc-700/20"
              >
                <h2 className="text-3xl font-bold mb-6 text-pink-500 dark:text-[#00FF00]">About MP Chary Award</h2>
                <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                  The MP Chary Award recognizes outstanding contributions to chemical engineering education 
                  and research. This prestigious award celebrates excellence and innovation in the field, 
                  inspiring future generations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <ScrollSponsors />

      {/* Conference Tracks Section - Optimized */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text font-jetbrains">
            Conference Tracks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass-container p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-black/80 dark:text-white/80">
                  {track}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 dark:bg-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-pink-500 dark:text-[#00FF00]">Ready to Join?</h2>
            <Link 
              to="/registration" 
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-8 py-4 bg-pink-500 dark:bg-[#00FF00] text-black dark:text-black font-bold 
                neu-border transform hover:translate-y-[-2px] hover:translate-x-[2px] 
                active:translate-y-[2px] active:translate-x-[-2px]
                transition-transform duration-200"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}