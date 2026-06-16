import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import expressLogo from './assets/tech_logo/expressLogo.png';
import nodeLogo from './assets/tech_logo/nodeLogo.png';
import mongodbLogo from './assets/tech_logo/mongoLogo.png';

import figmaLogo from './assets/tech_logo/figma.png';
import canvaLogo from './assets/tech_logo/canva.png';
import photoshopLogo from './assets/tech_logo/ps.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

import FrontendLogo from './assets/company_logo/frontend.png';
import DesigningLogo from './assets/company_logo/graphic.png';
import projectLogo from './assets/ai-bot.png';
import gptLogo from './assets/image.png'
import cryptoLogo from './assets/crypto-app.png'
import AttendLogo from './assets/AttendLogo.png'
import preptLogo from './assets/preptLogo.png'
import eventLogo from './assets/eventLogo.png'
//school logo
import SVIETLogo from './assets/education_logo/sviet.png';
import SchoolLogo from './assets/education_logo/school.png';
import pcsLogo from './assets/education_logo/pcs.png';


export const skillsInfo = [
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'ReactJS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'ExpressJS', logo: expressLogo },
      { name: 'NodeJS', logo: nodeLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Designing',
    skills: [
      { name: 'Figma', logo: figmaLogo },
      { name: 'Canva', logo: canvaLogo },
      { name: 'Photoshop', logo: photoshopLogo },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];
export const experiences = [
  {
    id: 0,
    img: FrontendLogo,
    role: "Full Stack Development",
    company: "SVIET",
    date: " AUGUST 2024 ",
    desc: "At SVIET, I'm deeply engaged in Full Stack Development. My focus is on building dynamic, responsive, and user-friendly web applications using modern technologies. I practice clean coding, responsive UI/UX design, and implement modern frontend features using libraries like GSAP, AOS, and Framer Motion. My current work involves building full-stack projects that combine robust backend logic with seamless frontend interactions.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Bootstrap",
      "AOS",
      "Framer Motion",
      "API",
      "Mongodb",
      "Express JS",
      "Node JS",
    ],
  },
  {
    id: 1,
    img: DesigningLogo,
    role: "Designer",
    company: "SVIET",
    date: "July 2024",
    desc: "Designed event posters, social media creatives, and college magazine layout. Worked with tools like Photoshop, Canva, and Illustrator. Created designs for 10+ events.",
    skills: [
      "Canva",
      "Photoshop",
      "Illustrator",
    ],


  },
];

export const projects = [


  {
    id: 0,
    title: "Prept",
    description:
      "Prept is a state-of-the-art, peer-to-peer technical mock interview platform connecting Interviewees (candidates) with Interviewers (industry experts). It features a premium, interactive UI with seamless HD video calling, live chat, real-time AI assistance, and automatic post-interview feedback reports.",
    image: preptLogo,
    tags: ["Next.js 16", "Tailwind CSS v4", "JavaScript", "React JS", "shadcn/ui", "Clerk", "PostgreSQL"],
    github: "https://github.com/Sameer2501/prept.git",
    webapp: "https://prept-snowy.vercel.app/",
  },
  {
    id: 1,
    title: "Eventora",
    description:
      "Eventora is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to facilitate seamless event discovery, booking, and management. It includes advanced features like 2FA account verification via OTP and automated email confirmation alerts.",
    image: eventLogo,
    tags: ["JavaScript", "React JS", "API", "NodeJs", "ExpressJs", "MongoDB", "Gemini API"],
    github: "https://github.com/Sameer2501/Booking.git",
    webapp: "https://booking-zeta-red.vercel.app/",
  },

  {
    id: 2,
    title: "Ai Attendence System",
    description:
      "A facing AI attendance system where teachers can view student attendance data and generate detailed reports. The admin interface allows full management of student records and permissions.",
    image: AttendLogo,
    tags: ["JavaScript", "React JS", "CoinGecko API", "ChartsJs"],
    webapp: "https://deepseek-orpin.vercel.app/login",
  },
  {
    id: 3,
    title: "CollegeBuddy",
    description:
      "CollegeGPT is an AI-powered chatbot designed to make exploring Swami Vivekanand Institute of Engineering & Technology (SVIET) effortless and interactive. Built with a Node.js + Express backend and a React + Tailwind CSS frontend, it combines the power of the Gemini/OpenAI API with a custom-curated JSON dataset to deliver accurate, instant answers about courses, placements, fees, hostel rules, campus layout, and special programs like Super 60 and The Uniques. Whether you’re a fresher, a parent, or a prospective student, CollegeGPT replaces long website searches with a simple, engaging chat experience, complete with structured placement insights, campus navigation, and hostel guidelines—all accessible in seconds.",
    image: gptLogo,
    tags: ["JavaScript", "React JS", "API", "NodeJs", "ExpressJs", "MongoDB", "Gemini API"],
    github: "https://github.com/Sameer2501/CollegeGPT",
    webapp: "https://college-gpt-dmi3.vercel.app/",
  },
  {
    id: 4,
    title: "CryptoVerse",
    description:
      "The **Cryptoverse App** is a comprehensive cryptocurrency tracking platform that offers real-time market data, interactive charts, exchange details, and the latest news. Users can explore detailed insights into coins, view historical trends, and stay updated with live price movements. Designed for both beginners and traders, Cryptoverse helps make smarter investment decisions with accurate, reliable, and user-friendly crypto information.",
    image: cryptoLogo,
    tags: ["JavaScript", "React JS", "CoinGecko API", "ChartsJs"],
    github: "https://github.com/Sameer2501/crypto-app",
    webapp: "https://crypto-app-dusky-five.vercel.app/",
  },

]
export const school = [
  {
    id: 0,
    img: SVIETLogo,
    school: "Swami Vivekanand Institute of Engineering and Technology",
    date: "2023 - Present",
    grade: "8.2 CGPA",
    desc: "Currently pursuing a Bachelor of Technology in Computer Science and Engineering at SVIET",
    degree: "B Tech. in Computer Science and Engineering",
  },
  {
    id: 1,
    img: SchoolLogo,
    school: "Government Senior Secondary School",
    date: "2021 - 2023",
    grade: "89%",
    desc: "Completed high school with a focus on science and mathematics.",
    degree: "High School Certificate",
  },
  {
    id: 2,
    img: pcsLogo,
    school: "Preach Convent International School",
    date: "2014 - 2019",
    grade: "78%",
    desc: "Completed  10 grade with a strong foundation in basic subjects.",
    degree: "Secondary School Certificate",
  },
]
