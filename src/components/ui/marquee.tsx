import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export function Marquee({ items, speed = 20, className = '' }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden bg-gray-100/50 dark:bg-[#1A1A1A] py-6 ${className}`}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="whitespace-nowrap inline-flex"
      >
        <span className="inline-flex gap-8 items-center">
          {items.map((item, index) => (
            <span 
              key={index} 
              className="inline-flex items-center text-lg font-semibold px-4"
            >
              <span className="text-pink-500 dark:text-[#00FF00]">•</span>
              <span className="ml-3 text-gray-800 dark:text-gray-200">{item}</span>
            </span>
          ))}
        </span>
        <span className="inline-flex gap-8 items-center ml-8">
          {items.map((item, index) => (
            <span 
              key={index} 
              className="inline-flex items-center text-lg font-semibold px-4"
            >
              <span className="text-pink-500 dark:text-[#00FF00]">•</span>
              <span className="ml-3 text-gray-800 dark:text-gray-200">{item}</span>
            </span>
          ))}
        </span>
      </motion.div>
    </div>
  );
}