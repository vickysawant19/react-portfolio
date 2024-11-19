export const PROFILE = {
  name: "Vitthal Sawant",
  title: ["Full Stack Web Developer", "Electronics Engineer", "Instructor"],
  location: "Banda, Maharashtra, India 416511",
  email: "vitthal.sawant19@gmail.com",
  phone: "+91 9421265218",
  summary: `Full Stack Web Developer with expertise in React.js, Node.js, Express.js, MongoDB, and JavaScript. During a recent internship at Synexoo, developed a Learning Management System (LMS) using the MERN stack, Firebase, and Tailwind CSS, ensuring secure and efficient user experiences.  
  Bringing 6+ years of experience teaching electronics and web development, with a strong foundation in embedded systems, programming, and circuit design. Additionally, completed a Data Science course, gaining proficiency in Python, SQL, and Machine Learning, further enhancing problem-solving and analytical skills. Dedicated to creating impactful, user-focused solutions and leveraging modern technologies.`,
};

export const ABOUT = `I am a dedicated Electronics Engineer with a strong background in teaching. With 6 years of experience in electronics,IOT and programming, I've transitioned to web development and completed a Data Science course, expanding my expertise in Python, SQL, and Machine Learning.
Proficient in front-end and back-end development using React.js, Node.js, Express.js, and MongoDB, I have successfully built web applications like a mock test platform and a real-time chat app. One of my notable achievements is completing a Capstone Project in ML for E-commerce, demonstrating the ability to predict product delivery times and optimize customer service using data analysis.
My diverse skill set, combined with effective communication and leadership abilities, positions me to deliver innovative solutions and drive technological growth within any organization.`;

export const EXPERIENCE = [
  {
    company: "Synexoo",
    role: "Full Stack Software Developer (Intern)",
    duration: "July 2024 - August 2024",
    responsibilities: [
      "Designed and developed a complete Learning Management System (LMS) with dynamic frontend components and robust backend functionality, improving user experience and performance.",
      "Implemented Firebase Authentication for secure user login and role management, reducing unauthorized access by 100%.",
      "Utilized MERN stack with Firebase for real-time operations, deployed on Vercel with 99% uptime.",
    ],
    technology: ["MERN Stack", "Firebase", "Tailwind CSS", "Vercel"],
  },
  {
    company: "Government ITI Dodamarg",
    role: "Electronics Instructor",
    duration: "2018 - Present",
    responsibilities: [
      "Taught electronic engineering and programming concepts to students.",
      "Mentored students in embedded programming projects and problem-solving.",
      "Delivered instruction on microcontroller programming and circuit design.",
      "Developed strong communication and leadership skills through classroom management.",
      "Guided students on project development and technical skills improvement.",
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
  "Programming Languages: Python, SQL, React.js, PHP, Embedded C, JavaScript, Next.js",
  "Data Science: Machine Learning, Data Analysis, Data Visualization",
  "Microcontrollers and microprocessors",
  "Real-time operating systems",
  "Device drivers",
  "Embedded software design patterns",
  "Hardware-software co-design",
  "Debugging and testing embedded systems",
  "Problem Solving: Strong analytical and problem-solving skills honed through real-world projects",
  "Communication: Effective communication skills developed as an Electronics Instructor",
  "Teamwork: Collaborative team player with experience working on group projects",
  "Adaptability: Quick learner and adaptable to new technologies and challenges",
  "Time Management: Efficiently balancing coursework and work experience",
  "Customer Service: Proven ability to resolve customer queries and concerns",

  "Full-Stack Development: React, Node.js, Express.js, MongoDB",
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
      "Collecting and preprocessing large-scale data sets.",
      "Developing and fine-tuning machine learning algorithms for accurate delivery time predictions.",
      "Utilizing data-driven solutions to assess and enhance customer query resolution processes.",
    ],
    // links: {
    //   website: "https://example.com/predictive-model",
    //   github: "https://github.com/example/predictive-model",
    // },
    technologies: [
      "python",
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
      github:
        "https://github.com/vickysawant19/FullStack-MERN-Project-TechNotes",
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
    technologies: ["Appwrite", "Authentication", "React.js"],
  },
];
