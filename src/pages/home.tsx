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
      <head>
        <title>SCHEMCON 2025 - Students' Chemical Engineering Congress</title>
        <meta name="description" content="Join us for SCHEMCON 2025 at VIT Vellore, focusing on sustainable development in chemical engineering." />
      </head>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 dark:bg-[#0A0A0A] overflow-hidden">
        {/* Add background image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/refinery.avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.3
          }}
        />

        {/* Grid Background - Now overlaying the image */}
        <div className="absolute inset-0 grid grid-cols-8 gap-2 opacity-10 pointer-events-none">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="aspect-square border border-black/20 dark:border-white/20" />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10 mt-0">
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
                  shape the future of engineering education.Vellore Institute of Technology or VIT is a private deemed university in Vellore, Tamil Nadu, India.The institution offers 66 Undergraduate, 58 Postgraduate, 15 Integrated, 2 Research and 2 M.Tech. Industrial Programmes. It has campuses in Vellore and Chennai and three sister universities as distinct state private universities in Amaravati, Bhopal, Bengaluru in India and an international campus in Mauritius.VIT was founded in 1984 as Vellore Engineering College, as a self-financing engineering college under Anna University by its founder G. Viswanathan. In 2001, It became Deemed university.
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
                  Founded in 1947, IIChE has been instrumental in advancing the chemical engineering profession.The Indian Institute of Chemical Engineers (IIChE) is the professional body for chemical engineers in India. The headquarter of IIChE is in the campus of Jadavpur University, Kolkata. The organization has 42 regional centers along with 172 student chapters spread throughout India. The institution's membership comprises academics, professionals from the chemical industry, researchers, and students.IIChE also publishes scientific journal "Indian Chemical Engineer", which is published in two sections A and B. Section A provides an international platform for presenting original research work and Section B features technical articles or overview of technology with a view to guiding practicing chemical engineers.
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
                  and students in the region. It actively promotes technical excellence and professional development.The Indian Institute of Chemical Engineers (IIChE) is a prominent professional body in India, dedicated to the advancement of chemical engineering. Among its various regional centers, the Vellore Regional Centre plays a significant role in fostering academic and research excellence in the field.In collaboration with the School of Chemical Engineering (SCHEME) at Vellore Institute of Technology (VIT), the Vellore Regional Centre has been instrumental in launching state-of-the-art facilities. Notably, they inaugurated the high-end "Instrumentation and Simulation Research Laboratory," aiming to provide advanced research opportunities for students and professionals alike. 
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
                <h2 className="text-3xl font-bold mb-6 text-pink-500 dark:text-[#00FF00]">About SCHEME Department</h2>
                <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                  The Chemical and Biochemical Engineering Department is committed to excellence in education, 
                  research, and innovation. With state-of-the-art facilities and distinguished faculty, 
                  the department prepares students for successful careers.Welcome to the School of Chemical Engineering (SCHEME), VIT Vellore.Since the inception in 1994, the School of Chemical Engineering has gained its capacity incrementally, first to ensure that all academic programmes were offered professionally and to ensure that the graduates produced were of the highest quality and much sought by the industry and employers.The school has state-of-the art infrastructural facilities for training the students. The students are trained by highly qualified, experienced and dedicated faculty. We stress on the importance of the latest relevant softwares and to ensure that the students are given practical hands on training on the latest software used by industries such as ASPEN PLUS, HYSYS, MATLAB, and SOLID WORKS. 
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
                  inspiring future generations.The M.P. Chary Award, presented annually by IIChE, honors an exceptional young Chemical Engineer under the age of 35 who has demonstrated outstanding contributions to the field. Eligible candidates include those currently pursuing a PhD or those who have successfully completed their doctorate in the past year.As part of the selection process, the awardee is required to deliver a presentation on their research work or share their insights on a chosen topic of significance. This prestigious accolade comprises the M.P. Chary Medal along with a prize of ₹10,000, recognizing excellence, innovation, and dedication in Chemical Engineering.
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
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-[#1A1A1A]/50 dark:to-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto backdrop-blur-xl bg-white/20 dark:bg-black/20 p-8 rounded-2xl
                      border border-pink-100/50 dark:border-[#00FF00]/20 shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-[#00FF00] dark:to-[#00DD00] bg-clip-text text-transparent">
              Ready to Join?
            </h2>
            <Link 
              to="/registration" 
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-8 py-4 backdrop-blur-xl bg-white/30 dark:bg-black/30
                border-2 border-pink-100/50 dark:border-[#00FF00]/20
                hover:border-pink-500 dark:hover:border-[#00FF00]
                hover:scale-105 transform 
                active:scale-95
                transition-all duration-300
                text-gray-800 dark:text-gray-200 font-bold
                rounded-xl shadow-lg"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}