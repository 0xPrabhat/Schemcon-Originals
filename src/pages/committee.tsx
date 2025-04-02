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
      position:"Council Member",
      image: "/images/gaurav.jpeg",
      department: "Assistant Professor, University of Twente"
    },
    {name: "Prof. Animes Kr. Golder",
      position: "Council Member",
      image: "/images/animesh.jpg",
      department: "Professor, IIT Guwahati"
    },
    {name: "Mr. Apurba Kumar Bhattacharyya",
      position: "Council Member",
      image: "/images/apurba.jpg",
      department: "Professor, IIT Guwahati"
    },
    {name: "Prof Nitosh Kumar Brahma",
      position: "Council Member",
      image: "/images/.jpg",
      department: "Professor,  Institute of genetic Engineering"
    }, 
    { name: "Prof. Rakesh Kumar Trivedi",
      position: "Council Member",
      image: "/images/rakesh.jpeg",
      department: "Professor, HBTU"
    },
    {name: "Prof. Shailendra Bajpai",
      position: "Council Member",
      image: "/images/bajpai.jpg",
      department: "Professor, NIT Jalandhar"
    },
    {name: "Mr. K Sadanand",
      position: "Council Member",
      image: "/images/.jpg",
      department: ""
    },
    {name: "Prof. Madhu Agarwal",
      position: "Council Member",
      image: "/images/madhu.png",
      department: "Professor, MNIT Jaipur"
    },
    {name: "Mr. Biswanath Chattopadhyay",
      position: "Co-opted Member",
      image: "/images/biswanath.jpeg",
      department: "Chief Executive Officer at IVL Dhunseri Petrochem Industries Pvt Ltd"
    },
    {name: "Prof. Shishir Sinha",
      position: "Co-opted Member",
      image: "/images/siha.jpg",
      department: "Professor, IIT Roorkee"
    }
    
    
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
      position: "Convenor",
      image: "/images/velu.jpg",
      department: "HOD, SCHEME"
    }
  ];

  const facultyCoordinators: CommitteeMember[] = [
    {
      name: "Dr. Sivagami K",
      position: "Faculty Coordinator",
      image: "/images/sivagami.jpg",
      department: "Associate Professor, VIT Vellore"
    },
    {
      name: "Dr. Ganesh Moorthy I",
      position: "Faculty Coordinator",
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
    },
    {
      name: "Dr. Aslam Abdullah M",
      position: "Faculty Coordinator",
      image: "/images/aslam.jpg",
      department: "Associate Professor, VIT Vellore"
    }
  ];

  const executiveCommittee: CommitteeMember[] = [
    {
      name: "Dr. Mahesh Ganesapillai",
      position: "Executive Member",
      image: "/images/mahesh.jpg",
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
      name: "Ahin Bagchi",
      position: "Student Coordinator",
      image: "/images/ahin.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Disha Talukdar",
      position: "Student Coordinator",
      image: "/images/disha.jpg",
      department: "Chemical Engineering"
    },
    {
      name: "Ratna Mrinalini A.",
      position: "Student Coordinator",
      image: "/images/ratna.jpg",
      department: "Chemical Engineering"
    },
    {name: "Tharun Varshan",
      position: "Student Coordinator",
      image: "/images/tharun.png",
      department: "Chemical Engineering"
    },
    {name: "Hemanth Sanjay Reddy",
      position: "Student Coordinator",
      image: "/images/hemanth.jpg",
      department: "Chemical Engineering"
    },
    {name: "Aswathy Pramod",
      position: "Student Coordinator",
      image: "/images/pramod.jpg",
      department: "Chemical Engineering"
    },
    {name: "Khushi Yadav",
      position: "Student Coordinator",
      image: "/images/yadav.jpg",
      department: "Chemical Engineering"
    },
    {name: "Sai Varshini",
      position: "Student Coordinator",
      image: "/images/sai.jpg",
      department: "Chemical Engineering"
    },
    {name: "Hemin Riya Henry",
      position: "Student Coordinator",
      image: "/images/hemin.jpg",
      department: "Chemical Engineering"
    },
    {name: "Charan Kuberan",
      position: "Student Coordinator",
      image: "/images/charan.jpg",
      department: "Chemical Engineering"
    },
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
      name: "Laasya Lahiri Kasturi",
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
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-black dark:via-zinc-900 dark:to-[#001A00] font-jetbrains pt-8">
      <head>
        <title>Committee Members - SCHEMCON 2025</title>
        <meta name="description" content="Meet the committee members of SCHEMCON 2025." />
      </head>
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