import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: "February 20, 2025",
    title: "Abstract Submission Opens",
    description: "Start submitting your abstracts following the template guidelines"
  },
  {
    date: "August 30th, 2025",
    title: "Abstract Submission Deadline",
    description: "Last date to submit your abstracts"
  },
  {
    date: "September 15th, 2025",
    title: "Abstract Acceptance Notification",
    description: "Authors will be notified about abstract acceptance"
  },
  {
    date: "September 25th, 2025",
    title: "Last Date for Registration",
    description: "Deadline for the payment"
  }
];

export function MPChary() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-black dark:via-zinc-900 dark:to-[#001A00] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-12 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-black text-center mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          M.P. Chary
        </motion.h1>

        {/* Guidelines Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 md:p-10 mb-16 shadow-2xl border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-500"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Submission Guidelines</h2>
          <div className="space-y-4 md:space-y-6">
            <ul className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-lg">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 md:mr-3">•</span>
                Abstract should be in the format provided below
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 md:mr-3">•</span>
                Maximum length: 2 pages including figures and references
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 md:mr-3">•</span>
                Font: Times New Roman, 12pt
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 md:mr-3">•</span>
                Single spacing with justified alignment
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 md:mr-3">•</span>
                Include keywords and author information
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 md:mr-3">•</span>
                The submission of abstracts will be made through the given link below.
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 md:mr-3">•</span>
                After the submission, the payment can be made in the VIT events page.
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 md:mr-3">•</span>
                Candidates who are currently pursuing a PhD or those who have successfully completed their doctrate in the past year are eligible to apply. Only one author per paper is allpwed.
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 md:mr-3">•</span>
                Note : The certificates will be issued only for the participants who follow the complete process
              </li>
              <li className="flex items-start !mt-4 text-base md:text-lg font-semibold text-pink-700 dark:text-pink-300 list-none">
                Event brochure is attached herewith: <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="underline text-indigo-700 dark:text-[#00FF00] hover:text-pink-600">Download Brochure (PDF)</a>
              </li>
            </ul>

            {/* Registration and Submission Links */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8 md:mt-12">
              <a 
                href="https://events.vit.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 inline-flex items-center justify-center px-6 py-3 md:py-5 bg-gradient-to-r from-indigo-600 to-purple-600
                         text-white rounded-xl font-bold text-sm md:text-lg
                         hover:from-indigo-700 hover:to-purple-700
                         transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 md:mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Register Now
              </a>
              <a 
                href="https://forms.gle/ETUvZC2aZ5w7iGWo8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 inline-flex items-center justify-center px-6 py-3 md:py-5 bg-gradient-to-r from-purple-600 to-pink-600
                         text-white rounded-xl font-bold text-sm md:text-lg
                         hover:from-purple-700 hover:to-pink-700
                         transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 md:mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abstract Submission
              </a>
            </div>

            {/* Download Templates Section */}
            <div className="grid gap-6 md:gap-8 mt-8 md:mt-12">
              {[{
                title: "Abstract Template",
                formats: [
                  { name: "PDF", link: "/Abstract-template.pdf" }
                ]
              }, {
                title: "Presentation Template",
                formats: [
                  { name: "PPT", link: "/SCHEMCON 2025_Oral Presentation.pptx" },
                  { name: "PDF", link: "/SCHEMCON 2025_Oral Presentation.pdf" }
                ]
              }].map((section, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 md:p-8 border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-500 shadow-xl">
                  <h2 className="text-xl md:text-3xl font-bold text-indigo-600 mb-4 md:mb-6">{section.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {section.formats.map((format, idx) => (
                      <a
                        key={idx}
                        href={format.link}
                        download={`${section.title} - ${format.name}`}
                        className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600
                                 text-white rounded-xl font-bold text-sm md:text-lg
                                 hover:from-indigo-700 hover:to-purple-700
                                 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {format.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Submission Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-300 dark:bg-gray-700" />

            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } mb-10 md:mb-16`}
              >
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-6 md:pr-16 text-left md:text-right' : 'pl-6 md:pl-16 text-left'}
                  }`}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                    className="backdrop-blur-md bg-white/80 dark:bg-gray-900/70 p-5 md:p-7 rounded-lg
                      border border-indigo-200 dark:border-gray-700
                      shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:text-fuchsia-500 dark:bg-none font-bold mb-1 text-sm md:text-base">{event.date}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 md:mb-2">{event.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 