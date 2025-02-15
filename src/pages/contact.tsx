import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
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
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-black dark:via-zinc-900 dark:to-[#001A00] font-jetbrains pt-8 relative overflow-hidden">
      <head>
        <title>Contact Us - SCHEMCON 2025</title>
        <meta name="description" content="Get in touch with us for inquiries about SCHEMCON 2025." />
      </head>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text font-cinzel">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-container p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-cinzel gradient-text mb-4">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-white/50 dark:bg-black/50 
                             backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30
                             focus:outline-none focus:border-pink-500 dark:focus:border-[#00FF00]
                             text-black dark:text-white placeholder-black/60 dark:placeholder-white/60"
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
                    className="w-full p-4 rounded-xl bg-white/50 dark:bg-black/50 
                             backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30
                             focus:outline-none focus:border-pink-500 dark:focus:border-[#00FF00]
                             text-black dark:text-white placeholder-black/60 dark:placeholder-white/60"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={6}
                    className="w-full p-4 rounded-xl bg-white/50 dark:bg-black/50 
                             backdrop-blur-md border border-pink-200/50 dark:border-[#00FF00]/30
                             focus:outline-none focus:border-pink-500 dark:focus:border-[#00FF00]
                             text-black dark:text-white placeholder-black/60 dark:placeholder-white/60
                             resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 rounded-xl backdrop-blur-xl 
                           bg-white/40 dark:bg-zinc-900/30
                           border border-pink-200/50 dark:border-[#00FF00]/30
                           font-cinzel font-bold text-lg
                           gradient-text
                           transform hover:scale-105 hover:bg-white/50 dark:hover:bg-zinc-900/40
                           active:scale-95
                           transition-all duration-300"
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
        </motion.div>
      </div>
    </div>
  );
}
