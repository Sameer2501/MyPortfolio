import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

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
//school logo
import SVIETLogo from './assets/education_logo/sviet.png';
import SchoolLogo from './assets/education_logo/school.png';
import pcsLogo from './assets/education_logo/pcs.png';

  
export const skillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'ReactJS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
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
    title: 'Programming',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
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
      role: "Frontend Developer",
      company: "SVIET",
      date: " AUGUST 2024 ",
      desc: "Built multiple responsive websites using HTML, CSS, JavaScript, and React.Practiced modern UI/UX using Tailwind CSS, animation libraries (like AOS, Framer Motion). Developed 5+ projects including a portfolio site, task manager, and event RSVP system.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Bootstrap",
        "AOS",
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
      title: "Ai-Chatbot",
      description:
        "Chat-AI is a modern frontend application built using React, Vite, and Tailwind CSS, designed for fast performance and smooth development experience. It uses Axios to interact with backend APIs, which can be used for features like chatbot conversations, user authentication, or real-time data updates.",
      image: projectLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Sameer2501/My-Projects/tree/main/Chat-AI",
      webapp: "https://my-projects-v291.vercel.app/",
    },
  ]
  export const school=[
    {
      id:0,
      img: SVIETLogo,
      school:"Swami Vivekanand Institute of Engineering and Technology",
      date:"2023 - Present",
      grade:"8.2 CGPA",
      desc:"Currently pursuing a Bachelor of Technology in Computer Science and Engineering at SVIET",
      degree:"B Tech. in Computer Science and Engineering",
    },
    {
      id:1,
      img: SchoolLogo,
      school:"Government Senior Secondary School",
      date:"2021 - 2023",
      grade:"89%",
      desc:"Completed high school with a focus on science and mathematics.",
      degree:"High School Certificate",
    },
    {
      id:2,
      img: pcsLogo,
      school:"Preach Convent International School",
      date:"2014 - 2019",
      grade:"78%",
      desc:"Completed  10 grade with a strong foundation in basic subjects.",
      degree:"Secondary School Certificate",
    },
  ]
