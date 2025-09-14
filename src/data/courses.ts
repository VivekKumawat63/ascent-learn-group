export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: number;
  image: string;
  category: string;
  tags: string[];
  syllabus: {
    title: string;
    duration: string;
    lessons: string[];
  }[];
  featured: boolean;
}

export interface Review {
  id: string;
  courseId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Master full-stack web development with React, Node.js, and modern tools. Build real-world projects and land your dream job.",
    instructor: "Sarah Johnson",
    duration: "40 hours",
    level: "Beginner",
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    studentsCount: 15420,
    image: "/src/assets/course-web-dev.jpg",
    category: "Development",
    tags: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
    featured: true,
    syllabus: [
      {
        title: "HTML & CSS Fundamentals",
        duration: "8 hours",
        lessons: [
          "HTML5 Structure and Semantics",
          "CSS3 Styling and Layouts",
          "Responsive Design Principles",
          "Flexbox and Grid Systems"
        ]
      },
      {
        title: "JavaScript Mastery",
        duration: "12 hours",
        lessons: [
          "ES6+ Features and Syntax",
          "DOM Manipulation",
          "Async Programming",
          "API Integration"
        ]
      },
      {
        title: "React Development",
        duration: "15 hours",
        lessons: [
          "Component Architecture",
          "State Management",
          "React Hooks",
          "Building Real Projects"
        ]
      },
      {
        title: "Backend with Node.js",
        duration: "5 hours",
        lessons: [
          "Server Setup",
          "Database Integration",
          "RESTful APIs",
          "Deployment Strategies"
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Data Science & Machine Learning",
    description: "Learn data analysis, visualization, and machine learning with Python. Work on real datasets and build predictive models.",
    instructor: "Dr. Michael Chen",
    duration: "60 hours",
    level: "Intermediate",
    price: 149.99,
    originalPrice: 299.99,
    rating: 4.9,
    studentsCount: 8730,
    image: "/src/assets/course-data-science.jpg",
    category: "Data Science",
    tags: ["Python", "Pandas", "Machine Learning", "Statistics"],
    featured: true,
    syllabus: [
      {
        title: "Python for Data Science",
        duration: "15 hours",
        lessons: [
          "NumPy and Pandas",
          "Data Cleaning Techniques",
          "Statistical Analysis",
          "Data Visualization"
        ]
      },
      {
        title: "Machine Learning Fundamentals",
        duration: "20 hours",
        lessons: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
          "Feature Engineering"
        ]
      },
      {
        title: "Advanced ML Techniques",
        duration: "15 hours",
        lessons: [
          "Deep Learning Basics",
          "Neural Networks",
          "Computer Vision",
          "Natural Language Processing"
        ]
      },
      {
        title: "Real-World Projects",
        duration: "10 hours",
        lessons: [
          "Predictive Analytics",
          "Recommendation Systems",
          "Time Series Analysis",
          "Model Deployment"
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Digital Marketing Mastery",
    description: "Complete digital marketing course covering SEO, social media, PPC, and analytics. Grow your business or start your career.",
    instructor: "Emma Rodriguez",
    duration: "35 hours",
    level: "Beginner",
    price: 79.99,
    originalPrice: 159.99,
    rating: 4.7,
    studentsCount: 12340,
    image: "/src/assets/course-marketing.jpg",
    category: "Marketing",
    tags: ["SEO", "Social Media", "PPC", "Analytics"],
    featured: true,
    syllabus: [
      {
        title: "Digital Marketing Foundations",
        duration: "8 hours",
        lessons: [
          "Marketing Strategy Basics",
          "Customer Personas",
          "Content Marketing",
          "Brand Building"
        ]
      },
      {
        title: "Search Engine Optimization",
        duration: "10 hours",
        lessons: [
          "Keyword Research",
          "On-Page SEO",
          "Technical SEO",
          "Link Building Strategies"
        ]
      },
      {
        title: "Social Media Marketing",
        duration: "8 hours",
        lessons: [
          "Platform Strategies",
          "Content Creation",
          "Community Management",
          "Influencer Marketing"
        ]
      },
      {
        title: "Paid Advertising & Analytics",
        duration: "9 hours",
        lessons: [
          "Google Ads",
          "Facebook Advertising",
          "Analytics Setup",
          "ROI Measurement"
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Business Management Fundamentals",
    description: "Essential business skills for managers and entrepreneurs. Learn leadership, strategy, and operations management.",
    instructor: "Robert Davis",
    duration: "30 hours",
    level: "Intermediate",
    price: 89.99,
    originalPrice: 179.99,
    rating: 4.6,
    studentsCount: 6540,
    image: "/src/assets/course-business.jpg",
    category: "Business",
    tags: ["Leadership", "Strategy", "Operations", "Finance"],
    featured: false,
    syllabus: [
      {
        title: "Leadership Essentials",
        duration: "8 hours",
        lessons: [
          "Leadership Styles",
          "Team Building",
          "Communication Skills",
          "Conflict Resolution"
        ]
      },
      {
        title: "Strategic Planning",
        duration: "7 hours",
        lessons: [
          "SWOT Analysis",
          "Market Research",
          "Competitive Analysis",
          "Goal Setting"
        ]
      },
      {
        title: "Operations Management",
        duration: "8 hours",
        lessons: [
          "Process Optimization",
          "Quality Management",
          "Supply Chain Basics",
          "Project Management"
        ]
      },
      {
        title: "Financial Management",
        duration: "7 hours",
        lessons: [
          "Financial Planning",
          "Budgeting",
          "Cost Analysis",
          "Performance Metrics"
        ]
      }
    ]
  },
  {
    id: "5",
    title: "UI/UX Design Principles",
    description: "Learn user interface and user experience design principles. Master Figma, prototyping, and design thinking.",
    instructor: "Lisa Park",
    duration: "45 hours",
    level: "Beginner",
    price: 119.99,
    originalPrice: 239.99,
    rating: 4.8,
    studentsCount: 9870,
    image: "/src/assets/course-web-dev.jpg", // Using web dev image as placeholder
    category: "Design",
    tags: ["UI Design", "UX Research", "Figma", "Prototyping"],
    featured: false,
    syllabus: [
      {
        title: "Design Fundamentals",
        duration: "10 hours",
        lessons: [
          "Design Principles",
          "Color Theory",
          "Typography",
          "Layout Design"
        ]
      },
      {
        title: "User Experience Research",
        duration: "12 hours",
        lessons: [
          "User Research Methods",
          "Persona Development",
          "User Journey Mapping",
          "Usability Testing"
        ]
      },
      {
        title: "Interface Design",
        duration: "15 hours",
        lessons: [
          "Wireframing",
          "Visual Design",
          "Component Systems",
          "Responsive Design"
        ]
      },
      {
        title: "Prototyping & Tools",
        duration: "8 hours",
        lessons: [
          "Figma Mastery",
          "Interactive Prototypes",
          "Design Handoff",
          "Portfolio Building"
        ]
      }
    ]
  },
  {
    id: "6",
    title: "Cybersecurity Essentials",
    description: "Comprehensive cybersecurity course covering network security, ethical hacking, and risk management.",
    instructor: "Alex Thompson",
    duration: "50 hours",
    level: "Advanced",
    price: 199.99,
    originalPrice: 399.99,
    rating: 4.9,
    studentsCount: 4560,
    image: "/src/assets/course-data-science.jpg", // Using data science image as placeholder
    category: "Security",
    tags: ["Cybersecurity", "Ethical Hacking", "Network Security"],
    featured: false,
    syllabus: [
      {
        title: "Security Fundamentals",
        duration: "12 hours",
        lessons: [
          "Security Principles",
          "Threat Landscape",
          "Risk Assessment",
          "Security Frameworks"
        ]
      },
      {
        title: "Network Security",
        duration: "15 hours",
        lessons: [
          "Network Protocols",
          "Firewalls and IDS",
          "VPN Technologies",
          "Wireless Security"
        ]
      },
      {
        title: "Ethical Hacking",
        duration: "18 hours",
        lessons: [
          "Penetration Testing",
          "Vulnerability Assessment",
          "Social Engineering",
          "Incident Response"
        ]
      },
      {
        title: "Compliance & Management",
        duration: "5 hours",
        lessons: [
          "Regulatory Compliance",
          "Security Policies",
          "Business Continuity",
          "Career Paths"
        ]
      }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    courseId: "1",
    userName: "John Smith",
    userAvatar: "JS",
    rating: 5,
    comment: "Excellent course! The instructor explains everything clearly and the projects are very practical. I landed a job within 3 months of completing this course.",
    date: "2024-01-15"
  },
  {
    id: "2",
    courseId: "1",
    userName: "Maria Garcia",
    userAvatar: "MG",
    rating: 5,
    comment: "Best web development course I've taken. The curriculum is up-to-date and covers everything you need to know to become a full-stack developer.",
    date: "2024-01-12"
  },
  {
    id: "3",
    courseId: "2",
    userName: "David Kim",
    userAvatar: "DK",
    rating: 5,
    comment: "Dr. Chen is an amazing instructor. The machine learning concepts are explained in a way that's easy to understand, even for beginners.",
    date: "2024-01-10"
  },
  {
    id: "4",
    courseId: "3",
    userName: "Sophie Wilson",
    userAvatar: "SW",
    rating: 4,
    comment: "Great course for digital marketing beginners. Emma provides real-world examples and actionable strategies that I'm using in my business.",
    date: "2024-01-08"
  }
];

export const categories = [
  "All",
  "Development",
  "Data Science", 
  "Marketing",
  "Business",
  "Design",
  "Security"
];

export const difficultyLevels = [
  "All Levels",
  "Beginner",
  "Intermediate", 
  "Advanced"
];

export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Free", min: 0, max: 0 },
  { label: "$1 - $50", min: 1, max: 50 },
  { label: "$51 - $100", min: 51, max: 100 },
  { label: "$101 - $200", min: 101, max: 200 },
  { label: "$200+", min: 200, max: Infinity }
];