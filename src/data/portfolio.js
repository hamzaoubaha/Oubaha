// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Hamza OUBAHA",
  firstName: "Hamza",
  role: "Junior Web Developer",
  tagline: "Building digital solutions step-by-step while mastering modern web technologies.",
  bio: "I am a motivated junior web developer from Morocco. I am dedicated to learning the art of web development, building practical projects, and improving my skills one line of code at a time.",
  bioExtended: `My journey in web development is driven by curiosity and a desire to build things that work. I am currently focused on mastering React and JavaScript for the frontend, while exploring Laravel and PHP for backend functionality.

I believe in honest progress and the power of practice. Every project I build is a learning opportunity that brings me closer to becoming a proficient developer. I am serious about my growth and look forward to contributing to meaningful projects.`,
  location: "Morocco",
  available: true,
  email: "hamzaa.ooubaha@gmail.com", 
  phone: null,
  cvUrl: null,
  avatar: null,
  social: {
    github: "https://github.com/hamzaoubaha",
    linkedin: "https://www.linkedin.com/in/hamza-oubaha-b8239b269/",
    twitter: null,
  },
};

export const stats = [
  { value: "5+", label: "Learning Projects" },
  { value: "10+", label: "Technologies Practiced" },
  { value: "100%", label: "Motivation to Grow" },
  { value: "Daily", label: "Ongoing Learning" },
];

export const skills = [
  {
    category: "Frontend",
    color: "accent",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
  },
  {
    category: "Backend (Learning)",
    color: "emerald",
    items: ["PHP Basics", "Laravel Fundamentals", "MySQL", "CRUD Operations"],
  },
  {
    category: "Tools",
    color: "purple",
    items: ["Git & GitHub", "Vite", "VS Code", "NPM"],
  },
  {
    category: "Laravel Specifics",
    color: "gold",
    items: ["Blade Templates", "Migrations", "Models", "Routing", "Form Validation"],
  },
];

export const techStack = [
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
  { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
  { name: "PHP", icon: "SiPhp", color: "#777BB4" },
  { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
  { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    slug: "portfolio",
    description: "A modern, responsive portfolio built with React to showcase my journey and learning progress.",
    longDescription: "This project was built to practice React components, state management, and modern UI design. It serves as my digital home where I document my growth as a developer.",
    image: "/projects/portfolio-v1.jpg",
    category: "React Projects",
    featured: true,
    technologies: ["React", "Vite", "Framer Motion", "Vanilla CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/hamzaoubaha/portfolio",
    year: 2024,
  },
  {
    id: 2,
    title: "Product CRUD App",
    slug: "product-crud",
    description: "A practical Laravel application to manage product records with full CRUD functionality.",
    longDescription: "Building this app helped me understand Laravel's MVC architecture, database migrations, and how to handle user input safely using form validation.",
    image: "/projects/laravel-crud.jpg",
    category: "Laravel Practice",
    featured: true,
    technologies: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    liveUrl: null,
    githubUrl: "https://github.com/hamzaoubaha/laravel-crud",
    year: 2024,
  },
  {
    id: 3,
    title: "Restaurant Management Practice",
    slug: "restaurant-practice",
    description: "An ongoing project focused on building a backend system for a small restaurant using Laravel.",
    longDescription: "Designed to practice relationship management in databases and implementing authentication/authorization for different roles.",
    image: "/projects/restaurant-app.jpg",
    category: "Laravel Practice",
    featured: true,
    technologies: ["Laravel", "PHP", "Blade", "Eloquent"],
    liveUrl: null,
    githubUrl: "https://github.com/hamzaoubaha/restaurant-app",
    year: 2024,
  },
  {
    id: 4,
    title: "Simple Weather App",
    slug: "weather-app",
    description: "A React application that fetches real-time weather data from an external API.",
    longDescription: "This project was a great way to learn about fetching data, handling API responses, and displaying information dynamically based on user search.",
    image: "/projects/weather.jpg",
    category: "React Projects",
    featured: false,
    technologies: ["React", "Fetch API", "CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/hamzaoubaha/weather-react",
    year: 2023,
  },
  {
    id: 5,
    title: "Landing Page Project",
    slug: "landing-page",
    description: "A clean and responsive landing page built with pure HTML and CSS to practice layout design.",
    longDescription: "Focused on mastering Flexbox, CSS Grid, and responsive breakpoints to ensure the site looks good on all devices.",
    image: "/projects/landing.jpg",
    category: "UI Practice",
    featured: false,
    technologies: ["HTML", "CSS", "Responsive Design"],
    liveUrl: null,
    githubUrl: "https://github.com/hamzaoubaha/landing-page",
    year: 2023,
  },
];

export const caseStudy = {
  title: "Building My Personal Portfolio",
  subtitle: "A reflection on creating a digital space to showcase my development journey.",
  project: projects[0],
  problem: {
    heading: "The Goal",
    text: "As a junior developer, I needed a professional way to present my projects and skills to the world. I wanted something that was clean, modern, and reflected my current focus on React.",
  },
  solution: {
    heading: "The Implementation",
    text: "I chose React for its component-based architecture and Vite for a fast development experience. I focused on semantic HTML and clean CSS to ensure the portfolio remained accessible and performant.",
  },
  process: [
    { step: "01", title: "Learning & Research", text: "Looked at modern portfolio designs and studied React best practices for structuring components." },
    { step: "02", title: "Design Phase", text: "Planned the layout carefully, starting with a mobile-first approach to ensure responsiveness." },
    { step: "03", title: "Coding", text: "Implemented the sections one by one, focusing on reusability and clean code principles." },
    { step: "04", title: "Review", text: "Tested the site on different devices and refined the animations for a smooth user experience." },
  ],
  result: {
    heading: "What I Learned",
    text: "This project taught me how to manage application state in React, work with Framer Motion for animations, and the importance of a well-organized codebase.",
    metrics: ["React Mastered", "Responsive Design Implemented", "Clean Code Practiced", "Vite Utilized"],
  },
  technologies: ["React", "Vite", "Framer Motion", "CSS"],
};

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using modern tools like React and JavaScript.",
    color: "accent",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    description: "Ensuring your website looks great and works perfectly on all screen sizes, from mobile to desktop.",
    color: "emerald",
  },
  {
    id: 3,
    title: "Basic CRUD Applications",
    description: "Developing simple Laravel or PHP applications to manage data through Create, Read, Update, and Delete operations.",
    color: "purple",
  },
  {
    id: 4,
    title: "UI Implementation",
    description: "Turning designs into functional code with a focus on clean layout and user-friendly interactions.",
    color: "gold",
  },
];

export const experience = [
  {
    id: 1,
    year: "2024 — Present",
    title: "Junior Web Development Practice",
    organization: "Personal Learning Journey",
    description: "Focusing on building real-world projects with React and Laravel. Improving coding standards and learning to solve practical problems step-by-step.",
    type: "learning",
    highlight: true,
  },
  {
    id: 2,
    year: "2023 — 2024",
    title: "Self-Learning Phase",
    organization: "Online Platforms",
    description: "Dedicated time to learning HTML, CSS, and JavaScript. Completed various mini-projects to solidify my understanding of web fundamentals.",
    type: "learning",
    highlight: false,
  },
  {
    id: 3,
    year: "2023",
    title: "Foundation in Programming",
    organization: "Learning Basics",
    description: "Starting the journey by understanding logic, algorithms, and the core building blocks of the web.",
    type: "learning",
    highlight: false,
  },
];

export const testimonials = [];

export const certifications = [];

export const currentFocus = [
  { title: "React", text: "Improving my understanding of hooks, context API, and performance optimization." },
  { title: "Laravel", text: "Mastering the fundamentals of backend development, routes, and migrations." },
  { title: "Portfolio", text: "Building more quality projects to showcase my practical skills and growth." },
];

export const projectCategories = ["All", "React Projects", "Laravel Practice", "UI Practice", "Personal Projects"];

