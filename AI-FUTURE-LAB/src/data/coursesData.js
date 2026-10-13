// Data for AI Future Lab Courses and Pathways
window.AIFutureLabData = window.AIFutureLabData || {};

window.AIFutureLabData.courses = [
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    tagline: "Understand what AI is and how it works.",
    category: "FOUNDATIONS",
    image: "assets/images/ai-fundamentals.png",
    level: "Beginner",
    duration: "4 Weeks",
    lessonsCount: 12,
    badge: "AI Explorer",
    color: "#6366f1",
    description: "Start from scratch and discover the core concepts of artificial intelligence. Learn how computers think, make decisions, and how algorithms mimic human reasoning.",
    topics: [
      "What is Artificial Intelligence?",
      "Human vs Machine Intelligence",
      "How Computers Make Decisions",
      "Data, Rules and Algorithms",
      "History and Evolution of AI",
      "Responsible Use of AI"
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    tagline: "Learn how computers learn patterns from data.",
    category: "CORE AI",
    image: "assets/images/machine-learning.png",
    level: "Intermediate",
    duration: "6 Weeks",
    lessonsCount: 16,
    badge: "Data Detective",
    color: "#8b5cf6",
    description: "Explore supervised, unsupervised, and reinforcement learning. Train your very first models using real-world data and evaluate prediction accuracy.",
    topics: [
      "What is Training Data?",
      "Pattern Recognition & Predictions",
      "Supervised vs Unsupervised Learning",
      "Neural Networks Simplified",
      "Training and Testing Models",
      "Avoiding Bias in Predictions"
    ]
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    tagline: "Explore chatbots, AI writing, images and creative AI.",
    category: "CREATIVE TECH",
    image: "assets/images/generative-ai.png",
    level: "All Grades",
    duration: "5 Weeks",
    lessonsCount: 14,
    badge: "Prompt Master",
    color: "#ec4899",
    description: "Unleash your imagination! Learn prompt engineering, generative artwork synthesis, storytelling with LLMs, and ethical considerations in content generation.",
    topics: [
      "How Large Language Models Work",
      "Crafting Effective Prompts",
      "Generating Visual Art & Storyboards",
      "AI for Music, Voice & Multimedia",
      "Copyright, Deepfakes & Truthfulness",
      "Building Your Own Creative Assistant"
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    tagline: "Teach computers to understand images and visual information.",
    category: "PERCEPTION",
    image: "assets/images/computer-vision.png",
    level: "Intermediate",
    duration: "5 Weeks",
    lessonsCount: 15,
    badge: "Vision Scout",
    color: "#06b6d4",
    description: "See the world through machine eyes! Build classifiers that detect objects, track colors, recognize faces, and identify animals and plants.",
    topics: [
      "How Computers Read Digital Pixels",
      "Image Recognition & Classification",
      "Object Detection & Bounding Boxes",
      "Facial & Gesture Recognition",
      "Self-Driving Cars Perception",
      "Privacy & Camera Ethics"
    ]
  },
  {
    id: "coding-with-ai",
    title: "Coding with AI",
    tagline: "Learn programming and use AI as a learning assistant.",
    category: "PROGRAMMING",
    image: "assets/images/coding-with-ai.png",
    level: "All Levels",
    duration: "8 Weeks",
    lessonsCount: 20,
    badge: "Python Coder",
    color: "#3b82f6",
    description: "Combine coding fundamentals in block-code and Python with modern AI assistants. Write cleaner scripts, debug faster, and build interactive web apps.",
    topics: [
      "Python Basics for School Students",
      "Coding with AI Pair Programmers",
      "Connecting to AI APIs",
      "Data Structures & Loops in Action",
      "Debugging & Code Explanation",
      "Deploying Your Web App"
    ]
  },
  {
    id: "ai-real-world",
    title: "AI in the Real World",
    tagline: "Discover how AI is used in healthcare, education, agriculture, transportation and business.",
    category: "IMPACT & SOCIETY",
    image: "assets/images/ai-real-world.png",
    level: "All Grades",
    duration: "4 Weeks",
    lessonsCount: 10,
    badge: "Global Innovator",
    color: "#10b981",
    description: "Investigate how AI transforms daily life across industries: green energy, smart cities, medical diagnostics, crop disease detection, and autonomous transport.",
    topics: [
      "Smart Cities & Connected Grids",
      "AI in Medicine & Health Diagnostics",
      "Precision Agriculture & Green Tech",
      "Autonomous Electric Vehicles",
      "AI in Space Exploration & Climate",
      "The Future of Work and Careers"
    ]
  },
  {
    id: "robotics",
    title: "Robotics",
    tagline: "Design, code, and bring your own smart robots to life.",
    category: "ROBOTICS",
    image: "assets/images/ai-robot-mascot.png",
    level: "All Grades",
    duration: "6 Weeks",
    lessonsCount: 14,
    badge: "Robot Builder",
    color: "#f97316",
    description: "Explore how robots sense, think, and act. Learn the basics of sensors, motors, and simple programs while creating friendly robots that solve real-world challenges.",
    topics: [
      "Meet the Parts of a Robot",
      "Sensors and How Robots Explore",
      "Motors, Movement, and Control",
      "Build Your First Robot Program",
      "Teach a Robot to Follow a Path",
      "Design Robots That Help People"
    ]
  }
];

window.AIFutureLabData.gradePathways = [
  {
    grade: "Grade 3–5",
    title: "AI Explorer",
    subtitle: "Students learn through games and activities.",
    image: "assets/images/grade-3-5-explorer.png",
    accentColor: "#38bdf8",
    badge: "Young Explorer",
    description: "An age-appropriate, playful entry into AI concepts inspired by Code.org. Students explore predictions, training data, and AI decision-making through fun interactive games.",
    topics: [
      "What is AI?",
      "Where do we see AI?",
      "How computers make decisions",
      "Data and patterns",
      "AI predictions",
      "AI and creativity",
      "Responsible use of AI"
    ]
  },
  {
    grade: "Grade 6–8",
    title: "AI Creator",
    subtitle: "Build your ideas and create projects.",
    image: "assets/images/grade-6-8-creator.png",
    accentColor: "#a855f7",
    badge: "Creative Maker",
    description: "Transition from player to builder. Middle school students experiment with machine learning models, conversational bots, basic Python, and creative problem-solving.",
    topics: [
      "AI Fundamentals",
      "Machine Learning",
      "Data & Training",
      "Chatbots",
      "Generative AI",
      "Computer Vision",
      "AI Ethics",
      "Basic Python",
      "AI Projects"
    ]
  },
  {
    grade: "Grade 9–12",
    title: "AI Innovator",
    subtitle: "Create advanced projects and solve real-world problems.",
    image: "assets/images/grade-9-12-innovator.png",
    accentColor: "#3b82f6",
    badge: "Tech Innovator",
    description: "A comprehensive pathway combining computer science, data science, deep learning concepts, prompt engineering, API integration, and portfolio-ready web apps.",
    topics: [
      "Python for AI",
      "Data Science",
      "Machine Learning",
      "Generative AI",
      "Prompt Engineering",
      "APIs & Web Integration",
      "Computer Vision",
      "AI Chatbots & Agents",
      "Responsible AI & Safety",
      "Portfolio Projects"
    ]
  }
];
