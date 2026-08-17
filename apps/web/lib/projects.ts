export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "foodchainx",
    number: "01",
    name: "FoodChainX",
    category: "MICROSERVICES / SUPPLY CHAIN",
    description:
      "A farm-to-table supply chain system designed to support inventory tracking, order management, service discovery, and API-based communication across distributed services.",
    technologies: ["Spring Boot", "Microservices", "API Gateway"],
    github: "https://github.com/Vignesh9639/foodchain.git",
    featured: true,
  },
  {
    id: "smart-job-assistant",
    number: "02",
    name: "Smart Job Assistant",
    category: "AI / CAREER INTELLIGENCE",
    description:
      "An AI-powered career assistant designed to analyze resumes, evaluate ATS compatibility, match candidates with relevant opportunities, and provide intelligent interview preparation.",
    technologies: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/Vignesh9639/Smart-Job-Assistant.git",
  },
  {
    id: "rentalease",
    number: "03",
    name: "RentalEase",
    category: "FULL-STACK / BLOCKCHAIN",
    description:
      "A rental platform combining a modern frontend experience with blockchain functionality to support a more transparent rental workflow.",
    technologies: ["Frontend", "Blockchain"],
    github: "https://github.com/RushindraKumarReddy/RentalEase.git",
  },
];