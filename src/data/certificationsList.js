import { skillsList} from './skillsList';
import { levels } from './levelsList';
import { categories } from './categoriesList';

export const certificationsList = [
  {
    title: "React Developer Certification",
    issuer: "FreeCodeCamp",
    description:
      "Certified for building and deploying React applications using modern JavaScript and best practices.",
    skills: [
      skillsList.REACT,
      skillsList.JAVASCRIPT,
      skillsList.HOOKS,
      skillsList.SPA_ARCHITECTURE
    ],
    issuedDate: "October 2024",
    credentialId: "FCC123456",
    certificateUrl: "https://freecodecamp.org/certificate/example",
    categories: [categories.WEB_DEVELOPMENT, categories.JAVASCRIPT],
    level: levels.INTERMEDIATE
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    description:
      "Proficient in building responsive layouts using HTML5 and CSS3, including Flexbox and Grid.",
    skills: [
      skillsList.HTML,
      skillsList.CSS,
      skillsList.FLEXBOX,
      skillsList.GRID,
      skillsList.RESPONSIVE_DESIGN
    ],
    issuedDate: "September 2024",
    credentialId: "FCC654321",
    certificateUrl: "https://freecodecamp.org/certificate/example2",
    categories: [categories.WEB_DEVELOPMENT],
    level: levels.BEGINNER
  },
  {
    title: "CS50’s Introduction to Computer Science",
    issuer: "HarvardX / edX",
    description:
      "An introduction to the intellectual enterprises of computer science and the art of programming.",
    skills: [
      skillsList.C,
      skillsList.PYTHON,
      skillsList.ALGORITHMS,
      skillsList.DATA_STRUCTURES,
      skillsList.WEB_DEVELOPMENT,
      skillsList.COMPUTER_SCIENCE_FUNDAMENTALS
    ],
    issuedDate: "August 2023",
    credentialId: "CS50123456",
    certificateUrl: "https://cs50.harvard.edu/certificates/intro",
    categories: [categories.CS50, categories.COMPUTER_SCIENCE],
    level: levels.BEGINNER
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Foundational-level certification covering basic AWS Cloud concepts, services, and terminology.",
    skills: [
      skillsList.AWS_CLOUD,
      skillsList.EC2,
      skillsList.S3,
      skillsList.IAM,
      skillsList.CLOUD_COMPUTING,
      skillsList.BILLING_AND_PRICING
    ],
    issuedDate: "June 2024",
    credentialId: "AWS-CLD-789012",
    certificateUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    categories: [categories.AWS, categories.CLOUD],
    level: levels.BEGINNER
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Demonstrates expertise in designing distributed systems on AWS, with focus on scalability and resilience.",
    skills: [
      skillsList.AWS_CLOUD,
      skillsList.HIGH_AVAILABILITY,
      skillsList.NETWORKING,
      skillsList.STORAGE,
      skillsList.EC2,
      skillsList.RDS,
      skillsList.VPC,
      skillsList.CLOUD_FORMATION
    ],
    issuedDate: "July 2024",
    credentialId: "AWS-SAA-654321",
    certificateUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    categories: [categories.AWS, categories.CLOUD, categories.BACKEND],
    level: levels.INTERMEDIATE
  }
];
