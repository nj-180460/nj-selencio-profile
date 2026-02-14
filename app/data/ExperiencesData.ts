import { calculateExperience } from "../utility/calculateYearsOfExperience";

export const resumeData = {
    name: "Neil John Perez Selencio",
    title: "Java Developer | Full Stack Developer",
    contact: {
      phone: "+639 675 936 996",
      email: "neiljohnselencio@gmail.com",
      location: "Quezon City, Metro Manila",
      linkedin: "https://linkedin.com/in/neil-john-selencio-71923217b/",
      github: "https://github.com/nj-180460"
    },
    getSummary: () => {
      const duration = calculateExperience(2022, 7);
      return `Dynamic and results-oriented Full Stack Developer with over ${duration} of experience specializing in high-scale fintech solutions. Expertise in architecting robust backend systems with Java (Spring Boot) and optimizing CI/CD pipelines. Proven track record in leading complex system migrations to enhance scalability in fast-paced enterprise environments.`;
    },
    experience: [
        {
        role: "Full Stack Developer",
        company: "GCASH (G-XCHANGE, INC).",
        url: "https://www.gcash.com/",
        period: "September 2025 - Present",
        points: [
            "Developed high-performance software programs using Java (Spring Boot) for millions of users.",
            "Managed end-to-end CI/CD pipelines to streamline software delivery.",
            "Leveraged AWS, Docker, and Kubernetes for modern cloud infrastructure."
        ]
        },
        {
        role: "Senior Backend Engineer",
        company: "ASCENDION INC. (Maya Project)",
        url: "https://ascendion.com/",
        period: "June 2025 - September 2025",
        points: [
            "Engineered mission-critical payment processing systems for Maya's acceptance platform.",
            "Developed comprehensive test suites to maintain 99.9% application accuracy.",
            "Ensured strict compliance with regulatory and security standards."
        ]
        },
        {
        role: "Full Stack Developer",
        company: "HC CONSUMER FINANCE PHILIPPINES, INC.",
        url: "https://www.homecredit.ph/",
        period: "September 2023 - April 2025",
        points: [
            "Successfully spearheaded the migration of over 30+ microservices.",
            "Developed high-traffic APIs using Spring Boot and interactive frontends with Vue.js.",
            "Created shared component libraries that reduced overall development time by 25%."
        ]
        },
        {
        role: "Junior Java Developer",
        company: "MESSAGING SOLUTIONS PROVIDER INC.",
        url: "https://mspi.com.ph/",
        period: "August 2022 - August 2023",
        points: [
            "Built and scaled web service APIs using Java and MVC architecture.",
            "Identified and resolved performance bottlenecks in legacy codebases."
        ]
        }
    ],
    skills: [
      "Java", "Spring Boot", "Microservices", "Spring Security", "JPA/Hibernate",
      "Oracle SQL", "PL/SQL", "Vue.js", "AWS (Elastic Beanstalk)", "Azure DevOps",
      "Docker", "Kubernetes", "RabbitMQ", "Apache Kafka", "CI/CD (GitLab/GitHub Actions)",
      "Unit Testing", "JIRA/Confluence", "Splunk", "Grafana", "Swagger/OpenAPI"
    ],
    certifications: [
        { name: "Advanced Spring Boot", url: "https://www.udemy.com/certificate/UC-c8e36d44-a980-4149-bad4-8c892836ee95/" },
        { name: "Learn AWS - Deploy Java Spring Boot to AWS", url: "https://www.udemy.com/certificate/UC-2eefe75e-4c42-45a9-a745-b476087143c7/" },
        { name: "API and Web Service Introduction", url: "https://www.udemy.com/certificate/UC-68a0ec95-6692-4036-931a-b4506b66ad9c/" },
        { name: "ASP.NET Core Web API Bootcamp", url: "https://www.udemy.com/certificate/UC-9718fb20-1706-43c7-a269-3a0f0bb37850/" },
        { name: "Problem Solving (Basic) Certificate", url: "https://www.hackerrank.com/certificates/1fc12a1b18e3" },
        { name: "Azure DevOps Fundamentals for Beginners", url: "https://www.udemy.com/certificate/UC-187a037b-38f9-4aee-8e91-834ed3396d37/" },
        { name: "The Vue 3 Bootcamp - Complete Guide", url: "https://www.udemy.com/certificate/UC-e86e42c2-0ae4-49f6-a52b-efea4fc26c1d/" },
        { name: "GitLab CI/CD: Pipelines & DevOps", url: "https://www.udemy.com/certificate/UC-4d493a87-1eb7-4959-9290-2d3328af1eb4/" }
    ],
    education: {
      degree: "Bachelor of Science in Information Technology",
      school: "University of Eastern Philippines",
      location: "Northern Samar",
      period: "2018 - 2022"
    }
  };
