import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Place data
const places = [
  {
    id: 1,
    name: "Vellore Fort",
    description: "A 16th-century fort with a rich history, featuring the famous Jalakandeswarar Temple. The fort is known for its grand architecture and historical significance.",
    image: "/images/fort.jpg",
    distance: "~5 km from VIT",
    timing: "9:00 AM - 5:00 PM",
    highlights: ["Jalakandeswarar Temple", "Museum", "Fort Walls", "Historical Architecture"],
    mapLink: "https://www.google.com/maps/search/vellore+fort/@12.9210886,79.1247074,17z?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 2,
    name: "Golden Temple (Sripuram)",
    description: "A magnificent temple with golden architecture, surrounded by beautiful gardens. The temple is known for its spiritual significance and stunning visual appeal.",
    image: "/images/temple.jpg",
    distance: "~8 km from VIT",
    timing: "4:00 AM - 9:00 PM",
    highlights: ["Golden Architecture", "Spiritual Gardens", "Meditation Hall", "Light Shows"],
    mapLink: "https://www.google.com/maps/place/Golden+Temple/@12.8701177,79.0861532,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad3ebdfda8bf47:0x1b47e6d94faeb47e!8m2!3d12.8701177!4d79.0887281!16s%2Fg%2F11ggbcbw41?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 3,
    name: "Yelagiri Hills",
    description: "A scenic hill station with trekking trails, orchards, and a peaceful lake. Perfect for nature lovers and adventure enthusiasts.",
    image: "/images/yelagiri.jpg",
    distance: "~30 km from VIT",
    timing: "Best time: October to March",
    highlights: ["Trekking Trails", "Orchards", "Lake", "Nature Walks"],
    mapLink: "https://www.google.com/maps/place/Yelagiri,+Tamil+Nadu+635853/@12.5856044,78.6241668,15z/data=!3m1!4b1!4m6!3m5!1s0x3badaaba63efaa8f:0x565d6a5d54337a3c!8m2!3d12.5856048!4d78.6344666!16s%2Fm%2F02qv82l?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 4,
    name: "Amirthi Zoological Park",
    description: "A wildlife sanctuary with various species of animals and birds, perfect for nature lovers. The park offers a close encounter with wildlife in a natural setting.",
    image: "/images/amirthi.jpg",
    distance: "~25 km from VIT",
    timing: "9:00 AM - 5:00 PM",
    highlights: ["Wildlife", "Bird Watching", "Nature Trails", "Educational Programs"],
    mapLink: "https://www.google.com/maps/place/Vellore+Amirthi+Zoological+Park/@12.7322332,79.054007,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad22e4216ebaf9:0xfe62fa9808969cbc!8m2!3d12.7322332!4d79.0565819!16s%2Fm%2F09v0ygb?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
  }
];

export function NearbyPlaces() {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: 'url("/images/yelagiri.jpg")',
          animation: 'slowZoom 30s infinite alternate'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 dark:from-black/90 dark:via-black/70 dark:to-black/90 backdrop-blur-[2px]" />
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8 relative z-10">
        <Link 
          to="/how-to-reach" 
          className="inline-flex items-center text-pink-500 dark:text-[#00FF00] hover:text-pink-600 dark:hover:text-[#00DD00] transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to How to Reach
        </Link>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 
                         dark:from-[#00FF00] dark:via-[#00DD00] dark:to-[#00FF00] 
                         bg-clip-text text-transparent
                         font-cinzel tracking-wide uppercase 
                         [text-shadow:_2px_2px_2px_rgb(0_0_0_/_10%)]
                         animate-gradient-x">
            Nearby Places to Visit
          </h1>
          <p className="text-gray-900 dark:text-white/90 max-w-2xl mx-auto font-medium bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-white/90 bg-clip-text text-transparent">
            Explore these fascinating destinations near VIT University during your visit to Vellore
          </p>
        </motion.div>
      </div>

      {/* Places Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {places.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-gradient-to-br from-white/70 to-white/60 
                        dark:from-zinc-900/70 dark:to-zinc-800/60 
                        rounded-2xl shadow-2xl 
                        border border-pink-200/50 dark:border-[#00FF00]/20 
                        overflow-hidden
                        hover:bg-white/90 dark:hover:bg-zinc-900/90 
                        transition-all duration-300
                        hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20
                        hover:-translate-y-1"
            >
              <div className="relative h-48 md:h-72 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  style={{ imageRendering: 'auto' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h2 className="text-xl md:text-2xl font-bold text-white p-4">{place.name}</h2>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-gray-800 dark:text-white/90 mb-4">{place.description}</p>
                <div className="flex flex-wrap gap-2">
                  {place.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="text-xs md:text-sm px-3 py-1 rounded-full 
                               bg-gradient-to-r from-pink-500/20 to-rose-500/20 
                               dark:from-[#00FF00]/20 dark:to-[#00DD00]/20 
                               text-pink-700 dark:text-[#00FF00]
                               hover:from-pink-500/30 hover:to-rose-500/30 
                               dark:hover:from-[#00FF00]/30 dark:hover:to-[#00DD00]/30 
                               transition-all duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-pink-600 dark:text-[#00FF00]">Distance:</span> {place.distance}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-pink-600 dark:text-[#00FF00]">Timing:</span> {place.timing}
                  </span>
                </div>
                <a 
                  href={place.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center px-4 py-2 
                           bg-gradient-to-r from-pink-500/20 to-rose-500/20 
                           dark:from-[#00FF00]/20 dark:to-[#00DD00]/20 
                           text-pink-700 dark:text-[#00FF00] rounded-lg 
                           hover:from-pink-500/30 hover:to-rose-500/30 
                           dark:hover:from-[#00FF00]/30 dark:hover:to-[#00DD00]/30 
                           transition-all duration-300 hover:scale-105
                           hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-[#00FF00]/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Map
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.2);
          }
        }
        
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
    </div>
  );
} 