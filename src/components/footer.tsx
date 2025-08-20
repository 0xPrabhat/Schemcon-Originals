import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Committee", href: "/committee" },
  { name: "Submissions", href: "/submissions" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/iichevit/" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/iiche-vit/" },
  { icon: Mail, href: "mailto:iicheschemcon2025@vit.ac.in" },
];

export function Footer() {
  const { theme } = useTheme();

  const patternColor = theme === 'dark' ? '34,197,94' : '79,70,229'; // Example colors, will use blue shades
  const patternGradient = `radial-gradient(circle at 1px 1px, rgba(${patternColor}, 0.1) 1px, transparent 0)`;

  return (
    <footer className="relative font-jetbrains bg-gradient-to-b from-pink-50/50 via-white/50 to-white/50 
                      dark:from-black/50 dark:via-zinc-900/50 dark:to-zinc-900/50 
                      backdrop-blur-xl border-t-4 border-pink-200/50 
                      overflow-hidden"
            style={{
              borderImage: theme === 'dark' ? 'linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)) 1' : undefined,
              borderImageSlice: theme === 'dark' ? 1 : undefined,
              borderImageSource: theme === 'dark' ? 'linear-gradient(to right, #0b1a3b, #3b82f6, #7dd3fc)' : undefined, // Using hex codes for navy-600, blue-500, sky-300
              borderColor: theme === 'dark' ? 'transparent' : undefined, // Hide the solid border in dark mode
              borderTop: theme === 'dark' ? '4px solid transparent' : undefined // Ensure border-top is applied for border-image
            }}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: patternGradient,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-50/50 to-transparent dark:from-blue-900/50 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 p-6 rounded-xl 
                     border border-pink-200/50 dark:border-[#00FF00]/30 
                     shadow-lg hover:shadow-xl hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20
                     transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-navy-600 dark:via-blue-500 dark:to-sky-300 bg-clip-text text-transparent animate-gradient-x [text-shadow:_2px_2px_2px_rgb(0_0_0_/_10%)]">
              SCHEMCON 2025
            </h2>
            <p className="text-gray-800 dark:text-blue-200 font-medium">
            The 21st edition of SCHEMCON 2025 is set to be hosted as a prestigious event, jointly organized by the School of Chemical Engineering (SCHEME), VIT University, Vellore, and the Vellore Regional Centre of the Indian Institute of Chemical Engineers (IIChE). The conference will focus on the theme of “Sustainable Development in Energy and Environment".
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 p-6 rounded-xl 
                     border border-pink-200/50 dark:border-[#00FF00]/30 
                     shadow-lg hover:shadow-xl hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20
                     transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-dark navy-600 via-purple-600 to-blue-600 dark:from-navy-600 dark:via-blue-500 dark:to-sky-300 bg-clip-text text-transparent mb-4 animate-gradient-x [text-shadow:_2px_2px_2px_rgb(0_0_0_/_10%)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-800 dark:text-blue-200 hover:text-pink-600 dark:hover:text-[#00FF00] \
                             transition-colors duration-300 flex items-center group font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 \
                                   dark:from-[#00FF00] dark:to-[#00DD00] mr-2 \
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 p-6 rounded-xl 
                     border border-pink-200/50 dark:border-[#00FF00]/30 
                     shadow-lg hover:shadow-xl hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20
                     transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-navy-600 dark:via-blue-500 dark:to-sky-300 bg-clip-text text-transparent mb-4 animate-gradient-x [text-shadow:_2px_2px_2px_rgb(0_0_0_/_10%)]">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg backdrop-blur-sm bg-white/30 dark:bg-black/30 
                             border border-pink-100/50 dark:border-[#00FF00]/20
                             hover:border-pink-500 dark:hover:border-[#00FF00]
                             hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-rose-500/20
                             dark:hover:from-[#00FF00]/20 dark:hover:to-[#00DD00]/20
                             transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5 text-gray-800 dark:text-blue-200 
                                   group-hover:text-pink-600 dark:group-hover:text-[#00FF00]
                                   transition-colors" />
                  </motion.a>
                );
              })}
            </div>
            <address className="text-gray-800 dark:text-blue-200 not-italic space-y-2 font-medium">
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 
                               dark:from-[#00FF00] dark:to-[#00DD00] mr-2"></span>
                VIT University
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 
                               dark:from-[#00FF00] dark:to-[#00DD00] mr-2"></span>
                Vellore, Tamil Nadu
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 
                               dark:from-[#00FF00] dark:to-[#00DD00] mr-2"></span>
                India - 632014
              </p>
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-pink-200/50 dark:border-[#00FF00]/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-800 dark:text-blue-200 text-sm font-medium">
              © 2025 SCHEMCON. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-800 dark:text-blue-200 font-medium">
                Made with <span className="text-pink-600 dark:text-[#00FF00]">❤️</span> by SCHEMCON Team
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </footer>
  );
} 