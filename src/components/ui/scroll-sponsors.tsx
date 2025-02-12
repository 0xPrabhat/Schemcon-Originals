import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sponsors = [
  {
    name: 'TechCorp Industries',
    logo: '/images/sponsors/sponsor1.png',
    type: 'platinum'
  },
  {
    name: 'InnovateLabs',
    logo: '/images/sponsors/sponsor2.png',
    type: 'platinum'
  },
  {
    name: 'ChemSolutions',
    logo: '/images/sponsors/sponsor3.png',
    type: 'gold'
  },
  {
    name: 'ProcessTech',
    logo: '/images/sponsors/sponsor4.png',
    type: 'gold'
  },
  {
    name: 'EcoSystems',
    logo: '/images/sponsors/sponsor5.png',
    type: 'silver'
  },
  {
    name: 'BioTech Solutions',
    logo: '/images/sponsors/sponsor6.png',
    type: 'silver'
  },
];

export function ScrollSponsors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0A0A0A] overflow-hidden border-y border-pink-100 dark:border-zinc-800 relative" ref={containerRef}>
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#0A0A0A]" /> {/* Background overlay */}
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-text font-jetbrains"
        >
          Our Sponsors
        </motion.h2>

        {/* Desktop View with Scroll Effect */}
        <div className="hidden md:block relative">
          {/* Updated gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0A0A0A] to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div 
              style={{ x }}
              className="flex space-x-8 py-8"
            >
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 group"
                >
                  <div className="w-48 h-48 glass-container flex items-center justify-center p-6 
                    transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 dark:bg-zinc-800/50 rounded-lg mb-3 flex items-center justify-center mx-auto
                        group-hover:bg-pink-50/50 dark:group-hover:bg-zinc-700/50 transition-colors">
                        <span className="text-2xl font-bold gradient-text">
                          {sponsor.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-black/80 dark:text-white/80 group-hover:gradient-text transition-colors">
                        {sponsor.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Grid View */}
        <div className="md:hidden sponsor-grid">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="sponsor-item"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 dark:bg-zinc-800/50 rounded-lg mb-2 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold gradient-text">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
                <p className="text-xs font-medium text-black/80 dark:text-white/80">
                  {sponsor.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}