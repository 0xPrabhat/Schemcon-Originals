import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Marquee } from '@/components/ui/marquee';
import { ScrollSponsors } from '@/components/ui/scroll-sponsors';
import { SEO } from '../components/SEO';
import { NewsTicker } from '@/components/ui/news-ticker';

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
    <>
      <SEO 
        title="Home"
        description="SCHEMCON 2025 - 73rd Annual Session of IIChE and International Conference on Chemical Engineering. Join us at VIT University, Vellore for this prestigious event."
        keywords="SCHEMCON 2025, IIChE, Chemical Engineering Conference, VIT University, International Conference, Chemical Engineering, Research Conference"
        image="/images/logo.png"
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-white dark:bg-gradient-to-r dark:from-navy-600 dark:via-blue-500 dark:to-sky-300 relative overflow-hidden text-gray-900 dark:text-blue-100">
        {/* Rolling News Headline */}
        <div className="z-50 relative">
          <NewsTicker
            items={[
              "Accommodation will be on a paid basis.All the information is updated in the website on latest update section in home page.",
              "The abstract submission deadline is extended till 30th August!"
            ]}
          />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-white dark:bg-black">
          {/* Add background image with overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/refinery.avif")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.2
            }}
          />

          {/* Grid Background */}
          <div className="absolute inset-0 grid grid-cols-8 gap-2 opacity-10 pointer-events-none">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="aspect-square border border-navy blue-500/20" />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10 pt-16 md:pt-24 mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Logos Section */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 mb-6 md:mb-12">
                {[
                  { src: "/images/logos/iiche.webp", alt: "IIChE Logo", delay: 0.1 },
                  { src: "/images/logos/iiche.png", alt: "IIChE VIT Logo", delay: 0.2 },
                  { src: "/images/logos/vit.png", alt: "VIT Vellore Logo", delay: 0.3 }
                ].map((logo, index) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: logo.delay,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 md:h-28 lg:h-36 transform hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                ))}
              </div>

              {/* Event Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.4,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-[2rem] transform scale-105"></div>
                <div className="relative bg-white/80 backdrop-blur-md p-6 md:p-16 rounded-[2rem] shadow-2xl border border-white/20 dark:bg-gray-900/80 dark:border-gray-700 dark:shadow-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent rounded-[2rem]"></div>
                  <div className="relative">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-2 md:mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-navy-600 dark:via-blue-500 dark:to-sky-300 bg-clip-text text-transparent drop-shadow-lg dark:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] dark:[text-shadow:_0_0_15px_rgba(59,130,246,0.3)]">
                      SCHEMCON
                    </h1>
                    <p className="text-2xl md:text-5xl font-bold mb-4 md:mb-10 text-gray-900 dark:text-blue-200">2025</p>
                    <div className="inline-block p-3 md:p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-navy-600 dark:via-blue-500 dark:to-sky-300 text-white rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <p className="text-base md:text-2xl font-bold">03-04 OCTOBER 2025</p>
                      <p className="text-sm md:text-xl">VIT VELLORE</p>
                    </div>
                    {/* Announcement Tagline just below the date box */}
                    <div className="flex justify-center mt-2 mb-4">
                      <span className="relative flex items-center px-4 py-2 rounded-full bg-white/90 dark:bg-zinc-900/80 border border-pink-300 dark:border-blue-400 shadow-md announcement-pill">
                        <svg className="w-5 h-5 mr-2 text-pink-600 dark:text-blue-400 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="font-semibold text-pink-700 dark:text-blue-200 text-sm md:text-base">The abstract submission date is extended till 30th August!</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <ArrowRight size={40} className="rotate-90 text-indigo-600" />
          </motion.div>
        </section>

        {/* NEW Section - Accommodation Information */}
        <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border-y-4 border-pink-200 dark:border-pink-700">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg mb-4">
                <span className="animate-pulse mr-2">🆕</span>
                <span className="font-bold text-base">NEW</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-pink-700 dark:text-pink-300 mb-3">
                Latest Updates
              </h2>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border-2 border-pink-200 dark:border-pink-700 relative overflow-hidden"
              >
                {/* Moving background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 animate-pulse" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #ec4899 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      Important Updates
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-6">
                      Stay updated with the latest conference information and accommodation details
                    </p>
                  </div>
                  
                  {/* Information container */}
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 p-4 rounded-xl border border-pink-200 dark:border-pink-600">
                    <div className="space-y-4">
                      {/* Abstract Submission Deadline */}
                      <div className="bg-white/60 dark:bg-gray-700/60 p-3 rounded-lg border border-pink-200 dark:border-pink-600">
                        <div className="text-base md:text-lg font-semibold text-pink-700 dark:text-pink-300">
                          Abstract submission deadline extended till 30th August!
                        </div>
                      </div>
                      
                      {/* Accommodation Information */}
                      <div className="bg-white/60 dark:bg-gray-700/60 p-3 rounded-lg border border-purple-200 dark:border-purple-600">
                        <div className="space-y-2">
                          <div className="text-base md:text-lg font-semibold text-purple-700 dark:text-purple-300">
                            Accommodation will be provided on paid basis in VIT hostels
                          </div>
                          <div className="text-base md:text-lg font-semibold text-purple-700 dark:text-purple-300 ml-6">
                            • Charge: ₹250 per person per day
                          </div>
                          <div className="text-base md:text-lg font-semibold text-purple-700 dark:text-purple-300 ml-6">
                            • Accommodation will be allocated during student registration when you arrive at the campus
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Abstract Themes Marquee */}
        <Marquee 
          items={abstractThemes} 
          className="border-y-4 border-indigo-600" 
          speed={30}
        />

        {/* Information Sections */}
        <section className="py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            {/* Main Cards - SCHEMCON and VIT */}
            <div className="mb-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-center mb-8 md:mb-16 text-indigo-700 dark:text-blue-300"
              >
                About The Conference
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl"
                >
                  <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 text-indigo-700 dark:text-blue-300 flex items-center">
                    <span className="mr-4">About SCHEMCON</span>
                    <div className="h-1 flex-1 bg-indigo-500 dark:bg-indigo-400"></div>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      SCHEMCON, the Students' Chemical Engineering Congress, is an annual gathering organized by the Students chapter of the Indian Institute of Chemical Engineers (IIChE) under one of its regional centers. It provides a vital platform for Chemical Engineering students to connect, expand their knowledge, and explore the evolving landscape of their discipline.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      SCHEMCON 2025 marks the 21st edition of this esteemed event, hosted collaboratively by the School of Chemical Engineering(SCHEME), VIT University, Vellore and the Vellore Regional Centre of the Indian Institute of Chemical Engineers (IIChE). This year's theme, "Sustainable Development in Energy and Environment" aims to spotlight emerging trends and transformative advancements in the field.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      Set in a leading institution for Chemical engineering education, the event will feature diverse perspectives and groundbreaking ideas, attracting industry experts, researchers, academicians, and talented students from various domains.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl"
                >
                  <h2 className="text-4xl font-black mb-8 text-indigo-700 dark:text-blue-300 flex items-center">
                    <span className="mr-4">VIT Vellore</span>
                    <div className="h-1 flex-1 bg-indigo-500 dark:bg-indigo-400"></div>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      One of India's top engineering institutions, known for excellence in education and research. With state-of-the-art facilities and a commitment to innovation, VIT Vellore continues to shape the future of engineering education.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      Vellore Institute of Technology or VIT is a private deemed university in Vellore, Tamil Nadu, India. The institution offers 66 Undergraduate, 58 Postgraduate, 15 Integrated, 2 Research and 2 M.Tech. Industrial Programmes.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      It has campuses in Vellore and Chennai and three sister universities as distinct state private universities in Amaravati, Bhopal, Bengaluru in India and an international campus in Mauritius.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      VIT was founded in 1984 as Vellore Engineering College, as a self-financing engineering college under Anna University by its founder G. Viswanathan. In 2001, It became Deemed university.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Organizations Section */}
            <div className="mb-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-6xl font-black text-center mb-6 md:mb-16 text-indigo-700 dark:text-blue-300"
              >
                Organizations
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border-2 border-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl"
                >
                  <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 text-indigo-700 dark:text-blue-300 flex items-center">
                    <span className="mr-4">About IIChE</span>
                    <div className="h-1 flex-1 bg-indigo-500 dark:bg-indigo-400"></div>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      The Indian Institute of Chemical Engineers (IIChE) is the premier professional organization dedicated to promoting excellence in chemical engineering education and practice in India. Founded in 1947, IIChE has been instrumental in advancing the chemical engineering profession.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      The Indian Institute of Chemical Engineers (IIChE) is the professional body for chemical engineers in India. The headquarter of IIChE is in the campus of Jadavpur University, Kolkata. The organization has 42 regional centers along with 172 student chapters spread throughout India.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      The institution's membership comprises academics, professionals from the chemical industry, researchers, and students.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      IIChE also publishes scientific journal "Indian Chemical Engineer", which is published in two sections A and B. Section A provides an international platform for presenting original research work and Section B features technical articles or overview of technology with a view to guiding practicing chemical engineers.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border-2 border-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl"
                >
                  <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 text-indigo-700 dark:text-blue-300 flex items-center">
                    <span className="mr-4">About IIChE Vellore Regional Center</span>
                    <div className="h-1 flex-1 bg-indigo-500 dark:bg-indigo-400"></div>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      The Vellore Regional Centre of the Indian Institute of Chemical Engineers (IIChE) serves as a dynamic platform for chemical engineering professionals, academicians, and students in the region. It actively fosters technical excellence, professional development, and knowledge exchange through seminars, workshops, student competitions, and industry-academia collaborations.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      IIChE, a premier professional organization in India, is committed to advancing the field of chemical engineering through education, innovation, and outreach. Among its many regional centres, the Vellore Regional Centre stands out for its active involvement in promoting academic and research initiatives.
                    </p>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      To learn more about the Vellore Regional Centre's activities and upcoming initiatives, please visit the <a href="https://iichevit.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline font-semibold dark:text-indigo-400 dark:hover:text-indigo-600">IIChE Vellore Regional Center website</a>.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Department and Award Section */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-6xl font-black text-center mb-6 md:mb-16 text-indigo-700 dark:text-blue-300"
              >
                Department & Recognition
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border-2 border-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl"
                >
                  <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 text-indigo-700 dark:text-blue-300 flex items-center">
                    <span className="mr-4">About SCHEME Department</span>
                    <div className="h-1 flex-1 bg-indigo-500 dark:bg-indigo-400"></div>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                    The Department of Chemical and Biochemical Engineering at VIT Vellore offers a dynamic blend of academic rigor and practical exposure. Beyond traditional classroom learning, the department encourages innovation through student-led research, industry-driven projects, and active participation in national and international competitions. With a curriculum designed to meet emerging global challenges, students gain exposure to sustainable technologies, process optimization, and biochemical advancements. The department also fosters a culture of continuous learning through technical clubs, professional societies, and strong industry linkages that open pathways for higher studies, entrepreneurship, and diverse career opportunities.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      Welcome to the School of Chemical Engineering (SCHEME), VIT Vellore. Since its establishment in 1994, the school has steadily expanded its capabilities to deliver high-quality education aligned with global industry standards. Its graduates are widely recognized for their strong technical foundation, professionalism, and readiness to contribute meaningfully to the chemical and process industries.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      The school provides world-class infrastructure and emphasizes experiential learning. Students are trained using industry-relevant software such as ASPEN Plus, HYSYS, MATLAB, and SolidWorks, ensuring that they are equipped with the skills and practical knowledge required to meet contemporary industrial challenges.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      For more information about the department, <a href="https://vit.ac.in/scheme" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline font-semibold dark:text-indigo-400 dark:hover:text-indigo-600">Go For SCHEME</a>.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border-2 border-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl"
                >
                  <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 text-indigo-700 dark:text-blue-300 flex items-center">
                    <span className="mr-4">About MP Chary Award</span>
                    <div className="h-1 flex-1 bg-indigo-500 dark:bg-indigo-400"></div>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      The MP Chary Award recognizes outstanding contributions to chemical engineering education and research. This prestigious award celebrates excellence and innovation in the field, inspiring future generations.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      The M.P. Chary Award, presented annually by IIChE, honors an exceptional young Chemical Engineer under the age of 35 who has demonstrated outstanding contributions to the field. Eligible candidates include those currently pursuing a PhD or those who have successfully completed their doctorate in the past year.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-blue-200 text-left md:text-justify">
                      As part of the selection process, the awardee is required to deliver a presentation on their research work or share their insights on a chosen topic of significance. This prestigious accolade comprises the M.P. Chary Medal along with a prize of ₹10,000, recognizing excellence, innovation, and dedication in Chemical Engineering.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <div className="bg-white dark:bg-black py-16">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-indigo-700 dark:text-blue-300 drop-shadow-sm">Our Sponsors</h2>
          <ScrollSponsors />
        </div>

        {/* Conference Tracks Section */}
        <section className="py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-center mb-8 md:mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Conference Tracks
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {tracks.map((track, index) => (
                <motion.div
                  key={track}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white p-8 rounded-3xl shadow-xl border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-500 transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl"
                >
                  <div className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {track}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Join Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-500 dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl"
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Join?
              </h2>
              <Link 
                to="/submissions" 
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block px-6 md:px-12 py-3 md:py-6 bg-gradient-to-r from-indigo-600 to-purple-600
                  text-white rounded-xl font-bold text-base md:text-xl
                  hover:from-indigo-700 hover:to-purple-700
                  transform hover:scale-105
                  transition-all duration-300
                  shadow-lg hover:shadow-xl"
              >
                Register Now
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <style>{`
        .announcement-pill {
          box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7);
          animation: pill-pulse 2s infinite;
        }
        @keyframes pill-pulse {
          0% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(236, 72, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0); }
        }
      `}</style>
    </>
  );
}