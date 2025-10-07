import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: [
      'Led development of microservices architecture serving 500K+ users',
      'Mentored junior developers and conducted code reviews',
      'Reduced application load time by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ],
    type: 'work'
  },
  {
    id: 'exp-2',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      'Built and deployed 15+ full-stack web applications',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Integrated third-party APIs and payment systems',
      'Achieved 95+ Lighthouse scores across all projects'
    ],
    type: 'work'
  },
  {
    id: 'exp-3',
    title: 'Software Engineering Intern',
    company: 'Big Tech Corp',
    location: 'Seattle, WA',
    startDate: 'May 2020',
    endDate: 'Aug 2020',
    description: [
      'Developed internal tools used by 200+ employees',
      'Participated in agile development processes',
      'Wrote comprehensive unit and integration tests',
      'Presented findings to senior engineering leadership'
    ],
    type: 'work'
  },
  {
    id: 'edu-1',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    location: 'Boston, MA',
    startDate: 'Sep 2017',
    endDate: 'May 2021',
    description: [
      'GPA: 3.8/4.0',
      'Focus: Software Engineering, AI, and Web Development',
      'Dean\'s List all semesters',
      'President of Computer Science Club'
    ],
    type: 'education'
  }
];
