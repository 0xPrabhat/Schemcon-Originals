import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 gradient-text font-jetbrains">
        {title}
      </h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-container w-full max-w-sm mx-auto overflow-hidden"
          >
            {/* Image Container */}
            <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-pink-100 to-pink-50 dark:from-zinc-800 dark:to-zinc-900">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            
            {/* Text Container */}
            <div className="p-6 text-center bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold gradient-text font-jetbrains">
                {member.name}
              </h3>
              <p className="text-sm gradient-text mt-2 font-jetbrains">
                {member.position}
              </p>
              <p className="text-xs text-black/60 dark:text-white/60 mt-2 font-jetbrains">
                {member.department}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
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
      image: "/images/manmohan.webp",
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
    {name: "Dr. R. Parthiban",
      position: "Vice President",
      image: "/images/Parthiban.jpg",
      department: "Professor,  Sri Sivasubramaniya Nadar College"
    },
    {name: "Parag Ratnakar Gogate",
      position: "Vice President",
      image: "/images/gogate.jpeg",
      department: "Professor, ICT Mumbai"
    },
    {name: "Dr. Sunil Baran Kuila",
      position: "Honorary Secretary",
      image: "/images/sunil.jpg",
      department: "Professor & Head, HIT Haldia"
    },
    {name: "Prof. K. A. Badrinarayana",
      position: "Honorary Jt. Secretary",
      image: "/images/.jpg",
      department: ""
    },
    {name: "Prof N Balasubramanian",
      position: "Honorary Treasurer",
      image: "/images/bala.jpeg",
      department: "Professor, Anna University"
    },
    {name: "Mr. Dhawal Saxena",
      position: "Honorary Registrar",
      image: "/images/dhawal.jpeg",
      department: "Associate Director-Product Development, Projects & Marketing at Blast Carboblocks Pvt.Ltd"
    },
    {name: "Dr. Utkarsh Maheshwari",
      position: "Honorary Controller of Examinations",
      image: "/images/utkarsh.jpeg",
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
      image: "/images/ghosh.png",
      department: "Associate Professor, MAULANA ABUL KALAM AZAD UNIVERSITY OF TECHNOLOGY, WEST BENGAL"
    },
    {name: "Smt. Sheela",
      position: "Council Member",
      image: "/images/sheela.jpg",
      department: "IAS (Retd.), Independent Director"
    },
    {name: "Dr. M. Srinivasa Rao",
      position: "Council Member",
      image: "/images/rao.png",
      department: "Consultant Interventional Cardiologist"
    },
    {name: "Dr. Prasad T.L. Gupta",
      position: "Council Member",
      image: "/images/prasad.png",
      department: "Ex DAE and Technical Consultant"
    },
    {name: "Dr. Gaurav Rattana",
      position: "Council Member",
      image: "/images/gaurav.jpeg",
      department: "Assistant Professor, University of Twente"}
  ];

  const conveners: CommitteeMember[] = [
    {
      name: "Dr. L Muruganandam",
      position: "Convenor",
      image: "/images/murgu.jpg",
      department: "Dean, SCHEME"
    },
    {
      name: "Dr. Velu S",
      position: "Convener",
      image: "/images/velu.jpg",
      department: "HOD, SCHEME"
    }
  ];

  const facultyCoordinators: CommitteeMember[] = [
    {
      name: "Dr. P. Kumar",
      position: "Faculty Coordinator",
      image: "/images/committee/placeholder.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Dr. S. Radhika",
      position: "Faculty Coordinator",
      image: "/images/committee/placeholder.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Dr. M. Parthiban",
      position: "Faculty Coordinator",
      image: "/images/committee/placeholder.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Dr. N. Ramesh",
      position: "Faculty Coordinator",
      image: "/images/committee/placeholder.jpg",
      department: "Chemical Engineering"
    }
  ];

  const executiveCommittee: CommitteeMember[] = [
    {
      name: "Dr. A. Saravanan",
      position: "Executive Member",
      image: "/images/committee/placeholder.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Dr. K. Ramesh",
      position: "Executive Member",
      image: "/images/committee/placeholder.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Dr. T. Srinivas",
      position: "Executive Member",
      image: "/images/committee/placeholder.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Dr. L. Rajendran",
      position: "Executive Member",
      image: "/images/committee/placeholder.jpg",
      department: "Chemical Engineering"
    }
  ];

  const studentCoordinators: CommitteeMember[] = [
    {
      name: "Rahul Sharma",
      position: "Student Coordinator",
      image: "/images/committee/student1.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Priya Patel",
      position: "Student Coordinator",
      image: "/images/committee/student2.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Arun Kumar",
      position: "Student Coordinator",
      image: "/images/committee/student3.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Sneha Reddy",
      position: "Student Coordinator",
      image: "/images/committee/student4.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Mohammed Ali",
      position: "Student Coordinator",
      image: "/images/committee/student5.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Anjali Singh",
      position: "Student Coordinator",
      image: "/images/committee/student6.jpg",
      department: "Chemical Engineering"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-black dark:via-zinc-900 dark:to-[#001A00] font-jetbrains pt-8">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 font-jetbrains flex flex-wrap justify-center gap-x-4"
        >
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 dark:from-[#00FF00] dark:to-[#00FF00] bg-clip-text text-transparent">
            Committee
          </span>
          <span className="bg-gradient-to-r from-rose-500 to-rose-600 dark:from-[#00DD00] dark:to-[#00DD00] bg-clip-text text-transparent">
            Members
          </span>
        </motion.h1>

        <div className="space-y-16">
          <CommitteeSection title="Chief Patron" members={chiefPatron} />
          <CommitteeSection title="Patrons" members={patrons} />
          <CommitteeSection title="National Advisory Committee" members={nationalAdvisory} />
          <CommitteeSection title="Conveners" members={conveners} />
          <CommitteeSection title="Faculty Coordinators" members={facultyCoordinators} />
          <CommitteeSection title="Executive Committee" members={executiveCommittee} />
          <CommitteeSection title="Student Coordinators" members={studentCoordinators} />
        </div>
      </div>
    </div>
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