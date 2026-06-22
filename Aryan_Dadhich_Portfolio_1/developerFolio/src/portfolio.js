/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aryan Dadhich",
  title: "Hi all, I'm Aryan",
  subTitle: emoji(
    "An AI/ML Engineer 🤖 who builds RAG pipelines, agentic systems, and deep learning models — comfortable across LangChain, LangGraph, Multi-Agent orchestration, and full-stack AI applications, with a published research record in neurological disorder diagnosis."
  ),
  resumeLink:
    "https://github.com/AryanDadhich26", // Note: the "Download my resume" button on this template always serves src/containers/greeting/resume.pdf directly (your real resume is now there); this link field itself isn't wired to that button in this template version.
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AryanDadhich26",
  linkedin: "https://www.linkedin.com/in/aryan-dadhich-1ba06128a",
  gmail: "aryandadhichksg@gmail.com",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI/ML ENGINEER FOCUSED ON RAG SYSTEMS, AGENTIC AI & DEEP LEARNING",
  skills: [
    emoji(
      "⚡ Design and benchmark Retrieval-Augmented Generation (RAG) architectures — Naive, Hybrid, Graph, Agentic, Self-RAG, Corrective and more"
    ),
    emoji(
      "⚡ Build multi-agent and agentic orchestration systems using LangGraph, MCP, CrewAI, and Autogen"
    ),
    emoji(
      "⚡ Develop deep learning pipelines (CNNs, Transformers) for real-world data, including medical imaging classification"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "power-bi",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "robot",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The LNM Institute of Information Technology (LNMIIT), Jaipur",
      logo: require("./assets/images/lnmiitLogo.png"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "2023 – 2027",
      desc: "Coursework and project work centered on Deep Learning, RAG systems, and Agentic AI. Co-authored four chapters in the Elsevier Neural Engineering Book Series on neurological disorder diagnosis research.",
      descBullets: [
        "Built and benchmarked multiple production-grade RAG and agentic AI systems as part of independent project work",
        "Completed Generative AI with LLMs (DeepLearning.AI + AWS) on Coursera and the 365 Career Data Science track on Udemy"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML & Deep Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "RAG / Agentic Systems (LangChain, LangGraph, MCP)",
      progressPercentage: "88%"
    },
    {
      Stack: "Backend & Data (Python, FastAPI, SQL)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI/ML Intern",
      company: "AICTE Indovation Center",
      companylogo: require("./assets/images/aicteLogo.png"),
      date: "May 2025 – Jul 2025",
      desc: "Based in Jaipur, Rajasthan.",
      descBullets: [
        "Constructed RAG (Retrieval-Augmented Generation) models using LangChain for Facility & Event Booking Systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "RAG SYSTEMS, AGENTIC AI, AND DEEP LEARNING PIPELINES I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/ragverseLogo.png"),
      projectName: "RAGVerseAI",
      projectDesc:
        "A full-stack platform implementing and benchmarking 10 distinct RAG architectures (Naive, Hybrid, Fusion, Graph, MultiHop, ReRank, Adaptive, Agentic, Self-RAG, Corrective) against a shared knowledge base, with an evaluation engine scoring relevance, faithfulness, and completeness. Uses ChromaDB for dense vector search, BM25 for keyword retrieval, spaCy/NetworkX for knowledge graph traversal, and a FastAPI backend.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/AryanDadhich26/Rag_verse_ai"
        }
      ]
    },
    {
      image: require("./assets/images/langgraphLogo.png"),
      projectName: "Agentic Orchestration of Blog Generation (LangGraph, MCP, RAG)",
      projectDesc:
        "A multi-node AI agent using LangGraph and Groq (Llama 3.3) that automates technical blog creation by routing tasks between web research (Tavily API) and structured content generation. Includes a contextual RAG Q&A assistant (ChromaDB + HuggingFace embeddings), a Streamlit monitoring dashboard, SQL-based multi-turn session management, and Docker containerization.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/AryanDadhich26/LANGGRAPH_PROJECT_AGENTAI"
        }
      ]
    },
    {
      image: require("./assets/images/mriLogo.png"),
      projectName: "MRI Alzheimer's Classification Pipeline",
      projectDesc:
        "A deep learning pipeline classifying Alzheimer's stages from 3D MRI scans in the ADNI dataset (1000+ scans), with preprocessing (skull stripping, N4 correction, normalization, TorchIO augmentation) and a ResNet-based multi-view CNN with class balancing and regularization, achieving 92% accuracy.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/AryanDadhich26/MRI_ALZHEIMER"
        }
      ]
    },
    {
      image: require("./assets/images/n8nLogo.png"),
      projectName: "Incident Memory Assistant (n8n)",
      projectDesc:
        "An automated incident-response pipeline in n8n using webhook-based event routing, HuggingFace embeddings, and PostgreSQL with pgvector on Supabase to semantically search past incidents. Groq powers LLM-based briefing synthesis, with Slack delivery and a closed feedback loop that writes resolved incidents back into the vector store.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/AryanDadhich26"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications, Achievements And Certifications 🏆 "),
  subtitle:
    "Research publications, certifications, and extracurricular highlights",

  achievementsCards: [
    {
      title: "Co-Author, Elsevier Neural Engineering Book Series",
      subtitle:
        "Co-authored four chapters: Issues and Challenges of Neurological Disorders Diagnosis Research; Opportunities and Future Directions of Neurological Disorders Diagnosis Research; Neurology Beyond Deep Learning; Ensemble of Deep Learning Algorithms for Neurological Disorders.",
      image: require("./assets/images/elsevierLogo.png"),
      imageAlt: "Elsevier Logo",
      footerLink: []
    },
    {
      title: "Generative AI with LLMs",
      subtitle:
        "Coursera certification from DeepLearning.AI + AWS, covering the foundations and applications of large language models.",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://coursera.org/verify/N3P3U73LJOK1"
        }
      ]
    },
    {
      title: "365 Career Data Science Course",
      subtitle: "Completed the comprehensive Data Science career track on Udemy.",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-c463a0e1-d8c1-4a61-9fef-788f5c3676e1/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Notes and write-ups on RAG, agentic AI, and deep learning.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to talk RAG architectures, agentic AI, or a potential opportunity? My inbox is open.",
  number: "+91-9119150500",
  email_address: "aryandadhichksg@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
