import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: "August 15, 2025",
    title: "Abstract Submission Opens",
    description: "Start submitting your abstracts following the template guidelines"
  },
  {
    date: "September 1, 2025",
    title: "Abstract Submission Deadline",
    description: "Last date to submit your abstracts"
  },
  {
    date: "September 15, 2025",
    title: "Abstract Acceptance Notification",
    description: "Authors will be notified about abstract acceptance"
  },
  {
    date: "September 30, 2025",
    title: "Final Paper Submission",
    description: "Deadline for submitting final papers"
  }
];

export function Submissions() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-[#0A0A0A]">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-5xl font-bold text-center mb-16">
          <span className="text-pink-500 dark:text-[#00FF00]">Submissions</span>{' '}
          <span className="text-gray-900 dark:text-white">& Templates</span>
        </h1>

        {/* Guidelines Section */}
        <div className="backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8 mb-16
          border border-pink-200 dark:border-zinc-700
          hover:border-pink-500 dark:hover:border-[#00FF00]
          transition-all duration-300 shadow-lg">
          <h2 className="text-3xl font-bold text-pink-500 dark:text-[#00FF00] mb-6">Submission Guidelines</h2>
          <div className="prose prose-pink dark:prose-invert max-w-none">
            <ul className="list-disc pl-6 space-y-4 text-gray-700 dark:text-gray-300">
              <li>Abstract should be in the format provided below</li>
              <li>Maximum length: 1 pages including figures and references</li>
              <li>Font: Times New Roman, 12pt</li>
              <li>Single spacing with justified alignment</li>
              <li>Include keywords and author information</li>
              <li>NOTE- Please ensure that you first navigate to 'Registration' tab and complete your registration for SCHEMCON-2025. Only after successfully registering should you proceed to abstract submission, as system will not accept abstract submissions without prior registration. </li>
            </ul>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-pink-500 dark:text-[#00FF00] mb-12 text-center">Submission Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200 dark:bg-zinc-700" />

            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } mb-8`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <div className="backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 p-6 rounded-xl
                    border border-pink-200 dark:border-zinc-700
                    hover:border-pink-500 dark:hover:border-[#00FF00]
                    transition-all duration-300 shadow-lg">
                    <div className="text-pink-500 dark:text-[#00FF00] font-bold mb-2">{event.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 dark:bg-[#00FF00] rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Templates Section */}
        <div className="grid gap-6">
          {[{
            title: "Abstract Template",
            formats: [{ name: "DOCX", link: "/Abstract-template.docx" }, { name: "PDF", link: "/Abstract-template.pdf" }]
          }, {
            title: "Presentation Template",
            formats: [{ name: "PPT", link: "/Presentation-template.pptx" }, { name: "PDF", link: "/Presentation-template.pdf" }]
          }, {
            title: "Poster Template",
            formats: [{ name: "PPT", link: "/Poster.pptx" }]
          }].map((section, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 rounded-xl p-8
              border border-pink-200 dark:border-zinc-700
              hover:border-pink-500 dark:hover:border-[#00FF00]
              transition-all duration-300 shadow-lg">
              <h2 className="text-3xl font-bold text-pink-500 dark:text-[#00FF00] mb-6">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.formats.map((format, idx) => (
                  <a
                    key={idx}
                    href={format.link}
                    download
                    className="flex items-center justify-center p-6 
                      bg-white dark:bg-zinc-800 rounded-lg 
                      border-2 border-pink-200 dark:border-zinc-700
                      hover:border-pink-500 dark:hover:border-[#00FF00]
                      hover:bg-pink-50 dark:hover:bg-zinc-700/50
                      transition-all duration-300 group"
                  >
                    <span className="text-gray-700 dark:text-gray-200 font-semibold 
                      group-hover:text-pink-500 dark:group-hover:text-[#00FF00]">
                      {section.title} ({format.name})
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
