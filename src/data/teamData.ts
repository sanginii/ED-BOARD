
export interface TeamMember {
  name: string;
  position: string;
  image: string;
  quote?: string;
  department?: string;
}

// Team members data
export const teamMembers: TeamMember[] = [
  {
    name: "Kashvi Ranjhan",
    position: "Editor-In-Chief",
    image: "/Team_25/Kashvi.png",
    quote: "Crash out queen, you earned it.",
    department: "Executive Board"
  },
  {
    name: "Krish Vinod",
    position: "Managing Editor",
    image: "/Team_25/Krish.png", 
    quote: "Got a brand new reason to spiral out",
    department: "Executive Board"
  },
  {
    name: "Rashi Singh Rawat",
    position: "Team Manager",
    image: "/Team_25/Rashi.png", 
    quote: "We're gonna stop feeling sorry for ourselves, its not attractive",
    department: "Advisory Board"
  },
  {
    name: "Suhail Malik",
    position: "Technical Head",
    image: "/Team_25/Suhail.png", 
    quote: "Karm karne jata hoon, Kaand ho jata hai",
    department: "Technical"
  },
  {
    name: "Clarisha Pinto",
    position: "Head of Content Creation",
    image: "/Team_25/Clarisha.png", 
    quote: "Overthinking? Always on brand",
    department: "Content Creation"
  },
  {
    name: "Nandini Ayoor",
    position: "Head of Content Creation",
    image: "/Team_25/Nandini.png", 
    quote: "Dil mein mere hai dard-e-disco",
    department: "Content Creation"
  },
  {
    name: "Srilakshmi R",
    position: "Head of Public Relations & Outreach",
    image: "/Team_25/Srilakshmi.png", 
    quote: "I lose my earpods more than I lose myself",
    department: "Public Relations & Outreach"
  },
  {
    name: "Aditi Prakash",
    position: "Head of Public Relations & Outreach",
    image: "/Team_25/Aditi.png", 
    quote: "I used to be indecisive but now I'm not so sure",
    department: "Public Relations & Outreach"
  },
  {
    name: "Nilabh Bibawe",
    position: "Head of Photography & Videography",
    image: "/Team_25/Nilabh.png", 
    quote: "I came. I saw. I overexposed",
    department: "Photography & Videography"
  },
  {
    name: "Achintya Singh",
    position: "Head of Photography & Videography",
    image: "/Team_25/Achintya.png", 
    quote: "It's Not That Deep",
    department: "Photography & Videography"
  },
  {
    name: "Anushree Dutt",
    position: "Arts & Graphics Head",
    image: "/Team_25/Anushree.png", 
    quote: "babygirl, you would not believe the amount of tabs I have open!",
    department: "Arts & Graphics"
  },
  {
    name: "Sanya Srivastava",
    position: "Arts & Graphics Head",
    image: "/Team_25/Sanya.png", 
    quote: "Sarcastic? No. I'm just brutally honest",
    department: "Arts & Graphics"
  },
  {
    name: "T S Saumyaa",
    position: "Head of Writing",
    image: "/Team_25/Saumyaa.png", 
    quote: "One must imagine",
    department: "Writing"
  },
  {
    name: "Ajay Tej Thalari",
    position: "Head of Writing",
    image: "/Team_25/Ajay.png", 
    quote: "Out beyond ideas of Wrong-doing and Right-doing, there is a field. I'will meet you there.",
    department: "Writing"
  },
  {
    name: "Yash Prasad",
    position: "Head of Operations",
    image: "/Team_25/Yash.png", 
    quote: "Mere baare mein itna matt socho. Main dil mein aata hun, samajh mein nahi",
    department: "Operations"
  },
  {
    name: "Dhritismita Deka",
    position: "Head of Operations",
    image: "/Team_25/Dhritismita.png", 
    quote: "All my red flags are heart shaped",
    department: "Operations"
  },
  // {
  //   name: "Anoushka Bhattacharya",
  //   position: "Head of Admin and HR",
  //   image: "/Team/Anoushka.png",
  //   quote: "I overthink my overthinking",
  //   department: "Admin Department"
  // },
  // {
  //   name: "Bhavyaa Agarwal",
  //   position: "Arts and Graphics Head",
  //   image: "/Team/Bhavya.png",
  //   quote: "I’d go to a party in pajamas",
  //   department: "Arts and Graphics"
  // },
  // {
  //   name: "Pragati Sakhuja",
  //   position: "Arts and Graphics Head",
  //   image: "/Team/Pragati.png",
  //   quote: "Life is tough, get a helmet",
  //   department: "Arts and Graphics"
  // },
  // {
  //   name: "Vaibhavi Komarraju",
  //   position: "Conceptual Head",
  //   image: "/Team/Vaibhavi.png",
  //   quote: "Powered by delusion and caffeine",
  //   department: "Conceptual Team"
  // },
  // {
  //   name: "Diya Nisar",
  //   position: "Head of Content Creation",
  //   image: "/Team/Diya.png",
  //   quote: "Can we skip to the part where we all become millionaires",
  //   department: "Content Creation"
  // },
  // {
  //   name: "Karrunya Rajan",
  //   position: "Head of Content Creation",
  //   image: "/Team/Karrunya.png",
  //   quote: "Can I chatGPT this?",
  //   department: "Content Creation"
  // },
  // {
  //   name: "Kshitij Sohoni",
  //   position: "Social Media Head",
  //   image: "/Team/Kshitij.png",
  //   quote: "Work hard, nap harder",
  //   department: "Social Media"
  // },
  // {
  //   name: "Aditya Karigar",
  //   position: "Social Media Head",
  //   image: "/Team/Aditya.png",
  //   quote: "Somewhere between psychotic and iconic",
  //   department: "Social Media"
  // },
  // {
  //   name: "Atharv Mishra",
  //   position: "Head of Writing",
  //   image: "/Team/Atharv.png",
  //   quote: "imagine sisyphus happy ",
  //   department: "Writing"
  // },
  // {
  //   name: "Sharanya Anumula",
  //   position: "Head of Writing",
  //   image: "/Team/Sharanya.png",
  //   quote: "Einstein clearly never met a mudskipper. Fishes do climb trees.",
  //   department: "Writing"
  // },
  // {
  //   name: "Saptashwa Mondal",
  //   position: "Photography and Videography Head",
  //   image: "/Team/Saptashwa.png",
  //   quote: "I would like to thank Beyonce",
  //   department: "Photography and Videography"
  // },
  // {
  //   name: "Som Jain",
  //   position: "Photography and Videography Head",
  //   image: "/Team/Som.png",
  //   quote: "I support Johnsons baby",
  //   department: "Photography and Videography"
  // },
  // {
  //   name: "Uday Sri Kumar",
  //   position: "Technical Head",
  //   image: "/Team/Uday.png",
  //   quote: "Building dreams from scratch, no excuses",
  //   department: "Technical"
  // }
];

// Group team members by department for easier rendering
export const departments = [
  "Executive Board",
  "Technical",
  "Content Creation",
  "Public Relations & Outreach",
  "Photography & Videography",
  "Arts & Graphics",
  "Writing",
  "Operations",
];

// Create a grouped object of team members by department
export const teamMembersData = teamMembers.reduce<Record<string, TeamMember[]>>((acc, member) => {
  const department = member.department || "Other";
  if (!acc[department]) {
    acc[department] = [];
  }
  acc[department].push(member);
  return acc;
}, {});
