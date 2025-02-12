import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

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
    <div className="sticky top-0 z-50 py-2 bg-gradient-to-b from-white/80 via-white/60 to-transparent dark:from-black/80 dark:via-black/60 dark:to-transparent backdrop-blur-md">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className={`capsule-header ${isScrolled ? 'capsule-header-scrolled' : ''}`}>
          <nav className="flex items-center justify-between w-full">
            <Link to="/" className="font-jetbrains text-xl md:text-2xl gradient-text whitespace-nowrap font-bold">
              SCHEMCON
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/" className="capsule-nav-item">Home</Link>
              <Link to="/committee" className="capsule-nav-item">Committee</Link>
              <Link to="/submissions" className="capsule-nav-item">Submissions</Link>
              <Link to="/sponsors" className="capsule-nav-item">Sponsors</Link>
              <Link to="/registration" className="capsule-nav-item">Registration</Link>
              <Link to="/contact" className="capsule-nav-item">Contact</Link>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <div className="md:hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-600 dark:text-gray-200 hover:text-pink-500 dark:hover:text-[#00FF00]"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mobile-menu"
            >
              <div className="flex flex-col space-y-2">
                <Link to="/" className="capsule-nav-item text-center" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/committee" className="capsule-nav-item text-center" onClick={() => setIsOpen(false)}>Committee</Link>
                <Link to="/submissions" className="capsule-nav-item text-center" onClick={() => setIsOpen(false)}>Submissions</Link>
                <Link to="/sponsors" className="capsule-nav-item text-center" onClick={() => setIsOpen(false)}>Sponsors</Link>
                <Link to="/registration" className="capsule-nav-item text-center" onClick={() => setIsOpen(false)}>Registration</Link>
                <Link to="/contact" className="capsule-nav-item text-center" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>
    </div>
  );
}