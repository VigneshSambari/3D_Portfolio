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
    tripguide,
    threejs,
    dart,
    cpp,
    python,
    flutter,
    camconnect,
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
      name: "Chat Application(Full Chat Application)",
      description:
        ` Full chat application with chat features like texting,
        sharing images, location, documents and audio with
        notifications`,
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/VigneshSambari/Flutter_Chat_App",
      demo: "",
    },
    {
      name: "Campus Connect",
      description:
        `Community app to connect students and college.
         Contains features like blogging, specialized chat
        features designed for college students, profile. 
         Sessions feature to connect to teaching experts and
        industrial experts using video or audio call,
        implemented using Zego Cloud. 
         Bloc state management for responsive UI. 
         Scheduling the video conferences and enabled push
        notifications. 
         Can be scaled to other colleges and integrated with
        college's system. 
         Local storage management using ObjectBox`,
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "text-yellow-500",
        },
      ],
      image: camconnect,
      source_code_link: "https://github.com/VigneshSambari/Flutter_Community_App",
      demo: `https://www.canva.com/design/DAFib2SzZPI/Dsdf4gfuYZLtdG8TXXSrJA/edit?u
              tm_content=DAFib2SzZPI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`,
    },
    {
      name: "AI Radio App",
      description:
        ` Voice controlled Radio Application which plays music
        from live music streams. 
         Integrated Alan AI into radio application so as to
        interact with user and play music based on user
        interest. 
         Alan AI Assistant can also respond to some other
        general questions just like google assistant.`,
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Alan AI Studio",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/VigneshSambari/Flutter_AIRadio_App",
      demo: "",
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

  const workSection = {
    head: "My recent work",
    projects: "My Projects",
    desc: `Following projects showcases my skills and experience
            through real-world examples of my work. Each project
            is briefly described with links to code repositories and 
            live demos in it. It reflects my ability to solve compelx
             problems, work with different technologies, and manage projects 
             efficiently.`
  }


  export { services, technologies, experiences, testimonials, 
      projects, purpleColor, aboutSection, experienceSection,
      technologySection,workSection };