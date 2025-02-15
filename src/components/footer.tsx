import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Committee", href: "/committee" },
  { name: "Submissions", href: "/submissions" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Registration", href: "/registration" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/iichevit/" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/iiche-vit/" },
  { icon: Mail, href: "mailto:iicheschemcon2025@vit.ac.in" },
];

export function Footer() {
  return (
    <footer className="relative backdrop-blur-md bg-white/30 dark:bg-black/30 border-t border-pink-100/50 dark:border-[#00FF00]/20 font-jetbrains">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-50/50 to-transparent dark:from-zinc-900/50 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4 backdrop-blur-sm bg-white/20 dark:bg-black/20 p-6 rounded-xl border border-pink-100/50 dark:border-[#00FF00]/20">
            <h2 className="text-2xl font-black bg-gradient-to-r from-pink-500 to-rose-500 dark:from-[#00FF00] dark:to-[#00DD00] bg-clip-text text-transparent">
              SCHEMCON 2025
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The Schemcon 2025 celebrated its 21st edition as a prestigious event, hosted collaboratively by the School of Chemical Engineering(SCHEME), VIT University, Vellore and the Vellore Regional Centre of the Indian Institute of Chemical Engineers (IIChE), This conference is centered on the theme of "Sustainable Development in Energy and Environment".
            </p>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-white/20 dark:bg-black/20 p-6 rounded-xl border border-pink-100/50 dark:border-[#00FF00]/20">
            <h3 className="text-lg font-bold bg-gradient-to-r from-pink-500 to-rose-500 dark:from-[#00FF00] dark:to-[#00DD00] bg-clip-text text-transparent mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-[#00FF00] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="backdrop-blur-sm bg-white/20 dark:bg-black/20 p-6 rounded-xl border border-pink-100/50 dark:border-[#00FF00]/20">
            <h3 className="text-lg font-bold bg-gradient-to-r from-pink-500 to-rose-500 dark:from-[#00FF00] dark:to-[#00DD00] bg-clip-text text-transparent mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="p-2 rounded-lg backdrop-blur-sm bg-white/30 dark:bg-black/30 
                      border border-pink-100/50 dark:border-[#00FF00]/20
                      hover:border-pink-500 dark:hover:border-[#00FF00]
                      hover:scale-110 transform transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 
                      group-hover:text-pink-500 dark:group-hover:text-[#00FF00]
                      transition-colors" />
                  </a>
                );
              })}
            </div>
            <address className="text-gray-700 dark:text-gray-300 not-italic">
              <p>VIT University</p>
              <p>Vellore, Tamil Nadu</p>
              <p>India - 632014</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pink-100/50 dark:border-[#00FF00]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              © 2025 SCHEMCON. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 