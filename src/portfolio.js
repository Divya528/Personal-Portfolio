const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Divya528/Personal-Portfolio',
  title: 'Software Engineer',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Metta Divya',
  role: 'Software Engineer',
  description: `
    A passionate Software Engineer with experience in building scalable applications using Spring Boot and Java. I have experience working with Java, Spring Boot, PostgreSQL, MySQL, and Postman during my internship, where I developed backend services, optimized database queries, and integrated REST APIs.
    After taking a career break to focus on family obligations, I am now excited to return to the software development field and pursue Software Developer roles, applying my skills in building scalable web applications.
  `,
  resume: 'https://drive.google.com/file/d/11lMeqJtO9C88nhL_GSz23tGTOB8VJ-Rd/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/mettadivya',
    github: 'https://github.com/Divya528',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Supply Chain Management System',
    description:
      'A Spring Boot-based inventory system handling 1,000+ transactions daily, with optimized database queries improving efficiency by 40%.',
    stack: ['Spring Boot', 'Java', 'MySQL', 'REST API'],
    sourceCode: 'https://github.com/Divya528/Supply-chain-management-system',
    livePreview: 'https://github.com/Divya528/Supply-chain-management-system',
  },
  {
    name: 'Employee Management System',
    description:
      'A desktop application built with Java Swing and AWT for managing employee data, integrated with MySQL for efficient record handling.',
    stack: ['Java', 'Swing', 'AWT', 'MySQL'],
    sourceCode: 'https://github.com/Divya528/EmployeeManagementSystem',
    livePreview: 'https://github.com/Divya528/EmployeeManagementSystem',
  },
  {
    name: 'ML Project: Smartphone Impact on Students',
    description:
      'A machine learning analysis on smartphone usage patterns using K-Means, SVM, and KNN, featuring a visualization dashboard.',
    stack: ['Python', 'Machine Learning', 'Pandas', 'Matplotlib'],
    sourceCode: 'https://github.com/Divya528/EmployeeManagementSystem',
    livePreview: 'https://github.com/Divya528/EmployeeManagementSystem',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React JS',
  'Java',
  'springboot',
  'python',
  'Git',
  'SQL',
  "Rest API's",
  
]

export const workExperience = [
  {
    position: 'Software Engineer Intern',
    company: 'Aaga Tech',
    startDate: 'Feb 2025',
    endDate: 'Mar 2025',
    details: [
      'Developed and maintained backend services using Spring Boot & REST APIs, reducing response time by 30%.',
      'Optimized 10+ MySQL queries, improving database efficiency by 40%.',
      'Integrated JWT authentication, improving security for user sessions.',
      'Used Git & GitHub for version control and collaborated in an Agile team.',
    ],
  }
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'divyametta2000@gmail.com',
}

export { header, about, projects, skills, contact }
