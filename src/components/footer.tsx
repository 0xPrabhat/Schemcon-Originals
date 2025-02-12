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
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Mail, href: "mailto:schemcon2025@vit.ac.in" },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-pink-100 dark:border-zinc-800 font-jetbrains">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-pink-500 dark:text-[#00FF00]">
              SCHEMCON 2025
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The Schemcon 2025 celebrated its 21st edition as a prestigious event, hosted collaboratively by the School of Chemical Engineering(SCHEME), VIT University, Vellore and the Vellore Regional Centre of the  Indian Institute of Chemical Engineers (IIChE), This conference is centered on the theme of "Sustainable Development in Energy and Environment".
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-[#00FF00] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="p-2 rounded-lg bg-white dark:bg-zinc-800 
                      border border-pink-200 dark:border-zinc-700
                      hover:border-pink-500 dark:hover:border-[#00FF00]
                      group transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 
                      group-hover:text-pink-500 dark:group-hover:text-[#00FF00]
                      transition-colors" />
                  </a>
                );
              })}
            </div>
            <address className="text-gray-600 dark:text-gray-400 not-italic">
              <p>VIT University</p>
              <p>Vellore, Tamil Nadu</p>
              <p>India - 632014</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pink-100 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 SCHEMCON. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 