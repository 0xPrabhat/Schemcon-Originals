import { motion } from 'framer-motion';
import { ScrollToTop } from './scroll-to-top';
import { Analytics } from "@vercel/analytics/react"

const FloatingBubbles = () => (
  <div className="floating-bubbles">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ 
          x: `${Math.random() * 100 - 50}%`,
          y: `${Math.random() * 100 - 50}%`,
          scale: 0
        }}
        animate={{ 
          x: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
          y: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
          scale: [0, 1, 0.8, 1]
        }}
        transition={{
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute rounded-full mix-blend-overlay"
        style={{
          width: Math.random() * 300 + 100,
          height: Math.random() * 300 + 100,
          background: `radial-gradient(circle at 30% 30%, ${i % 2 === 0 ? 'rgb(244 114 182 / 0.2)' : 'rgb(251 113 133 / 0.2)'}, transparent)`,
          filter: 'blur(8px)',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-page">
      <ScrollToTop />
      <FloatingBubbles />
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
} 