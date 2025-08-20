import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

interface CommitteeMember {
  name: string;
  position: string;
  department: string;
  image: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function CommitteeSection({ title, members }: { title: string; members: CommitteeMember[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8 md:mb-16 relative z-10"
    >
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:text-[#00FF00] dark:bg-none font-jetbrains drop-shadow-lg px-2"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto px-2 sm:px-3 md:px-4 justify-items-start"
      >
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            className="glass-container w-full max-w-[75vw] sm:max-w-xs mx-auto overflow-hidden group backdrop-blur-xl bg-white/95 dark:bg-black/95 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200 dark:border-gray-800 p-1 sm:p-4"
          >
            {/* Image Container */}
            <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-pink-100 to-pink-50 dark:from-zinc-800 dark:to-zinc-900 relative rounded-xl">
              <motion.img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-xl"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Text Container */}
            <div className="pt-2 md:pt-3">
              <h3 className="text-sm md:text-base font-semibold mb-1 text-gray-900 dark:text-white line-clamp-1 text-center">{member.name}</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-1 line-clamp-1 text-center">{member.position}</p>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 line-clamp-2 text-center">{member.department}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function Committee() {
  const chiefPatron: CommitteeMember[] = [
    {
      name: "Dr. G. Viswanathan",
      position: "Chief Patron",
      image: "/images/gv.jpg",
      department: "Chancellor, VIT"
    }
  ];

  const patrons: CommitteeMember[] = [
    {
      name: "Mr. Sankar Viswanathan",
      position: "Patron",
      image: "/images/sankar.jpg",
      department: "Vice President, VIT"
    },
    {
      name: "Dr. Sekar Viswanathan",
      position: "Patron",
      image: "/images/sekar.jpg",
      department: "Vice President, VIT"
    },
    {
      name: "Dr. G.V. Selvam",
      position: "Patron",
      image: "/images/selvam.jpg",
      department: "Vice President, VIT"
    },
    { name: "Dr. Sandhya Pentareddy",
      position: "Patron",
      image: "/images/sandhya.webp",
      department: "Executive Director, VIT"
    },
    {name: "Ms. Kadhambari S Viswanathan",
      position: "Patron",
      image: "/images/kadambri.jpg",
      department: "Assistant Vice - President, VIT"
    },
    {name: "Dr. V. S. Kanchana Bhaaskaran",
      position: "Patron",
      image: "/images/kanchana.webp",
      department: "Vice-Chancellor, VIT"
    },
    {name: "Dr. Partha Sharathi Mallick",
      position: "Patron",
      image: "/images/partha.jpg",
      department: "Pro-Vice-Chancellor, VIT"
    },
    {name: "Dr. Jayabarathi T",
      position: "Patron",
      image: "/images/jayabharti.jpg",
      department: "Registrar, VIT"}
  ];

  const nationalAdvisory: CommitteeMember[] = [
    {
      name: "Padma Vibhushan,Prof. Man Mohan Sharma",
      position: "Advisory Member",
      image: "/images/manmohan.jpg",
      department: "Former Director, ICT Mumbai"
    },
    {
      name: "Padmashri, Prof. G.D. Yadav",
      position: "Advisory Member",
      image: "/images/G D Yadav.webp",
      department: "Former Vice-Chancellor, ICT Mumbai"
    },
    {
      name: "Dr Ajay Bansal",
      position: "President",
      image: "/images/ajay.jpg",
      department: "Professor, NIT Jalandhar"
    },
    {
      name: "Mr. Sunil Indulal Thakar",
      position: "Immediate Past President",
      image: "/images/thakar.webp",
      department: "Kutch Chemical Industries Ltd"
    },
    {name: "Dr. R Parthiban",
      position: "Vice President",
      image: "/images/Parthiban.jpg",
      department: "Professor,  Sri Sivasubramaniya Nadar College"
    },
    {name: "Parag Ratnakar Gogate",
      position: "Vice President",
      image: "/images/gogate.jpg",
      department: "Professor, ICT Mumbai"
    },
    {name: "Prof. Sunil Baran Kuila",
      position: "Honorary Secretary",
      image: "/images/sunil.jpg",
      department: "Professor & Head, HIT Haldia"
    },
    {name: "Prof. K. A. Badrinarayana",
      position: "Honorary Jt. Secretary",
      image: "/images/badrinarayana.jpeg",
      department: ""
    },
    {name: "Prof N Balasubramanian",
      position: "Honorary Treasurer",
      image: "/images/bala.jpg",
      department: "Professor, Anna University"
    },
    {name: "Mr. Dhawal Saxena",
      position: "Honorary Registrar",
      image: "/images/dhawal.jpeg",
      department: "Associate Director-Product Development, Projects & Marketing at Blast Carboblocks Pvt.Ltd"
    },
    {name: "Dr. Utkarsh Maheshwari",
      position: "Honorary Controller of Examinations",
      image: "/images/utkarsh.jpg",
      department: "Associate Professor, Department of Chemical Engineering, DYPIEMR"
    },
    {name: "Prof. Anil Verma",
      position: "Editor in Chief",
      image: "/images/anil.jpeg",
      department: "Professor, IIT Delhi"
    },
    {name: "Prof. M. K. Jha",
      position: "Special Invitee",
      image: "/images/jha.jpeg",
      department: "Professor, NIT Jalandhar"
    },
    {name: "Dr. Avijit Ghosh",
      position: "Special Invitee",
      image: "/images/ghosh.jpg",
      department: "Associate Professor, MAULANA ABUL KALAM AZAD UNIVERSITY OF TECHNOLOGY, WEST BENGAL"
    },
    {name: "Smt. Sheela",
      position: "Council Member",
      image: "/images/sheela.jpeg",
      department: ""
    },
    {name: "Dr. M. Srinivasa Rao",
      position: "Council Member",
      image: "/images/srinivasa.png",
      department: ""
    },
    {name: "Dr. Prasad T.L. Gupta",
      position: "Council Member",
      image: "/images/prasad.png",
      department: "Ex DAE and Technical Consultant"
    },
    {name: "Dr. Gaurav Rattana",
      position:"Council Member",
      image: "/images/rattan.jpeg",
      department: "Assistant Professor, University of Twente"
    },
    {name: "Prof. Animes Kr. Golder",
      position: "Council Member",
      image: "/images/animesh.jpg",
      department: "Professor, IIT Guwahati"
    },
    {name: "Mr. Apurba Kumar Bhattacharyya",
      position: "Council Member",
      image: "/images/bhattacharya.jpg",
      department: "Professor, IIT Guwahati"
    },
    {name: "Prof Nitosh Kumar Brahma",
      position: "Council Member",
      image: "/images/nitosh.jpeg",
      department: ""
    }, 
    { name: "Prof. Rakesh Kumar Trivedi",
      position: "Council Member",
      image: "/images/rakesh.jpeg",
      department: "Professor, HBTU"
    },
    {name: "Prof. Shailendra Bajpai",
      position: "Council Member",
      image: "/images/shailendra.png",
      department: "Professor, NIT Jalandhar"
    },
    {name: "Mr. K Sadanand",
      position: "Council Member",
      image: "/images/sadanand.jpg",
      department: ""
    },
    {name: "Prof. Madhu Agarwal",
      position: "Council Member",
      image: "/images/madhu.jpeg",
      department: "Professor, MNIT Jaipur"
    },
    {name: "Mr. Biswanath Chattopadhyay",
      position: "Co-opted Member",
      image: "/images/biswanath.jpg",
      department: ""
    },
    {name: "Prof. Shishir Sinha",
      position: "Co-opted Member",
      image: "/images/sinha.jpg",
      department: "Professor, IIT Roorkee"
    }
    
    
    ];                                

  const conveners: CommitteeMember[] = [
    {
      name: "Dr. Velu S",
      position: "Convenor",
      image: "/images/velu.jpg",
      department: "DEAN i/c, SCHEME"
    },
      { 
        name: "Dr. Aslam Abdullah M",
        position: "Faculty Coordinator",
        image: "/images/aslam.jpg",
        department: "HoD, SCHEME, VIT"
      },

     {
      name: "Dr. L Muruganandam",
      position: "Convenor",
      image: "/images/murgu.jpg",
      department: "Convenor, SCHEMCON"
    }
  ];

  const facultyCoordinators: CommitteeMember[] = [
    {
      name: "Dr. Sivagami K",
      position: "Organiser(SCHEMCON)",
      image: "/images/sivagami.jpg",
      department: "Associate Professor, VIT Vellore"
    },
    {
      name: "Dr. Ganesh Moorthy I",
      position: "Co-Organiser(SCHEMCON)",
      image: "/images/gm.jpg",
      department: "Associate Professor, VIT Vellore"
    },
    {
      name: "Dr. Chitra D",
      position: "Faculty Coordinator",
      image: "/images/chitra.jpg",
      department: "Associate Professor, VIT Vellore"
    },
    {
      name: "Dr. A Babu Ponnusami",
      position: "Faculty Coordinator",
      image: "/images/babu.jpg",
      department: "Professor, VIT Vellore"
    }
  ];

  const executiveCommittee: CommitteeMember[] = [
    {
      name: "Dr. Mahesh Ganesapillai",
      position: "Executive Member",
      image: "/images/mahesh.jpeg",
      department: "Professor , VIT Vellore"
    },
    {
      name: "Dr. Anand VP Gurumoorthy",
      position: "Executive Member",
      image: "/images/anand.jpg",
      department: "Professor , VIT Vellore"
    },
    {
      name: "Dr. Shishir Kumar Behera",
      position: "Executive Member",
      image: "/images/shishir.jpg",
      department: "Professor , VIT Vellore"
    },
    {
      name: "Dr. Thomas Theodore",
      position: "Executive Member",
      image: "/images/thomas.jpg",
      department: "Professor , VIT Vellore"
    },
    {
      name: "Dr. Aruna Singh",
      position: "Executive Member",
      image: "/images/aruna.jpg",
      department: "Professor , VIT Vellore"
    },
    {
      name: "Dr. Nirmala G S",
      position: "Executive Member",
      image: "/images/nirmala.jpg",
      department: "Professor , VIT Vellore"
    },
    {
      name: "Dr. Monash P",
      position: "Executive Member",
      image: "/images/monash.jpg",
      department: "Professor , VIT Vellore"
    },
    {
      name: "Dr. Shankar Raman Dhanushkodi",
      position: "Executive Member",
      image: "/images/shankar.jpg",
      department: "Associate Professor , VIT Vellore"
    },
    {
      name: "Dr. Mohammed Rehaan Chandan",
      position: "Executive Member",
      image: "/images/rehan.jpg",
      department: "Associate Professor , VIT Vellore"
    },
    {
      name: "Dr. Dharmendra Kumar Bal",
      position: "Executive Member",
      image: "/images/bal.jpg",
      department: "Associate Professor , VIT Vellore"
    },
    {
      name: "Dr. Aabid Hussain Shaik",
      position: "Executive Member",
      image: "/images/aabid.jpg",
      department: "Associate Professor , VIT Vellore"
    },
    {
      name: "Dr. Bandaru Kiran",
      position: "Executive Member",
      image: "/images/bandaru.jpg",
      department: "Associate Professor , VIT Vellore"
    },
    {
      name: "Dr. Rima Biswas",
      position: "Executive Member",
      image: "/images/rima.jpg",
      department: "Associate Professor , VIT Vellore"
    },
    {
      name: "Dr. Pandurangan K",
      position: "Executive Member",
      image: "/images/pandu.jpg",
      department: "Associate Professor , VIT Vellore"
    },
  ];

  const studentCoordinators: CommitteeMember[] = [
    {
      name: "Shambhavi Sathish Kumar",
      position: "Student Coordinator",
      image: "/images/shambhavi.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Ummul Kiraam Pitolwala",
      position: "Student Coordinator",
      image: "/images/ummul.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Aditya Chakravarti",
      position: "Student Coordinator",
      image: "/images/aditya.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Aashtha Kale",
      position: "Student Coordinator",
      image: "/images/aashtha.jpg",
      department: "Chemical Engineering"
    },
    {name: "Rebiya Ramchandran",
      position: "Student Coordinator",
      image: "/images/rebiya.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Laasya Lahari Kasturi",
      position: "Student Coordinator",
      image: "/images/laasya.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Prabhat Singh",
      position: "Student Coordinator",
      image: "/images/prabhat.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Annmaria Benny",
      position: "Student Coordinator",
      image: "/images/anmaria.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Yashu Singh",
      position: "Student Coordinator",
      image: "/images/yashu.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Indrakshi Bhattacharjee",
      position: "Student Coordinator",
      image: "/images/indrakshi.jpg",
      department: "Chemical Engineering"
    },
  ];

  return (
    <>
      <SEO title="Committee" description="Meet the committee members of SCHEMCON 2025." url="https://schemcon.org/committee" />
      <div className="min-h-[calc(100vh-4rem)] relative bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-black dark:via-zinc-900 dark:to-[#001A00] font-jetbrains pt-4 md:pt-8 overflow-x-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-16 md:h-32 bg-gradient-to-b from-pink-500/20 to-transparent dark:from-[#00FF00]/20" />
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-pink-500/20 to-transparent dark:from-[#00FF00]/20" />

        <div className="container mx-auto px-2 sm:px-3 md:px-4 relative z-10">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 md:mb-16"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-jetbrains flex flex-wrap justify-center gap-x-4"
            >
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:text-[#00FF00] dark:bg-none drop-shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Committee
              </motion.span>
              <motion.span 
                className="text-gray-900 dark:text-white drop-shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Members
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 md:space-y-24 pb-8 md:pb-20"
          >
            {/* Chief Patron Section with Special Styling */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-[#00FF00]/10 dark:via-[#00FF00]/10 dark:to-[#00FF00]/10 rounded-3xl" />
              <CommitteeSection title="Chief Patron" members={chiefPatron} />
            </div>

            {/* Patrons Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 dark:from-[#00FF00]/10 dark:via-[#00FF00]/10 dark:to-[#00FF00]/10 rounded-3xl" />
              <CommitteeSection title="Patrons" members={patrons} />
            </div>

            {/* National Advisory Committee Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 dark:from-[#00FF00]/10 dark:via-[#00FF00]/10 dark:to-[#00FF00]/10 rounded-3xl" />
              <CommitteeSection title="National Advisory Committee" members={nationalAdvisory} />
            </div>

            {/* Custom layout for Convenor */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-16 relative z-10"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:text-[#00FF00] dark:bg-none font-jetbrains drop-shadow-lg px-2"
              >
                Convenor
              </motion.h2>
              <div className="flex flex-col items-start gap-6">
                {/* First row: Dr. L Muruganandam */}
                <div className="flex flex-wrap gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0 }}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                    className="glass-container w-full max-w-[75vw] sm:max-w-xs mx-auto overflow-hidden group backdrop-blur-xl bg-white/95 dark:bg-black/95 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200 dark:border-gray-800 p-1 sm:p-4"
                  >
                    <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-pink-100 to-pink-50 dark:from-zinc-800 dark:to-zinc-900 relative rounded-xl">
                      <motion.img 
                        src={conveners[2].image} 
                        alt={conveners[2].name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-xl"
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="pt-2 md:pt-3">
                      <h3 className="text-sm md:text-base font-semibold mb-1 text-gray-900 dark:text-white line-clamp-1 text-center">{conveners[2].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-1 line-clamp-1 text-center">{conveners[2].position}</p>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 line-clamp-2 text-center">{conveners[2].department}</p>
                    </div>
                  </motion.div>
                </div>
                {/* Second row: Dr. Velu S and Dr. Aslam Abdullah M */}
                <div className="flex flex-wrap gap-6">
                  {[conveners[0], conveners[1]].map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.03,
                        transition: { duration: 0.2 }
                      }}
                      className="glass-container w-full max-w-[75vw] sm:max-w-xs mx-auto overflow-hidden group backdrop-blur-xl bg-white/95 dark:bg-black/95 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200 dark:border-gray-800 p-1 sm:p-4"
                    >
                      <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-pink-100 to-pink-50 dark:from-zinc-800 dark:to-zinc-900 relative rounded-xl">
                        <motion.img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-xl"
                          loading="lazy"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="pt-2 md:pt-3">
                        <h3 className="text-sm md:text-base font-semibold mb-1 text-gray-900 dark:text-white line-clamp-1 text-center">{member.name}</h3>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-1 line-clamp-1 text-center">{member.position}</p>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 line-clamp-2 text-center">{member.department}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Faculty Organizers Section */}
            <CommitteeSection title="Faculty Organizers" members={[
              facultyCoordinators[0],
              facultyCoordinators[1]
            ]} />
            <CommitteeSection title="Faculty Coordinators" members={[
              facultyCoordinators[2],
              facultyCoordinators[3]
            ]} />
            <CommitteeSection title="Executive Committee" members={executiveCommittee} />
            <CommitteeSection title="Student Coordinators" members={studentCoordinators} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

// Update the styles in your globals.css
const styles = `
.neu-brutal-card {
  @apply backdrop-blur-md;
  box-shadow: 4px 4px 0 theme('colors.pink.500');
  border: 2px solid theme('colors.pink.200');
}

.dark .neu-brutal-card {
  box-shadow: 4px 4px 0 #00FF00;
  border: 2px solid theme('colors.zinc.700');
}

.neu-brutal-text {
  text-shadow: 2px 2px 0 theme('colors.pink.500');
}

.dark .neu-brutal-text {
  text-shadow: 2px 2px 0 #00FF00;
}

.neu-brutal-card:hover {
  box-shadow: 6px 6px 0 theme('colors.pink.500');
}

.dark .neu-brutal-card:hover {
  box-shadow: 6px 6px 0 #00FF00;
}
`;