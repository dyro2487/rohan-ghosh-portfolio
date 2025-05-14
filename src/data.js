export const personalData = {
    name: "Rohan Ghosh",
    position: "Full Stack Developer",
    phone: "9739657905",
    email: "rogh.2487@gmail.com",
    location: "Bangalore, India",
    about: "Experienced Full Stack Developer with expertise in Node.js, React, and AWS. Passionate about building scalable applications and solving complex problems.",
    languages: ["English", "Hindi", "Bengali"],
    socialLinks: [
      { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
      { name: "Twitter", url: "https://twitter.com/yourhandle", icon: "twitter" }
    ]
  };
  
  export const experiences = [
    {
      id: 1,
      company: "ILink Digital (YUM Brands)",
      role: "Technical Specialist",
      period: "Apr 2024 - Present",
      description: "Yum! Brands is one of the world's largest fast food restaurant companies (KFC, Pizza Hut, Taco Bell, The Habit Burger Grill).",
      responsibilities: [
        "Responsible for writing scalable code",
        "Gathering requirements",
        "Writing test cases",
        "Deploying the code"
      ],
      technologies: ["Node.js", "React", "AWS", "Docker"]
    },
    {
      id: 2,
      company: "Abylle Solutions Private Limited (HID GLOBAL)",
      role: "Node JS Developer",
      period: "Jan 2024 - Mar 2024",
      description: "Implemented mobile access control system using Apple Wallet for corporate badges.",
      responsibilities: [
        "Worked closely with clients to gather requirements",
        "Explored PACS documentation and gathered API details",
        "Integrated PACS with HIS client",
        "Wrote unit test cases"
      ],
      technologies: ["Node.js", "Apple Wallet API", "REST APIs"]
    },
    // Add other experiences similarly
  ];
  
  export const skills = {
    backend: ["Node JS", "Python", "PHP", "Go", "Kafka", "Redis"],
    frontend: ["React", "Next JS", "HTML", "CSS", "Javascript"],
    databases: ["Postgres", "MySQL", "MongoDB"],
    cloud: ["AWS", "AWS Lambda", "AWS API Gateway", "AWS S3"],
    devops: ["Docker", "CI/CD"],
    api: ["REST", "SOAP", "WebSocket"],
    testing: ["Jasmine", "Jest"],
    versionControl: ["GitHub", "Bitbucket"],
    frameworks: ["Express JS", "Nest JS", "Django", "Laravel"]
  };
  
  export const education = [
    {
      id: 1,
      degree: "Bachelor Of Technology",
      institution: "CMRIT(VTU)",
      period: "2011 - 2015",
      field: "ECE (Electronics and Communication Engineering)"
    },
    {
      id: 2,
      degree: "Post Graduate Diploma",
      institution: "Centre for Development of Advanced Computing",
      period: "2016 - 2017",
      field: "Advanced Computing"
    }
  ];
  
  export const projects = [
    {
      id: 1,
      name: "NEO PROJECT (HID GLOBAL)",
      description: "Mobile-based access control system replacing physical cards with digital credentials in Apple Wallet.",
      technologies: ["Node.js", "Apple Wallet API", "PACS Integration"],
      highlights: [
        "Integrated Physical Access Control System (PACS) with HID client",
        "Implemented mobile access card via Apple Wallet",
        "Improved security and user convenience"
      ]
    },
    {
      id: 2,
      name: "CTAP (Goodworklabs)",
      description: "Dialysis patient data processing and cloud upload system.",
      technologies: ["Node.js", "AWS", "Data Processing"],
      highlights: [
        "Designed APIs for data processing and upload",
        "Implemented AWS cloud integration",
        "Wrote comprehensive unit tests"
      ]
    }
    // Add other projects
  ];