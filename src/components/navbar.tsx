import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Committee", href: "/committee" },
  { name: "Submissions", href: "/submissions" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Registration", href: "/registration" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-white/80 via-white/60 to-transparent dark:from-black/80 dark:via-black/60 dark:to-transparent backdrop-blur-md">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className={`capsule-header ${isScrolled ? 'capsule-header-scrolled' : ''}`}>
          <nav className="flex items-center justify-between w-full h-14">
            <Link to="/" className="font-jetbrains text-xl md:text-2xl gradient-text whitespace-nowrap font-bold">
              SCHEMCON
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="capsule-nav-item"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-black/20 
                         border border-pink-100/50 dark:border-[#00FF00]/20
                         hover:border-pink-500 dark:hover:border-[#00FF00]
                         transition-colors"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden mt-2"
              >
                <div className="py-4 space-y-2 backdrop-blur-xl bg-white/20 dark:bg-black/20 
                              border border-pink-100/50 dark:border-[#00FF00]/20 
                              rounded-2xl shadow-lg">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300
                               hover:bg-pink-50/50 dark:hover:bg-[#00FF00]/10
                               hover:text-pink-500 dark:hover:text-[#00FF00]
                               transition-colors text-center"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </div>
  );
}