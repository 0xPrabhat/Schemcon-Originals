import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Committee", href: "/committee" },
  { name: "Submissions", href: "/submissions" },
  { name: "M.P. Chary", href: "/mp-chary" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "How to Reach", href: "/how-to-reach" },
  {
    name: "More",
    children: [
      { name: "Hotels Near VIT", href: "/hotels-near-vit" },
      { name: "Contact", href: "/contact" },
    ]
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Add state for More dropdown
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest('.more-dropdown')) setMoreOpen(false);
    }
    if (moreOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [moreOpen]);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-white/95 via-white/80 to-transparent dark:from-black/95 dark:via-black/80 dark:to-transparent backdrop-blur-md">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className={`capsule-header ${isScrolled ? 'capsule-header-scrolled' : ''}`}>
          <nav className="flex items-center justify-between w-full h-16">
            <Link 
              to="/" 
              className="font-jetbrains text-xl md:text-2xl whitespace-nowrap font-bold drop-shadow-md dark:drop-shadow-xl dark:dark-pulse 
                         bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                         dark:text-[#00FF00] dark:bg-none"
            >
              SCHEMCON
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                item.children ? (
                  <div key={item.name} className="relative more-dropdown">
                    <button
                      className="capsule-nav-item text-gray-700 dark:text-blue-200 hover:text-black dark:hover:text-blue-100 flex items-center"
                      onClick={() => setMoreOpen((open) => !open)}
                      aria-haspopup="true"
                      aria-expanded={moreOpen}
                    >
                      {item.name}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <div className={`absolute left-0 mt-2 w-48 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-pink-100/50 dark:border-white/20 transition-opacity z-50 ${moreOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-pink-50/50 dark:hover:bg-white/10 hover:text-pink-500 dark:hover:text-white transition-colors text-left"
                          onClick={() => setMoreOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    key={item.name}
                    to={item.href} 
                    className="capsule-nav-item text-gray-700 dark:text-blue-200 hover:text-black dark:hover:text-blue-100"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-white/10 
                         border border-pink-100/50 dark:border-white/20
                         hover:border-pink-500 dark:hover:border-white
                         transition-colors"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-100" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-100" />
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
                <div className="py-4 space-y-2 backdrop-blur-xl bg-white/90 dark:bg-black/90 
                              border border-pink-100/50 dark:border-white/20 
                              rounded-2xl shadow-lg">
                  {navigation.map((item) => (
                    item.children ? (
                      <div key={item.name} className="text-center">
                        <div className="font-semibold py-2">{item.name}</div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-pink-50/50 dark:hover:bg-white/10 hover:text-pink-500 dark:hover:text-white transition-colors text-center"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-pink-50/50 dark:hover:bg-white/10 hover:text-pink-500 dark:hover:text-white transition-colors text-center"
                      >
                        {item.name}
                      </Link>
                    )
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