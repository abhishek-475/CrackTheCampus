import placementImage from "../assets/images/courses/placement-preparation.jfif";
import companyImage from "../assets/images/courses/company-test-series.jfif";
import interviewImage from "../assets/images/courses/technical-interview.jfif";

export const courses = [
  {
    id: "placement-preparation",
    category: "Placement Preparation",
    title: "Complete Placement Preparation",
    image: placementImage,
    description:
      "Master aptitude, logical reasoning, verbal ability, data structures & algorithms, coding interviews, and HR interviews through one structured learning path.",
    duration: "8 Weeks",
    students: "25K+ Students",
    level: "Beginner to Advanced",
    cta: "Explore Track",
    topics: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Verbal Ability",
      "Data Structures & Algorithms",
      "Coding Practice",
      "HR Interview Preparation",
    ],
  },

  {
    id: "company-test-series",
    category: "Company Specific",
    title: "Dream Company Test Series",
    image: companyImage,
    description:
      "Practice company-specific placement papers, coding assessments, and aptitude tests designed to match real hiring processes.",
    duration: "150+ Mock Tests",
    students: "18K+ Learners",
    level: "Intermediate",
    cta: "Start Practice",
    topics: [
      "TCS NQT",
      "Infosys",
      "Accenture",
      "Capgemini",
      "Cognizant",
      "Wipro",
    ],
  },

  {
    id: "technical-interview",
    category: "Interview Preparation",
    title: "Technical Interview Preparation",
    image: interviewImage,
    description:
      "Prepare for technical interviews with coding challenges, CS fundamentals, resume reviews, and realistic mock interview sessions.",
    duration: "50+ Hours",
    students: "12K+ Students",
    level: "Advanced",
    cta: "Prepare Now",
    topics: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "System Design Basics",
      "Mock Interviews",
    ],
  },
];