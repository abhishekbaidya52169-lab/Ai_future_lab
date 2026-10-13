// Data for AI Tutorials and Interactive Exercises
window.AIFutureLabData = window.AIFutureLabData || {};

window.AIFutureLabData.tutorials = [
  {
    id: "tutorial-01",
    number: "01",
    title: "What is Artificial Intelligence?",
    duration: "20 minutes",
    badge: "AI Explorer",
    thumbnail: "assets/images/tutorial-experimen.jpeg",
    overview: "Artificial Intelligence (AI) is the ability of computers to learn, reason, solve problems and make decisions like humans.",
    steps: [
      {
        id: "step-1",
        title: "1. What is AI?",
        content: "Artificial Intelligence (AI) refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect. From voice assistants on phones to recommendation feeds and medical imaging, AI powers everyday modern tools.",
        keyPoints: [
          "AI mimics human cognitive functions like learning and problem-solving.",
          "Unlike ordinary software that follows static rules, AI learns from data.",
          "Common forms include Narrow AI (specialized in one task) and Generative AI."
        ]
      },
      {
        id: "step-2",
        title: "2. Where do we see AI?",
        content: "You interact with AI every single day! When you ask Siri for the weather, when Netflix suggests your next favorite cartoon, when autocorrect fixes your spelling, or when cameras recognize faces in photo albums—AI algorithms are working in real time.",
        keyPoints: [
          "Smart Assistants: Alexa, Siri, Google Assistant.",
          "Navigation & Maps: Real-time traffic rerouting.",
          "Entertainment: Video recommendations and game opponents."
        ]
      },
      {
        id: "step-3",
        title: "3. How computers make decisions",
        content: "Traditional computers follow 'If-Then' instructions written by human programmers: If button clicked, then play sound. But AI computers use algorithms to weigh probabilities based on patterns found in huge amounts of training data.",
        keyPoints: [
          "Traditional: Rules + Data = Answers",
          "Machine Learning: Data + Answers = Rules"
        ]
      },
      {
        id: "step-4",
        title: "4. Data and patterns",
        content: "Data is the food that powers AI! Just like humans learn what an elephant looks like by seeing many pictures of elephants (large ears, trunk, grey skin), an AI system processes thousands of examples to recognize recurring visual and numerical patterns.",
        keyPoints: [
          "More quality data leads to better model accuracy.",
          "Diverse data prevents biased or inaccurate predictions."
        ]
      },
      {
        id: "step-5",
        title: "5. AI predictions",
        content: "Once an AI recognizes a pattern, it can make educated guesses or predictions about new things it has never seen before. For example, predicting whether tomorrow will rain based on historical barometric pressure and cloud density.",
        keyPoints: [
          "Confidence score tells us how sure the AI is (e.g., 95% certainty).",
          "AI does not 'know' like a human—it calculates statistical likelihood."
        ]
      },
      {
        id: "step-6",
        title: "6. AI and creativity",
        content: "Can computers write poetry, paint pictures, or compose melodies? Generative AI models like diffusion models and large language models study millions of art pieces and books, blending styles to create brand-new imaginative compositions.",
        keyPoints: [
          "Creativity in AI is a collaboration between human imagination and machine generation.",
          "Human prompts guide the creative direction."
        ]
      },
      {
        id: "step-7",
        title: "7. Responsible use of AI",
        content: "With great power comes great responsibility! AI systems can make mistakes, hallucinate false facts, or reflect human biases. Responsible AI teaches us to verify facts, protect personal privacy, avoid plagiarism, and respect human rights.",
        keyPoints: [
          "Always double-check AI-generated information.",
          "Never upload private passwords or personal contact information.",
          "Use AI to enhance your own ideas, not replace original thinking."
        ]
      }
    ],
    interactiveActivity: {
      title: "Try it yourself: Identify AI Around You",
      instruction: "Classify the items below into 'Uses AI' or 'Does NOT use AI' by clicking on each card:",
      items: [
        { id: "item-1", name: "Smartphone Face Unlock", isAI: true, explanation: "Uses Computer Vision neural networks to analyze 3D facial landmarks." },
        { id: "item-2", name: "Standard Desk Calculator", isAI: false, explanation: "Follows hardcoded mathematical logic circuits without learning." },
        { id: "item-3", name: "Self-Driving Electric Car", isAI: true, explanation: "Uses computer vision, sensor fusion and reinforcement learning." },
        { id: "item-4", name: "Microwave Oven Timer", isAI: false, explanation: "A simple mechanical or countdown clock with fixed rules." },
        { id: "item-5", name: "Netflix Movie Recommendations", isAI: true, explanation: "Analyzes viewing histories using collaborative filtering algorithms." },
        { id: "item-6", name: "Traditional Flashlight", isAI: false, explanation: "Simple battery, switch and bulb circuit with no computational logic." }
      ]
    },
    miniChallenge: {
      title: "Mini Challenge: Spot and Classify AI in Your Daily Life!",
      reward: "+20 XP",
      question: "Can you train an AI system to identify cats and dogs?",
      concept: "Students learn the concept of training data, patterns, and predictions. Similar to Code.org's AI for Oceans lesson where students train a robot to clean trash in the sea."
    }
  }
];

window.AIFutureLabData.roadmap = [
  { month: 1, focus: "What is AI?", project: "AI Around Me", badge: "AI Explorer", desc: "Discover machine perception, algorithms, and AI tools in daily life." },
  { month: 2, focus: "Data & Patterns", project: "Data Detective", badge: "Data Scout", desc: "Collect, clean, and visualize datasets to uncover hidden trends." },
  { month: 3, focus: "Machine Learning", project: "Image Classifier", badge: "Model Trainer", desc: "Train supervised classification models with Teachable Machine." },
  { month: 4, focus: "Python Basics", project: "Python Mini App", badge: "Python Coder", desc: "Variables, loops, functions, and working with data structures." },
  { month: 5, focus: "Generative AI", project: "AI Story Generator", badge: "Creative Mind", desc: "Master text prompts, image generation, and creative storylines." },
  { month: 6, focus: "Prompt Engineering", project: "Prompt Challenge", badge: "Prompt Master", desc: "System prompts, few-shot learning, and conversational logic." },
  { month: 7, focus: "Chatbots", project: "School AI Assistant", badge: "Bot Builder", desc: "Design stateful conversational agents with custom school FAQs." },
  { month: 8, focus: "Computer Vision", project: "Object Detector", badge: "Vision Pro", desc: "Real-time webcam bounding boxes and gesture controls." },
  { month: 9, focus: "Data Science", project: "Student Data Explorer", badge: "Data Scientist", desc: "Analyze school science data and plot interactive insights." },
  { month: 10, focus: "AI + Web", project: "AI Web App", badge: "Full-Stack AI", desc: "Connect frontend HTML/CSS/JS with cloud AI model endpoints." },
  { month: 11, focus: "AI Ethics", project: "Responsible AI Project", badge: "Ethics Guardian", desc: "Audit algorithms for fairness, privacy safeguards, and truthfulness." },
  { month: 12, focus: "Capstone", project: "Build Your Own AI Solution", badge: "Young Innovator", desc: "Solve a real community or school challenge and present live!" }
];
