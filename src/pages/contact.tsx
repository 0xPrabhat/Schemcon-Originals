import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:iiche@vit.ac.in?subject=Contact%20Us%20Message%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom:%20${encodeURIComponent(
      formData.email
    )}%0APhone:%20${encodeURIComponent(formData.phone)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/contact.avif")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <head>
        <title>Contact Us - SCHEMCON 2025</title>
        <meta name="description" content="Get in touch with us for inquiries about SCHEMCON 2025." />
      </head>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 gradient-text font-cinzel">Contact Us</h1>

          {/* Contact Form and Map Section */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-container p-6 md:p-12">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-cinzel gradient-text mb-4">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 md:p-4 rounded-xl bg-white/50 dark:bg-black/50 
                             backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30
                             focus:outline-none focus:border-pink-500 dark:focus:border-[#00FF00]
                             text-black dark:text-white placeholder-black/60 dark:placeholder-white/60
                             text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 md:p-4 rounded-xl bg-white/50 dark:bg-black/50 
                             backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30
                             focus:outline-none focus:border-pink-500 dark:focus:border-[#00FF00]
                             text-black dark:text-white placeholder-black/60 dark:placeholder-white/60
                             text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full p-3 md:p-4 rounded-xl bg-white/50 dark:bg-black/50 
                             backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30
                             focus:outline-none focus:border-pink-500 dark:focus:border-[#00FF00]
                             text-black dark:text-white placeholder-black/60 dark:placeholder-white/60
                             text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 md:p-4 rounded-xl bg-white/50 dark:bg-black/50 
                             backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30
                             focus:outline-none focus:border-pink-500 dark:focus:border-[#00FF00]
                             text-black dark:text-white placeholder-black/60 dark:placeholder-white/60
                             text-sm md:text-base resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 md:py-4 px-6 md:px-8 bg-gradient-to-r from-pink-500 to-rose-500 
                           dark:from-[#00FF00] dark:to-[#00DD00] text-white rounded-xl font-bold
                           hover:from-pink-600 hover:to-rose-600 dark:hover:from-[#00FF00] dark:hover:to-[#00CC00]
                           transform hover:scale-105 transition-all duration-300
                           text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map and Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-container p-8 md:p-12 space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-cinzel gradient-text mb-4">SCHEMCON 2025</h2>
                <p className="text-black/80 dark:text-white/80">School of Chemical Engineering (SCHEME), VIT University</p>
                <p className="text-black/80 dark:text-white/80">Vellore - 632014, Tamil Nadu, India</p>
                <a href="mailto:iicheschemcon2025@vit.ac.in" className="gradient-text font-semibold block mt-2">
                  iicheschemcon2025@vit.ac.in
                </a>
              </div>

              <div className="aspect-video w-full rounded-xl overflow-hidden backdrop-blur-md bg-white/20 dark:bg-black/20 border border-pink-200/50 dark:border-[#00FF00]/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001656344757!2d79.15242907507637!3d12.969636987318385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47a1f86a8ddb%3A0xc68b76c614d41088!2sSchool%20of%20Chemical%20Engineering%2C%20VIT%20University!5e0!3m2!1sen!2sin!4v1709494433495!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-75 dark:contrast-100"
                />
              </div>
            </motion.div>
          </div>

          {/* Committee Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="glass-container p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-cinzel gradient-text text-center mb-8 md:mb-10">Committee Contacts</h2>
            <p className="text-center text-black/80 dark:text-white/80 mb-8 md:mb-10 text-lg">
              For specific inquiries, please contact our dedicated committee members:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.4 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 dark:from-black/40 dark:to-black/20 backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30 hover:border-pink-400 dark:hover:border-[#00FF00] transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="font-bold text-xl gradient-text mb-3">Shambhavi</h3>
                <p className="text-sm text-black/80 dark:text-white/80 font-medium mb-2">Accommodation Queries</p>
                <p className="text-xs text-black/70 dark:text-white/70">Phone: +91 9498382967</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.5 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 dark:from-black/40 dark:to-black/20 backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30 hover:border-pink-400 dark:hover:border-[#00FF00] transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="font-bold text-xl gradient-text mb-3">Ummul</h3>
                <p className="text-sm text-black/80 dark:text-white/80 font-medium mb-2">Program Schedule Queries</p>
                <p className="text-xs text-black/70 dark:text-white/70">Phone: +91 8780253877</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.6 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 dark:from-black/40 dark:to-black/20 backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30 hover:border-pink-400 dark:hover:border-[#00FF00] transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="font-bold text-xl gradient-text mb-3">Aditya</h3>
                <p className="text-sm text-black/80 dark:text-white/80 font-medium mb-2">Registration Queries</p>
                <p className="text-xs text-black/70 dark:text-white/70">Phone: +91 8822019186</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.7 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 dark:from-black/40 dark:to-black/20 backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30 hover:border-pink-400 dark:hover:border-[#00FF00] transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="font-bold text-xl gradient-text mb-3">Aashtha</h3>
                <p className="text-sm text-black/80 dark:text-white/80 font-medium mb-2">Food & Catering Queries</p>
                <p className="text-xs text-black/70 dark:text-white/70">Phone: +91 9725734731</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.8 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 dark:from-black/40 dark:to-black/20 backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30 hover:border-pink-400 dark:hover:border-[#00FF00] transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="font-bold text-xl gradient-text mb-3">Prabhat</h3>
                <p className="text-sm text-black/80 dark:text-white/80 font-medium mb-2">Abstract Submission Queries</p>
                <p className="text-xs text-black/70 dark:text-white/70">Phone: +91 9958828937</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.9 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 dark:from-black/40 dark:to-black/20 backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30 hover:border-pink-400 dark:hover:border-[#00FF00] transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="font-bold text-xl gradient-text mb-3">Annmaria</h3>
                <p className="text-sm text-black/80 dark:text-white/80 font-medium mb-2">Financial Queries</p>
                <p className="text-xs text-black/70 dark:text-white/70">Phone: +91 8111824711</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1.0 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 dark:from-black/40 dark:to-black/20 backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30 hover:border-pink-400 dark:hover:border-[#00FF00] transition-all duration-300 hover:transform hover:scale-105 md:col-span-2 lg:col-span-1 xl:col-span-1"
              >
                <h3 className="font-bold text-xl gradient-text mb-3">Yashu</h3>
                <p className="text-sm text-black/80 dark:text-white/80 font-medium mb-2">Travel & Transportation Queries</p>
                <p className="text-xs text-black/70 dark:text-white/70">Phone: +91 9122629539</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
