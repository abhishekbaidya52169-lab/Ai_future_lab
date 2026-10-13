// Data for AI Projects from PDF Specifications
window.AIFutureLabData = window.AIFutureLabData || {};

window.AIFutureLabData.projects = [
  {
    id: "ai-school-assistant",
    title: "AI School Assistant",
    category: "Chatbots",
    level: "Beginner",
    levelNumber: 1,
    image: "assets/images/ai-school-assistant.png",
    duration: "5–7 days",
    technology: "HTML + CSS + JavaScript + AI API",
    tagline: "Build a friendly chatbot to answer student questions about schedules and clubs.",
    problem: "Students often have difficulty finding information about timetables, school activities, upcoming sports events, clubs, homework assignments, and examination schedules.",
    solution: "Build an AI-powered conversational School Assistant that answers student queries 24/7 with instant, accurate school information.",
    skillsLearned: [
      "Chatbot concepts & conversational flow",
      "Prompt engineering & system instructions",
      "Structuring knowledge base data",
      "Calling AI APIs securely",
      "Interactive responsive user interface",
      "Testing and handling edge cases"
    ],
    finalOutput: "Students publish their own working web chatbot with customizable FAQs.",
    demoType: "chat",
    defaultDemoReplies: {
      "timetable": "Classes start at 8:30 AM! Your next subject is Computer Science in Lab 2.",
      "homework": "You have a math worksheet due tomorrow and a science diagram due Friday.",
      "clubs": "AI Club meets every Tuesday at 3:30 PM. Robotics Club meets on Thursday!",
      "exam": "Mid-term exams begin on October 25th. Download your schedule in the portal.",
      "default": "Hello! I am your AI School Assistant. Ask me about timetables, clubs, homework, or exam dates!"
    }
  },
  {
    id: "ai-story-generator",
    title: "AI Story Generator",
    category: "Generative AI",
    level: "Beginner",
    levelNumber: 1,
    image: "assets/images/project-story-generator.png",
    duration: "4–6 days",
    technology: "HTML + CSS + JavaScript + Generative AI",
    tagline: "Generate imaginative stories and illustrated adventures with your words.",
    problem: "Students frequently struggle with writer's block when starting creative writing assignments or designing narrative games.",
    solution: "Create an interactive story generator that takes student character prompts, genres, and themes to craft illustrated multi-chapter storybooks.",
    skillsLearned: [
      "Generative text modeling & temperature",
      "Creative prompt parameters",
      "Branching narrative logic",
      "Combining story text with AI visual cards",
      "Interactive web UI design"
    ],
    finalOutput: "A responsive digital storybook app where friends can read and continue custom adventures.",
    demoType: "story"
  },
  {
    id: "ai-image-classifier",
    title: "AI Image Classifier",
    category: "Computer Vision",
    level: "Intermediate",
    levelNumber: 2,
    image: "assets/images/project-image-classifier.png",
    duration: "1–2 weeks",
    technology: "JavaScript + Teachable Machine / TensorFlow.js",
    tagline: "Train a computer vision model to identify dogs, cats, and shapes.",
    problem: "Understanding how machines recognize real-world visuals without writing rigid pixel-by-pixel code rules.",
    solution: "Collect training photos, label classes (e.g. Dog vs Cat vs Rabbit), train a lightweight convolutional neural network, and test live predictions.",
    skillsLearned: [
      "Computer vision fundamentals",
      "Dataset curation and balanced sampling",
      "Model training, epochs, and loss curves",
      "Confidence scores and thresholds",
      "Webcam and image upload integration"
    ],
    finalOutput: "A live browser app that identifies pets and objects in real time with confidence meters.",
    demoType: "classifier"
  },
  {
    id: "ai-weather-assistant",
    title: "AI Weather Assistant",
    category: "Data & Prediction",
    level: "Beginner",
    levelNumber: 1,
    image: "assets/images/project-weather-assistant.png",
    duration: "5 days",
    technology: "HTML + JavaScript + Weather API + AI Summarizer",
    tagline: "Get predictive weather advice and smart clothing recommendations.",
    problem: "Raw meteorological forecasts can be confusing and don't tell kids practical tips like whether to bring an umbrella or reschedule sports.",
    solution: "A cheerful weather agent that synthesizes sensor readings into kid-friendly summaries with animated weather avatars.",
    skillsLearned: [
      "Fetching live REST API data",
      "Data parsing and JSON handling",
      "Using AI to synthesize text summaries",
      "Dynamic DOM state and UI styling"
    ],
    finalOutput: "A personalized weather buddy providing daily school commute forecasts.",
    demoType: "weather"
  },
  {
    id: "ai-homework-helper",
    title: "AI Homework Helper",
    category: "Tutoring & NLP",
    level: "Intermediate",
    levelNumber: 2,
    image: "assets/images/project-homework-helper.png",
    duration: "1 week",
    technology: "JavaScript + AI Prompt Guard + Math Formatter",
    tagline: "Step-by-step guidance that explains difficult questions without giving away answers.",
    problem: "Students getting stuck on tough math, science, or grammar problems outside school hours without a tutor.",
    solution: "An Socratic homework coach that asks guiding questions, breaks problems into simple steps, and provides intuitive analogies.",
    skillsLearned: [
      "Socratic AI prompt constraints (no direct answers)",
      "Educational reasoning patterns",
      "LaTeX math rendering and formulas",
      "Responsible AI academic integrity standards"
    ],
    finalOutput: "A dedicated study assistant that coaches students through tough homework problems.",
    demoType: "homework"
  },
  {
    id: "ai-plant-identifier",
    title: "AI Plant Identifier",
    category: "Computer Vision",
    level: "Intermediate",
    levelNumber: 3,
    image: "assets/images/project-plant-identifier.png",
    duration: "1–2 weeks",
    technology: "Python / JS + Vision AI Model + Nature Dataset",
    tagline: "Identify leaves, flowers, and botanical species in your school garden.",
    problem: "School science classes often struggle to catalog local campus biodiversity and identify plant diseases.",
    solution: "An eco-friendly vision classifier trained on leaf shapes, flower petals, and plant species.",
    skillsLearned: [
      "Botanical image dataset preparation",
      "Feature extraction in plant biology",
      "Transfer learning for image classification",
      "Environmental science AI applications"
    ],
    finalOutput: "A mobile-friendly plant scanner providing species facts and care guides.",
    demoType: "plant"
  },
  {
    id: "ai-waste-classifier",
    title: "AI Waste Classifier",
    category: "Eco-Tech & Vision",
    level: "Intermediate",
    levelNumber: 2,
    image: "assets/images/project-waste-classifier.png",
    duration: "1 week",
    technology: "JavaScript + Web Vision Model + Audio Feedback",
    tagline: "Sort recyclable cans, paper, plastic, and compostable organics correctly.",
    problem: "Schools generate substantial landfill waste due to contamination in recycling bins from improper sorting.",
    solution: "A smart camera scanner stationed at recycling points that detects item materials and illuminates the correct bin.",
    skillsLearned: [
      "Classification of plastic, paper, metal, and organics",
      "Real-time object categorization",
      "Connecting software alerts with visual UI",
      "Sustainability and social impact with AI"
    ],
    finalOutput: "A school cafeteria sorting kiosk interface with positive green badges.",
    demoType: "waste"
  },
  {
    id: "ai-career-assistant",
    title: "AI Career Assistant",
    category: "Advisory & NLP",
    level: "Advanced",
    levelNumber: 4,
    image: "assets/images/career-explorer.jpeg",
    duration: "2 weeks",
    technology: "React / JS + Career Vector Search + AI Advisor",
    tagline: "Explore future high-tech careers matching your personal passions and skills.",
    problem: "High-school students are unsure which emerging tech, engineering, and creative AI pathways match their strengths.",
    solution: "An exploratory questionnaire agent that maps interests in gaming, art, biology, or math to modern AI careers.",
    skillsLearned: [
      "Skill taxonomy and vector embedding matching",
      "Future career landscape research",
      "Profile generation and personalized roadmap output",
      "Educational guidance ethics"
    ],
    finalOutput: "A comprehensive career compass delivering personalized 5-year skill milestones.",
    demoType: "career"
  },
  {
    id: "ai-quiz-generator",
    title: "AI Quiz Generator",
    category: "EdTech & NLP",
    level: "Beginner",
    levelNumber: 1,
    image: "assets/images/project-quiz-generator.png",
    duration: "4–5 days",
    technology: "HTML + CSS + JavaScript + AI API",
    tagline: "Turn any textbook chapter into an interactive multiple-choice quiz instantly.",
    problem: "Teachers and study groups spend hours drafting practice tests for revision.",
    solution: "An automated quiz maker that parses reading passages and generates trivia questions, multiple choices, and explanations.",
    skillsLearned: [
      "Structured JSON extraction from language models",
      "Dynamic quiz scoring and answer evaluation",
      "Timer states and scorekeeping logic",
      "Educational content validation"
    ],
    finalOutput: "A custom quiz player where classmates can challenge each other.",
    demoType: "quizgen"
  },
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    category: "Productivity",
    level: "Beginner",
    levelNumber: 1,
    image: "assets/images/project-study-assistant.png",
    duration: "5 days",
    technology: "JavaScript + Local Storage + AI API",
    tagline: "Generate concise summaries, flashcards, and mnemonic memory aids.",
    problem: "Students feel overwhelmed with dense reading materials and exam review notes.",
    solution: "A smart notebook companion that condenses study notes into bite-sized key concepts and auto-generates digital flashcards.",
    skillsLearned: [
      "Text summarization techniques",
      "Spaced repetition principles",
      "Local storage data persistence",
      "Clean accessible reader UI design"
    ],
    finalOutput: "A personal flashcard and summary notebook app for school revision.",
    demoType: "study"
  }
];

window.AIFutureLabData.projectLevels = [
  {
    level: "Level 1 – Explore",
    tag: "No-Code & Visual Blocks",
    description: "Simple no-code projects. Drag-and-drop building, visual pattern recognition, and discovering AI behavior through intuitive visual interfaces.",
    color: "#10b981",
    examples: ["AI Story Generator", "AI Weather Assistant", "Quiz Builder"]
  },
  {
    level: "Level 2 – Create",
    tag: "Basic Coding + AI Tools",
    description: "Basic coding combined with AI tools. HTML/CSS/JS frontend logic, calling cloud APIs, and building interactive web interfaces.",
    color: "#3b82f6",
    examples: ["AI School Assistant", "Smart Waste Classifier", "Homework Helper"]
  },
  {
    level: "Level 3 – Build",
    tag: "Python + APIs + Data",
    description: "Python scripting, data pipelines, connecting vision and language APIs, cleaning datasets, and training custom classifiers.",
    color: "#8b5cf6",
    examples: ["AI Plant Identifier", "Computer Vision Pet Detector", "Data Detective"]
  },
  {
    level: "Level 4 – Innovate",
    tag: "Full AI Applications",
    description: "Complete full-stack AI applications. User authentication, data persistence, AI agent reasoning, evaluation rubrics, and production deployment.",
    color: "#f59e0b",
    examples: ["AI Career Advisor", "Campus Energy Optimization", "Capstone Innovation"]
  }
];
