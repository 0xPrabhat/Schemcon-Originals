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

export function Submissions() {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-black dark:via-zinc-900 dark:to-[#001A00] text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/pharma.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:text-[#00FF00] dark:bg-none drop-shadow-lg">Submissions</span>{' '}
          <span className="text-gray-900 dark:text-white drop-shadow-lg">& Templates</span>
        </h1>

        {/* Guidelines Section Wrapper */}
        <div className="py-8">
          <div className="relative z-10 backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 mb-8
            border border-indigo-300 dark:border-gray-700
            hover:border-indigo-500 dark:hover:border-purple-500
            transition-all duration-300 shadow-lg dark:shadow-xl">
            <h2 className="text-3xl font-bold text-indigo-700 dark:text-gray-100 mb-4">Submission Guidelines</h2>
            <div className="prose prose-pink dark:prose-invert max-w-none">
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-100">
                <li>Abstract should be in the format provided below</li>
                <li>Maximum length: 2 pages including figures and references</li>
                <li>Font: Times New Roman, 12pt</li>
                <li>Single spacing with justified alignment</li>
                <li>Include keywords and author information</li>
                <li>The submission of abstracts will be made through the easychair link.</li>
                <li>After the submission, the payment can be made in the VIT events page.</li>
                <li>Participants are then requested to fill payment confirmation Google form.</li>  
                <li>Note : The certificates will be issued only for the participants who follow the complete process</li>
                <li className="!mt-4 text-base md:text-lg font-semibold text-pink-700 dark:text-pink-300 list-none">
                  Event brochure is attached herewith: <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="underline text-indigo-700 dark:text-[#00FF00] hover:text-pink-600">Download Brochure (PDF)</a>
                </li>
              </ul>
              
              {/* Registration Fees Table */}
              <div className="mt-6 mb-8 relative z-10 backdrop-blur-xl bg-white/80 dark:bg-gray-800/70 rounded-xl p-6 md:p-10
                border border-indigo-300 dark:border-gray-700
                hover:border-indigo-500 dark:hover:border-purple-500
                transition-all duration-300 shadow-lg dark:shadow-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-700 dark:text-gray-100 font-cinzel tracking-wide uppercase [text-shadow:_2px_2px_2px_rgb(0_0_0_/_10%)]">
                  Registration Fees
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse backdrop-blur-md bg-white/70 dark:bg-gray-900/70 rounded-xl shadow-lg">
                    <thead>
                      <tr className="border-b-2 border-indigo-400/60 dark:border-gray-600/60 bg-gradient-to-r from-indigo-200/80 to-purple-200/80 dark:from-gray-600/40 dark:to-gray-700/40">
                        <th className="py-4 px-6 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:text-[#00FF00] dark:bg-none font-cinzel text-left">Category</th>
                        <th className="py-4 px-6 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:text-[#00FF00] dark:bg-none font-cinzel text-center">IIChE Member</th>
                        <th className="py-4 px-6 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:text-[#00FF00] dark:bg-none font-cinzel text-center">Non-IICHE Member</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-indigo-300/40 dark:divide-gray-600/40">
                      <tr className="hover:bg-gradient-to-r hover:from-indigo-100/60 hover:to-purple-100/60 dark:hover:from-gray-600/60 dark:hover:to-gray-700/60 transition-colors duration-300">
                        <td className="py-5 px-6 text-gray-800 dark:text-gray-100 font-medium font-jetbrains text-left">Student (UG)</td>
                        <td className="py-5 px-6 text-indigo-700 dark:text-[#00FF00] font-bold font-jetbrains text-center">Rs. 500<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                        <td className="py-5 px-6 text-indigo-700 dark:text-[#00FF00] font-bold font-jetbrains text-center">Rs. 700<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-indigo-100/60 hover:to-purple-100/60 dark:hover:from-gray-600/60 dark:hover:to-gray-700/60 transition-colors duration-300">
                        <td className="py-5 px-6 text-gray-800 dark:text-gray-100 font-medium font-jetbrains text-left">PG, Research Scholar</td>
                        <td className="py-5 px-6 text-indigo-700 dark:text-[#00FF00] font-bold font-jetbrains text-center">Rs. 1000<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                        <td className="py-5 px-6 text-indigo-700 dark:text-[#00FF00] font-bold font-jetbrains text-center">Rs. 1500<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-indigo-100/60 hover:to-purple-100/60 dark:hover:from-gray-600/60 dark:hover:to-gray-700/60 transition-colors duration-300">
                        <td className="py-5 px-6 text-gray-800 dark:text-gray-100 font-medium font-jetbrains text-left">Academics</td>
                        <td className="py-5 px-6 text-indigo-700 dark:text-[#00FF00] font-bold font-jetbrains text-center">Rs. 2000<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                        <td className="py-5 px-6 text-indigo-700 dark:text-[#00FF00] font-bold font-jetbrains text-center">Rs. 2500<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-indigo-100/60 hover:to-purple-100/60 dark:hover:from-gray-600/60 dark:hover:to-gray-700/60 transition-colors duration-300">
                        <td className="py-5 px-6 text-gray-800 dark:text-gray-100 font-medium font-jetbrains text-left">Industry</td>
                        <td className="py-5 px-6 text-indigo-700 dark:text-[#00FF00] font-bold font-jetbrains text-center">Rs. 5000<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                        <td className="py-5 px-6 text-indigo-700 dark:text-[#00FF00] font-bold font-jetbrains text-center">Rs. 6000<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-indigo-100/60 hover:to-purple-100/60 dark:hover:from-gray-600/60 dark:hover:to-gray-700/60 transition-colors duration-300">
                        <td className="py-5 px-6 text-gray-800 dark:text-gray-100 font-medium font-jetbrains text-left">Accompanying Person</td>
                        <td className="py-5 px-6 text-gray-400 dark:text-gray-300 font-bold font-jetbrains text-center">---</td>
                        <td className="py-5 px-6 text-indigo-700 dark:text-[#00FF00] font-bold font-jetbrains text-center">Rs. 1000<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-indigo-100/60 hover:to-purple-100/60 dark:hover:from-gray-600/60 dark:hover:to-gray-700/60 transition-colors duration-300">
                        <td className="py-5 px-6 text-gray-800 dark:text-gray-100 font-medium font-jetbrains text-left">Overseas Delegates</td>
                        <td className="py-5 px-6 text-blue-800 dark:text-[#00FF00] font-bold font-jetbrains text-center">$ 150<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                        <td className="py-5 px-6 text-blue-800 dark:text-[#00FF00] font-bold font-jetbrains text-center">$ 250<sup className="align-super text-indigo-600 dark:text-[#00FF00]">★</sup></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-left mt-4 text-gray-600 dark:text-gray-400 text-sm italic"><span className="align-super text-indigo-600 dark:text-[#00FF00]">★</span> including GST/VAT</p>
                <div className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-100">
                  <ul className="list-disc pl-5 space-y-1">
                  </ul>
              </div>
              </div>

              {/* Registration and Payment Confirmation Links */}
              <div className="flex flex-col md:flex-row gap-4 mb-12 relative z-10">
                <a 
                  href="https://easychair.org/cfp/schemcon2025" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold font-jetbrains 
                           hover:bg-indigo-800 dark:bg-[#00FF00] dark:text-black dark:hover:bg-[#00DD00] 
                           transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Abstract Submission
                </a>
                <a 
                  href="https://events.vit.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold font-jetbrains 
                           hover:bg-indigo-800 dark:bg-[#00FF00] dark:text-black dark:hover:bg-[#00DD00] 
                           transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Register Now
                </a>
                <a 
                  href="https://forms.gle/Wi4e92LXK6mSqqxEA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold font-jetbrains 
                           hover:bg-indigo-800 dark:bg-[#00FF00] dark:text-black dark:hover:bg-[#00DD00] 
                           transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Payment Confirmation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section Wrapper */}
        <div className="py-16 bg-gradient-to-b from-blue-50 to-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900">
          <div className="mb-16 relative z-10">
            <h2 className="text-3xl font-bold text-indigo-700 dark:text-gray-100 mb-12 text-center">Submission Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-indigo-400 to-purple-400 dark:from-gray-600 dark:to-gray-800 rounded-full" />

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
                  } mb-12`}
                >
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-6 md:pr-12 text-left md:text-right' : 'pl-6 md:pl-12 text-left'}
                    }`}
                  >
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      className="backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 p-6 md:p-8 rounded-xl
                        border border-indigo-300 dark:border-gray-700
                        hover:border-indigo-500 dark:hover:border-purple-500
                        transition-all duration-300 shadow-lg dark:shadow-xl"
                    >
                      <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:text-[#00FF00] dark:bg-none font-bold mb-2 text-base md:text-lg">{event.date}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 md:mb-3">{event.title}</h3>
                      <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed">{event.description}</p>
                    </motion.div>
                  </div>
                  {/* Timeline dot */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Templates Section Wrapper */}
        <div className="py-16 bg-white dark:bg-black">
          <div className="grid gap-6 relative z-10">
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
            }, {
              title: "Poster Template",
              formats: [
                { name: "PPT", link: "/poster.pptx" },
                { name: "PDF", link: "/poster.pdf" }  
              ]
            }].map((section, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8
                border border-pink-200 dark:border-zinc-700
                hover:border-pink-500 dark:hover:border-[#00FF00]
                transition-all duration-300 shadow-lg">
                <h2 className="text-3xl font-bold text-pink-500 dark:text-[#00FF00] mb-6">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.formats.map((format, idx) => (
                    <a
                      key={idx}
                      href={format.link}
                      download={`${section.title} - ${format.name}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-indigo-700 text-white rounded-lg font-semibold font-jetbrains
                               hover:bg-indigo-800 dark:bg-[#00FF00] dark:text-black dark:hover:bg-[#00DD00]
                               transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      {format.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}