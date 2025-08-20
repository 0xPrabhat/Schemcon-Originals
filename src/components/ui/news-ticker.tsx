import { motion } from 'framer-motion';

interface NewsTickerProps {
  items: string[];
}

export function NewsTicker({ items }: NewsTickerProps) {
  // Make the ticker move smoothly and continuously
  const tickerVariants = {
    animate: {
      x: [0, '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-zinc-900 py-3 border-b-2 border-red-500 shadow-md">
      <motion.div
        className="whitespace-nowrap flex items-center w-max"
        variants={tickerVariants}
        animate="animate"
      >
        {/* First set of items */}
        {items.map((item, idx) => (
          <span key={idx} className="inline-flex items-center mr-8 text-base md:text-lg font-semibold text-red-600 dark:text-red-400">
            <span className="text-xl md:text-2xl mx-2">•</span>
            <span className="ml-1">{item}</span>
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, idx) => (
          <span key={"dup-"+idx} className="inline-flex items-center mr-8 text-base md:text-lg font-semibold text-red-600 dark:text-red-400">
            <span className="text-xl md:text-2xl mx-2">•</span>
            <span className="ml-1">{item}</span>
          </span>
        ))}
        {/* Third set to ensure smooth transition */}
        {items.map((item, idx) => (
          <span key={"third-"+idx} className="inline-flex items-center mr-8 text-base md:text-lg font-semibold text-red-600 dark:text-red-400">
            <span className="text-xl md:text-2xl mx-2">•</span>
            <span className="ml-1">{item}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}