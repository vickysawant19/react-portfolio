export const PROFILE = {
  name: "Vitthal Sawant",
  title: ["Full Stack Web Developer", "Electronics Engineer", "Instructor"],
  location: "Banda, Maharashtra, India 416511",
  email: "vitthal.sawant19@gmail.com",
  phone: "+91 9421265218",
  summary: `Full Stack Web Developer with expertise in React.js, Node.js, Express.js, MongoDB, and JavaScript. 
Currently interning as a Jr. Front-end Developer Intern at AUROSKKIL, where I am honing my front-end skills through intensive training and hands-on projects. Previously, during my internship at Synexoo, I developed a Learning Management System (LMS) using the MERN stack, Firebase, and Tailwind CSS to deliver secure and efficient user experiences.
With 6+ years of experience teaching electronics and web development, I bring a strong foundation in embedded systems, programming, and circuit design. I have also completed a Data Science course, gaining proficiency in Python, SQL, and Machine Learning, which enhances my problem-solving and analytical abilities.`,
};

export const ABOUT = `I am a dedicated Electronics Engineer with a strong background in teaching and a passion for integrating emerging technologies such as AI and IoT. With 6 years of experience in electronics, IoT, and programming, I've transitioned into web development and expanded my expertise through a Data Science course. I have developed a range of projects—from web applications and real-time communication platforms to innovative solutions that merge AI capabilities with IoT sensor data.

My work includes an AI Recipe Generator that leverages the Gemini AI API to generate personalized recipes, and an IoT & AI Based Smart Farm Control system that reads sensor data using ESP8266, processes it with an Express.js backend, and displays the data on a React and Vite-powered frontend with secure user authentication managed by Appwrite. These experiences empower me to design and deliver robust, scalable solutions that drive technological innovation.`;

export const EXPERIENCE = [
  {
    company: "AUROSKKIL",
    role: "Jr. Front-end Developer Intern",
    duration: "July 2024 - January 2025",
    responsibilities: [
      "Undergoing intensive training and contributing to front-end development projects.",
      "Collaborating with the IT department to design and implement user-friendly interfaces.",
      "Implementing industry best practices under the guidance of senior developers.",
      "Participating in code reviews and team meetings to continuously improve development processes.",
    ],
    technology: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    company: "Synexoo",
    role: "Full Stack Software Developer (Intern)",
    duration: "July 2024 - August 2024",
    responsibilities: [
      "Designed and developed a complete Learning Management System (LMS) with dynamic frontend components and robust backend functionality, improving user experience and performance.",
      "Implemented Firebase Authentication for secure user login and role management, reducing unauthorized access by 100%.",
      "Utilized the MERN stack with Firebase for real-time operations, deployed on Vercel with 99% uptime.",
    ],
    technology: ["MERN Stack", "Firebase", "Tailwind CSS", "Vercel"],
  },
  {
    company: "Government ITI Dodamarg",
    role: "Electronics Instructor",
    duration: "2018 - 2024",
    responsibilities: [
      "Taught electronic engineering and programming concepts to students.",
      "Mentored students in embedded programming projects and problem-solving.",
      "Delivered instruction on microcontroller programming and circuit design.",
      "Developed strong communication and leadership skills through effective classroom management.",
      "Guided students on project development and technical skills enhancement.",
    ],
    technology: [
      "Microcontroller Programming",
      "Circuit Design",
      "Embedded Systems",
      "Programming",
    ],
  },
];

export const EDUCATION = [
  {
    institution: "Trinity College of Engineering, Pune",
    degree: "Bachelor's Degree",
    duration: "2015 - 2018",
    field: "Electronics and Telecommunication Engineering",
  },
  {
    institution: "Careerera",
    degree: "Data Science Course",
    duration: "2023 - 2024",
    field: "Data Science",
  },
];

export const SKILLS = [
  "Programming Languages: HTML, CSS, JavaScript, React.js, PHP, Next.js, Python, SQL, Embedded C",
  "Full-Stack Development: React, Node.js, Express.js, MongoDB",
  "Data Science: Machine Learning, Data Analysis, Data Visualization",
  "Microcontrollers and microprocessors",
  "Embedded software design patterns",
  "Hardware-software co-design",
  "Debugging and testing embedded systems",
  "Problem Solving: Strong analytical and problem-solving skills honed through real-world projects",
  "Communication: Effective communication skills developed as an Electronics Instructor",
  "Teamwork: Collaborative team player with experience working on group projects",
  "Adaptability: Quick learner and adaptable to new technologies and challenges",
  "Time Management: Efficiently balancing coursework and work experience",
  "Customer Service: Proven ability to resolve customer queries and concerns",
  "User Authentication and Authorization",
  "Appwrite Backend-as-a-Service Platform",
];

export const CERTIFICATIONS = [
  {
    name: "Data Science",
    organization: "Careerera",
    duration: "Jan 2023 - Present",
    details:
      "In-depth coursework covering a wide range of data science topics, including but not limited to:",
  },
];

export const PROJECTS = [
  {
    name: "AI Recipe Generator (Cludi Chief)",
    details: [
      "Developed an AI-powered recipe generator leveraging the Gemini AI API to create personalized recipes for users.",
      "Built the frontend using React and styled with Tailwind CSS to ensure a responsive and engaging user experience.",
      "Implemented an Express.js backend in Node.js to handle API requests and integrate with the Gemini AI API.",
    ],
    links: {
      website: "https://ai-recipe-generator-one.vercel.app/",
      github: "https://github.com/vickysawant19/ai-recipe-generator"
    },
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "Gemini AI API",
    ],
  },
  {
    name: "IoT & AI Based Smart Farm Control",
    details: [
      "Engineered a smart farm control system using ESP8266 sensors to collect real-time farm data.",
      "Developed an Express.js backend to process sensor data and serve it to a React and Vite frontend.",
      "Integrated Appwrite for secure user authentication, allowing users to add and update their farm data.",
      "Enabled AI-powered insights, allowing users to query detailed farm information based on sensor data.",
    ],
    links: {
      website: "https://ai-smart-farm.vercel.app/",
      github:"https://github.com/vickysawant19/iot-smart-farm-client"
    },
    technologies: [
      "ESP8266",
      "Express.js",
      "React",
      "Vite",
      "Appwrite",
      "AI Integration",
    ],
  },
  {
    name: "AI Text-to-Image Generator",
    details: [
      "Developed a web application to generate AI-based images from text prompts using Vite and React for the frontend.",
      "Designed an intuitive and responsive UI using MUI and styled-components.",
      "Integrated the Pollinations API to generate high-quality images based on user inputs.",
      "Implemented image storage and metadata management using MongoDB and Cloudinary.",
      "Built a robust server with Express, following the MVC architecture for efficient backend operations.",
      "Enabled functionality for users to download generated images using FileSaver.",
    ],
    links: {
      website: "https://ai-image-generator-client-omega.vercel.app/",
      github: "https://github.com/vickysawant19/ai-image-generator",
    },
    technologies: [
      "React",
      "Vite",
      "MUI",
      "styled-components",
      "Pollinations API",
      "MongoDB",
      "Cloudinary",
      "Express",
      "JavaScript",
      "Full-Stack Development",
    ],
  },
  {
    name: "Bookstore Application",
    details: [
      "Developed a full-stack bookstore web application using the MERN stack for seamless frontend and backend integration.",
      "Implemented features for adding, deleting, and managing books through an admin dashboard.",
      "Designed a modern, responsive UI using Tailwind CSS for an enhanced user experience.",
      "Utilized MongoDB Aggregation to calculate total sales and manage inventory efficiently.",
      "Integrated dynamic popups for confirmation using SweetAlert (Swal) and managed authentication with Firebase.",
      "Deployed both frontend and backend on Vercel for optimized performance and ease of access.",
    ],
    links: {
      website: "https://book-store-mern-stack-project.vercel.app/",
      github: "https://github.com/vickysawant19/book-store-mern-stack-project",
    },
    technologies: [
      "MERN Stack",
      "MongoDB Aggregation",
      "Tailwind CSS",
      "SweetAlert (Swal)",
      "Firebase Authentication",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    name: "Mock Test Application",
    details: [
      "Developed an online mock test platform using React for frontend and Appwrite for backend services.",
      "Created features for dynamic user interactions, such as test-taking, score tracking, and progress visualization.",
      "Implemented role-based authentication and user management using Appwrite functions.",
      "Designed responsive and modern UI components using Tailwind CSS for an enhanced user experience.",
      "Handled database management for test papers and user data using Appwrite database services.",
    ],
    links: {
      website: "https://itimocktest.vercel.app",
      github: "https://github.com/vickysawant19/iti-mock-test",
    },
    technologies: [
      "React",
      "Appwrite",
      "Tailwind CSS",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    name: "Real-time Chat Application",
    details: [
      "Built a real-time chat application using Socket.io for seamless communication between users.",
      "Designed a modern and responsive UI using React and Tailwind CSS for an intuitive chat experience.",
      "Handled backend logic with Node.js, managing real-time events and user connections efficiently.",
      "Included features like typing indicators, read receipts, and message timestamps for an enhanced user experience.",
    ],
    links: {
      website: "https://chatapp-socketio-production.up.railway.app/",
      github: "https://github.com/vickysawant19/chatApp-socket.io",
    },
    technologies: [
      "Socket.io",
      "React",
      "Node.js",
      "Tailwind CSS",
      "JavaScript",
      "Real-time Communication",
    ],
  },
  {
    name: "Predictive Model for E-commerce Delivery",
    details: [
      "Collected and preprocessed large-scale datasets.",
      "Developed and fine-tuned machine learning algorithms for accurate delivery time predictions.",
      "Utilized data-driven solutions to assess and enhance customer query resolution processes.",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "Data Analysis",
    ],
  },
  {
    name: "URL Shortener",
    details: [
      "Developed a full-stack application for shortening URLs.",
      "Used React for the front-end, Node.js and Express.js for the back-end, and MongoDB for the database.",
      "Implemented user authentication and authorization.",
    ],
    links: {
      website: "https://short-this-url.onrender.com",
      github: "https://github.com/vickysawant19/url-shortner",
    },
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Authentication",
    ],
  },
  {
    name: "Notes App for Company D&D",
    details: [
      "Built a full-stack application for managing notes within a company.",
      "Utilized React, Node.js, Express.js, and MongoDB.",
      "Implemented user authentication and authorization with different access levels (admin, manager, employee).",
    ],
    links: {
      website: "https://dandd-technotes.onrender.com",
      github: "https://github.com/vickysawant19/FullStack-MERN-Project-TechNotes",
    },
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Authentication",
    ],
  },
  {
    name: "Appwrite Todo",
    details: [
      "Developed a todo application using Appwrite, a self-hosted backend-as-a-service platform.",
      "Implemented user authentication and authorization.",
      "Utilized Appwrite's database, storage, and other services.",
    ],
    links: {
      website: "https://appwrite-todo-wheat.vercel.app/",
      github: "https://github.com/vickysawant19/appwrite-todo",
    },
    technologies: [
      "Appwrite",
      "Authentication",
      "React.js",
    ],
  },
  
];