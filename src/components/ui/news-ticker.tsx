import { motion } from 'framer-motion';

interface NewsTickerProps {
  items: string[];
}

export function NewsTicker({ items }: NewsTickerProps) {
  const tickerVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-primary/10 backdrop-blur-sm py-4">
      <motion.div
        className="whitespace-nowrap"
        variants={tickerVariants}
        animate="animate"
      >
        <span className="inline-block mr-8">
          {items.join(' • ')}
        </span>
      </motion.div>
    </div>
  );
}