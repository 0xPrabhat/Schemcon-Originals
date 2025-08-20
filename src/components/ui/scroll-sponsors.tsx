import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sponsors = [
  {
    name: 'Epsilon Advanced Material Private Limited',
    logo: '/images/epsilon.jpeg', // Corrected path
    type: 'platinum'
  },
  {
    name: 'Tiruppur Company',
    logo: '/images/.webp', // Corrected path (if this is also Epsilon)
    type: 'platinum'
  },
  {
    name: 'Fusion Healthcare',
    logo: '/images/fusion.webp',
    type: 'gold'
  },
  {
    name: 'Vibrant Pharmachem',
    logo: '/images/vibrant.jpg',
    type: 'gold'
  },
  {
    name: 'Ultramarine Pigments',
    logo: '/images/ultramarine.png',
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
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-container p-4 aspect-square flex items-center justify-center
                       backdrop-blur-xl bg-white/60 dark:bg-zinc-900/60 
                       border border-pink-200/50 dark:border-[#00FF00]/30 
                       rounded-xl shadow-lg hover:shadow-xl
                       transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} Logo`} 
                  className="w-20 h-20 object-contain rounded-lg mx-auto mb-2
                           group-hover:brightness-110 transition-all duration-300"
                />
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
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
