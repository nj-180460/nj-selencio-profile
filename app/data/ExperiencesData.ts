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
        period: "September 2023 - April 2025",
        points: [
          "Successfully spearheaded the migration of over 30+ microservices, significantly improving system modularity and deployment frequency.",
          "Developed high-traffic APIs using Spring Boot and interactive frontends with Vue.js.",
          "Created shared component libraries that reduced overall development time by 25%."
        ]
      },
      {
        role: "Junior Java Developer",
        company: "MESSAGING SOLUTIONS PROVIDER INC.",
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
    education: {
      degree: "Bachelor of Science in Information Technology",
      school: "University of Eastern Philippines",
      location: "Northern Samar",
      period: "2018 - 2022"
    }
  };
  