import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";

export const INTRO_CONTENT = `I am a dedicated computer engineer with a solid foundation in both software development and data analysis. With hands-on experience through internships and academic projects, I have developed expertise in front-end technologies like HTML, CSS, JavaScript, and React Native, and back-end solutions using Node.js, MS SQL Server, and MongoDB. I have successfully collaborated on projects ranging from web applications for airplane management to a smart health watch application, ensuring robust functionality and user satisfaction. My aim is to leverage my skills to build scalable, efficient solutions that make a meaningful impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a strong foundation in computer engineering. I graduated from FAST National University of Computer and Emerging Sciences, Lahore, with a degree in Computer Engineering. During my time at university, I was honored to make the Dean’s List of Honors and served as a Teaching Assistant for Object Oriented Programming and Programming Fundamentals.

With professional experience as a Software Engineer Intern at Mastermind Communication, I honed my skills in HTML, CSS, and JavaScript, developing projects like a portfolio site, a to-do list, and interactive games. My work involved rigorous testing and debugging to ensure seamless functionality and a great user experience.

In my free time, I enjoy learning new programming languages and exploring emerging technologies. I thrive in collaborative environments and am passionate about solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - August 2023",
    role: "Software Engineer Intern",
    company: "Mastermind Communication",
    description: `I gained hands-on experience with HTML, CSS, and JavaScript, creating projects like portfolios and games. I also tested and debugged web apps to enhance functionality and improve my technical skills.`,
    technologies: ["Javascript", "HTML", "CSS", "Git"],
  },
  {
    year: "January 2024 - June 2024",
    role: "Teacher Assistant of Object Oriented Programming",
    company: "FAST-NUCES Lahore",
    description: `As a TA for Object-Oriented Programming, I assisted students with key OOP concepts, helped in lab sessions, graded assignments, and provided guidance on coding best practices, deepening my OOP expertise.`,
    technologies: ["Programming", "Analysis", "Mentorship"],
  },
  {
    year: "August 2023 - December 2023",
    role: "Teacher Assistant of Programming Fundamental",
    company: "FAST-NUCES Lahore",
    description: `As a TA for Programming Fundamentals, I supported students in learning core programming concepts, assisted in labs, and evaluated assignments, improving my communication and problem-solving skills while strengthening my programming knowledge.`,
    technologies: ["Teaching", "Communication",'Grading'],
  },
  
];

export const PROJECTS = [
  {
    title: "Smart Health Watch (FYP)",
    image: project1,
    description:
      "Collaborated with a team to develop a React Native Android application aimed at ensuring the safety of individuals. Established a secure cloud infrastructure for long term trend analysis, empowering proactive health management. Integrated sensors including MLX90614, MPU6050, and MAX3010 with micro-controller ESP-32 mini.",
    technologies: ["C", "ReactNative", "Node", "MongoDB"],
  },
  {
    title: "To-Do List Page",
    image: project5,
    description:
      "Developed a dynamic to-do list page using HTML, JavaScript, and CSS. Allows users to add, edit, and delete tasks with a clean and intuitive interface for efficient task management.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://todolist-yyb7.onrender.com/",
  },
  {
    title: "Store Application",
    image: project4,
    description:
      "Developed a dynamic store application using the MERN stack with full CRUD functionality to efficiently manage inventory items. Implemented RESTful APIs with Node.js and Express for seamless data handling and integrated MongoDB for scalable and fast database operations.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React"],
    link: "https://istore-wsvt.onrender.com/",
  },
  {
    title: "Library Management and Book Delivery System",
    image: project3,
    description:
      "Developed a C++ project utilizing Binary Search Tree, Hashtable, and Graph for managing book data, customer information, and map generation. Implemented Dijkstra's Algorithm for calculating the shortest path between the library and customer's address, improving delivery efficiency.",
    technologies: ["C++", "Binary Search Tree", "Graph", "Hashtable"],
  },
  {
    title: "Airplane Management Web Application",
    image: project2,
    description:
      "Built a web application using ASP.NET and MS SQL SERVER for managing airplane operations. Implemented role-based logins for admins and staff, facilitating flight booking, ticket booking, and visitor management.",
    technologies: ["ASP.NET", "MS SQL Server"],
  },
  {
    title: "Dice Game",
    image: project6,
    description:
      "The Dice Game offers a simple yet exciting experience where players roll two dice and get a random number between 2 and 12. Players can decide to roll again or keep their score. The aim is to reach a target score within a limited number of turns",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://arsalankhalid2002.github.io/dicechallenge/",
  },
  {
    title: "Simon Game",
    image: project7,
    description:
      "The Simon Game is a classic memory skill game where players must repeat a sequence of colors and sounds. The game consists of four colored buttons that light up in a specific order. The player must memorize and replicate the sequence to advance levels.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://arsalankhalid2002.github.io/simongame/",
  },
  {
    title: "Drum Kit",
    image: project8,
    description:
      "The Drum Kit project allows users to play different drum sounds by clicking on visual drum pads or using keyboard keys. Each pad corresponds to a different sound, creating an interactive music experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://arsalankhalid2002.github.io/drumkit/",
  }
  
];


export const CONTACT = {
  address: "Lahore, Pakistan ",
  phoneNo: "+92 3094474396",
  email: "arsalankhalid106@gmail.com",
};
