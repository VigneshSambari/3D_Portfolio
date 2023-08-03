import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    medimate,
    carrent,
    jobit,
    tripguide,
    threejs,
    dart,
    cpp,
    python,
    flutter,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Stealth Healthcare Startup(Medimate)",
      icon: medimate,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        `Technologies: Flutter, NodeJS, MongoDB, Git.`,
        `Converting wireframes to responsive UI in Flutter.`,
        `Designing and deploying the backend using NodeJS.`,
        `Integrating frontend UI with backend APIs with effective state and data management(GetX)`,
        `Collaborating with the team, debugging the code and problem solving.`
      ]
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  const purpleColor = "#915eff";
  const aboutSection = {
    head: "Introduction",
    overView: "Overview",
    info: `I am a highly skilled and versatile software developer with 
    expertise in various programming languages, including C++, Python, 
    Dart, HTML, CSS, and JavaScript. I am proficient in using tools like 
    VScode and Android Studio to build efficient and robust applications.
     As a full-stack developer, I have hands-on experience in both 
     frontend frameworks such as Flutter and ReactJS and backend 
     technologies like NodeJS and Firebase. Additionally, I possess a 
     strong understanding of Artificial Intelligence, Machine Learning, 
     and OpenCV. My technical proficiency, combined with my 
     problem-solving abilities, allows me to deliver innovative 
     solutions and contribute effectively to any software development 
     project.`
  }

  const experienceSection = {
    head: "What I have done so far",
    experince: "Work Experience"
  }

  const technologySection = {
    head: "What I have worked with so far",
    tech: "Tech Stack"
  }


  export { services, technologies, experiences, testimonials, 
      projects, purpleColor, aboutSection, experienceSection,
      technologySection };