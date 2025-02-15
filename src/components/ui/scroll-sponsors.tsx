import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sponsors = [
  {
    name: 'CPCL',
    logo: '/images/cpcl.jpg',
    type: 'platinum'
  },
  {
    name: '',
    logo: '/images/sponsors/sponsor2.png',
    type: 'platinum'
  },
  {
    name: '',
    logo: '/images/sponsors/sponsor3.png',
    type: 'gold'
  },
  {
    name: '',
    logo: '/images/sponsors/sponsor4.png',
    type: 'gold'
  },
  {
    name: '',
    logo: '/images/sponsors/sponsor5.png',
    type: 'silver'
  },
  {
    name: '',
    logo: '/images/sponsors/sponsor6.png',
    type: 'silver'
  },
];

export function ScrollSponsors() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <section 
      className="py-20 bg-gray-50 dark:bg-[#0A0A0A] overflow-hidden border-y border-pink-100 dark:border-zinc-800 relative"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-text font-jetbrains"
        >
          Our Sponsors
        </motion.h2>

        {/* Desktop View with Scrolling Effect */}
        <div className="hidden md:block relative">
          {/* Gradient Fade Effects on Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0A0A0A] to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div style={{ x }} className="flex space-x-8 py-8">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 group"
                >
                  <div className="w-48 h-48 glass-container flex items-center justify-center p-6 transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      {/* Sponsor Logo */}
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} Logo`} 
                        className="w-24 h-24 object-contain rounded-lg mb-3 mx-auto 
                        group-hover:brightness-110 transition-all duration-300"
                      />
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
        <div className="md:hidden grid grid-cols-2 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <img 
                src={sponsor.logo} 
                alt={`${sponsor.name} Logo`} 
                className="w-16 h-16 object-contain rounded-lg mx-auto mb-2"
              />
              <p className="text-xs font-medium text-black/80 dark:text-white/80">
                {sponsor.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
