import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'rubiks-cube-solver',
    title: 'Rubik\'s Cube Solver',
    description: 'AI-powered Rubik\'s Cube solver with 3D visualization built using React and Python FastAPI backend.',
    longDescription: 'An interactive web application that solves Rubik\'s Cube using advanced algorithms with real-time 3D visualization.',
    image: 'https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'Three.js', 'TailwindCSS'],
    problem: 'Solving a Rubik\'s Cube can be challenging and time-consuming. Many solvers lack interactive visualization, making it hard to follow along.',
    approach: 'Built a full-stack application with a React frontend featuring 3D cube rendering and a FastAPI backend implementing the Kociemba algorithm for optimal solutions.',
    challenges: 'Implementing efficient 3D transformations, managing state synchronization between frontend and backend, and optimizing algorithm performance.',
    takeaways: 'Gained deep understanding of computational geometry, algorithm optimization, and building real-time interactive applications.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/rubiks-solver',
    featured: true
  },
  {
    id: 'task-management-app',
    title: 'Task Management Platform',
    description: 'A collaborative task management platform with real-time updates, team collaboration, and project tracking.',
    longDescription: 'Full-featured project management tool designed for teams to organize, track, and collaborate on tasks efficiently.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'TailwindCSS', 'Framer Motion'],
    problem: 'Teams struggle with fragmented communication and lack of visibility into project progress across multiple tools.',
    approach: 'Created a unified platform with real-time collaboration features, drag-and-drop task boards, and comprehensive project analytics.',
    challenges: 'Implementing real-time synchronization, managing complex user permissions, and ensuring optimal performance with large datasets.',
    takeaways: 'Learned about real-time data synchronization, complex state management, and building scalable database architectures.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/task-manager',
    featured: true
  },
  {
    id: 'portfolio-generator',
    title: 'Portfolio Generator',
    description: 'A SaaS platform that helps developers create beautiful portfolio websites with customizable templates.',
    longDescription: 'No-code solution for developers to build and deploy professional portfolios in minutes.',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    problem: 'Many developers lack the time or design skills to create compelling portfolio websites.',
    approach: 'Built a drag-and-drop editor with pre-designed templates, integrated analytics, and one-click deployment.',
    challenges: 'Creating a flexible template system, implementing a visual editor, and handling custom domain setup.',
    takeaways: 'Mastered component-based architecture, payment integration, and building user-friendly admin interfaces.',
    githubUrl: 'https://github.com/yourusername/portfolio-gen',
    featured: false
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Analytics Dashboard',
    description: 'Real-time weather dashboard with historical data visualization and location-based forecasts.',
    longDescription: 'Comprehensive weather application providing detailed forecasts, historical trends, and weather alerts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'TypeScript', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
    problem: 'Existing weather apps lack detailed historical data and intuitive data visualization.',
    approach: 'Integrated multiple weather APIs and built custom data visualization components for trend analysis.',
    challenges: 'Handling API rate limits, processing large datasets efficiently, and creating responsive charts.',
    takeaways: 'Improved skills in data visualization, API integration, and building performant data-heavy applications.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    featured: false
  }
];
