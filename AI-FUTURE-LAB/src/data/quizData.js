// Data for AI Quiz and Gamification System
window.AIFutureLabData = window.AIFutureLabData || {};

window.AIFutureLabData.quizzes = [
  {
    id: "quiz-ai-knowledge",
    title: "Test Your AI Knowledge",
    subtitle: "Challenge your understanding of core AI, Machine Learning, and Ethics concepts.",
    recommendedNext: "Machine Learning Basics",
    questions: [
      {
        id: 1,
        question: "What does AI stand for?",
        options: [
          "Automated Information",
          "Artificial Intelligence",
          "Advanced Internet",
          "Automated Intelligence"
        ],
        correctAnswer: 1,
        explanation: "AI stands for Artificial Intelligence—the simulation of human intelligence by computers and machines."
      },
      {
        id: 2,
        question: "How does Machine Learning primarily learn to solve problems?",
        options: [
          "By memorizing every rule typed by a human",
          "By finding patterns and statistical relationships in data",
          "By downloading random files from the internet",
          "By turning off its power automatically"
        ],
        correctAnswer: 1,
        explanation: "Machine Learning models identify patterns and make predictions from training data rather than relying solely on hand-crafted rules."
      },
      {
        id: 3,
        question: "Which technology allows self-driving cars to 'see' pedestrians and street signs?",
        options: [
          "Natural Language Processing",
          "Computer Vision",
          "Audio Synthesizer",
          "Spreadsheet Formula"
        ],
        correctAnswer: 1,
        explanation: "Computer Vision processes images and video streams using convolutional neural networks to identify objects in real time."
      },
      {
        id: 4,
        question: "What is an important responsibility when using Generative AI for school homework?",
        options: [
          "Copy and paste everything without reading it",
          "Verify facts, avoid plagiarism, and cite AI assistance properly",
          "Claim you wrote everything by hand in five seconds",
          "Ask AI to take all your exams for you"
        ],
        correctAnswer: 1,
        explanation: "Academic integrity and responsible AI use require fact-checking AI output, citing sources, and ensuring original human thinking."
      },
      {
        id: 5,
        question: "What happens when an AI model is trained on biased or unbalanced data?",
        options: [
          "It magically fixes itself every time",
          "It makes biased and unfair predictions in the real world",
          "It converts all images into black-and-white",
          "It runs twice as fast"
        ],
        correctAnswer: 1,
        explanation: "Garbage in, garbage out! If training data is biased, the resulting model will reproduce or amplify those biases in its decisions."
      }
    ]
  }
];

window.AIFutureLabData.gamification = {
  pointsSystem: [
    { action: "Complete Lesson", points: "+10 XP", icon: "BookOpen", color: "#3b82f6" },
    { action: "Complete Quiz", points: "+20 XP", icon: "CheckCircle", color: "#10b981" },
    { action: "Complete Project", points: "+50 XP", icon: "Code", color: "#8b5cf6" },
    { action: "Win Challenge", points: "+100 XP", icon: "Trophy", color: "#f59e0b" }
  ],
  badges: [
    { id: "ai-explorer", name: "AI Explorer", earned: true, desc: "Completed the AI Fundamentals introductory modules.", icon: "Compass" },
    { id: "data-detective", name: "Data Detective", earned: true, desc: "Identified patterns and trained a custom dataset.", icon: "Search" },
    { id: "prompt-master", name: "Prompt Master", earned: false, desc: "Mastered prompt engineering in Generative AI.", icon: "Sparkles" },
    { id: "python-coder", name: "Python Coder", earned: true, desc: "Wrote working Python scripts connected to AI APIs.", icon: "Terminal" },
    { id: "ai-builder", name: "AI Builder", earned: true, desc: "Published 2 or more working hands-on school projects.", icon: "Cpu" },
    { id: "young-innovator", name: "Young Innovator", earned: false, desc: "Entered an official school-wide AI Innovation Challenge.", icon: "Trophy" },
    { id: "responsible-champion", name: "Responsible AI Champion", earned: true, desc: "Signed the Ethical AI Student Pledge.", icon: "ShieldCheck" }
  ]
};
