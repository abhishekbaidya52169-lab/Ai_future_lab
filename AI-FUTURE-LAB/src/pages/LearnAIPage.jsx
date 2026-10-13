// Learn AI Courses Explorer Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const learnGradePaths = [
  {
    grade: "Grade 3–5",
    title: "AI Explorer",
    level: "Beginner",
    description: "Discover AI through fun activities, playful experiments, and simple concepts.",
    icon: "🔎",
    color: "#38bdf8"
  },
  {
    grade: "Grade 6–8",
    title: "AI Creator",
    level: "Intermediate",
    description: "Learn how AI works and build your first clever AI projects.",
    icon: "🛠️",
    color: "#a855f7"
  },
  {
    grade: "Grade 9–12",
    title: "AI Innovator",
    level: "Advanced",
    description: "Explore advanced AI, real-world applications, and innovative projects.",
    icon: "🚀",
    color: "#f97316"
  }
];

const learnCourseRecommendations = {
  "ai-fundamentals": { gradeRange: "Grades 3–5", difficulty: "Beginner" },
  "machine-learning": { gradeRange: "Grades 6–8", difficulty: "Intermediate" },
  "generative-ai": { gradeRange: "Grades 6–8", difficulty: "Intermediate" },
  "computer-vision": { gradeRange: "Grades 9–12", difficulty: "Advanced" },
  "coding-with-ai": { gradeRange: "Grades 6–8", difficulty: "Intermediate" },
  "ai-real-world": { gradeRange: "Grades 3–5", difficulty: "Beginner" },
  robotics: { gradeRange: "Grades 6–8", difficulty: "Intermediate" }
};

const additionalLearnCourses = [
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    tagline: "Help computers understand and work with human language.",
    category: "LANGUAGE AI",
    image: "assets/images/ai-tutor.jpeg",
    level: "Advanced",
    duration: "6 Weeks",
    lessonsCount: 14,
    color: "#0ea5e9",
    gradeRange: "Grades 9–12",
    difficulty: "Advanced",
    description: "Explore how AI reads, understands, and creates language in chatbots, translators, and voice assistants.",
    topics: [
      "How Computers Process Words",
      "Language Data and Tokens",
      "Build a Simple Text Classifier",
      "Explore Chatbots and Translation",
      "Create a Helpful Language Assistant"
    ]
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    tagline: "Discover how layered neural networks learn complex patterns.",
    category: "CORE AI",
    image: "assets/images/machine-learning.png",
    level: "Advanced",
    duration: "8 Weeks",
    lessonsCount: 16,
    color: "#8b5cf6",
    gradeRange: "Grades 9–12",
    difficulty: "Advanced",
    description: "Build on machine learning foundations to explore neural networks and the systems behind modern AI.",
    topics: [
      "Neurons and Neural Networks",
      "Layers, Weights, and Training",
      "Recognize Patterns with a Model",
      "Test Model Accuracy",
      "Deep Learning in Everyday Life"
    ]
  },
  {
    id: "ai-ethics-and-safety",
    title: "AI Ethics and Safety",
    tagline: "Learn to use AI thoughtfully, fairly, and safely.",
    category: "RESPONSIBLE AI",
    image: "assets/images/ai-real-world.png",
    level: "Intermediate",
    duration: "4 Weeks",
    lessonsCount: 10,
    color: "#10b981",
    gradeRange: "Grades 6–8",
    difficulty: "Intermediate",
    description: "Explore fairness, privacy, and responsible choices while building a safer future with AI.",
    topics: [
      "Spot Bias in AI Examples",
      "Protect Personal Information",
      "Check AI-Generated Answers",
      "Use AI and Creative Work Fairly",
      "Make a Responsible AI Pledge"
    ]
  }
];

const LearnAIPage = ({ setActivePage, activeGrade, setActiveGrade }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("ALL");
  const { Icons } = window.AIFutureLabComponents;
  const { courses, gradePathways } = window.AIFutureLabData;

  const categories = ["ALL", "FOUNDATIONS", "CORE AI", "CREATIVE TECH", "PERCEPTION", "PROGRAMMING", "IMPACT & SOCIETY", "ROBOTICS", "LANGUAGE AI", "RESPONSIBLE AI"];

  const courseOrder = [
    "ai-fundamentals",
    "machine-learning",
    "generative-ai",
    "computer-vision",
    "coding-with-ai",
    "ai-real-world",
    "robotics",
    "natural-language-processing",
    "deep-learning",
    "ai-ethics-and-safety"
  ];
  const allLearnCourses = [
    ...courses.map((course) => ({
      ...course,
      ...(learnCourseRecommendations[course.id] || {})
    })),
    ...additionalLearnCourses
  ].sort((a, b) => courseOrder.indexOf(a.id) - courseOrder.indexOf(b.id));
  const filteredCourses = selectedCategory === "ALL"
    ? allLearnCourses
    : allLearnCourses.filter((course) => course.category === selectedCategory);
  const courseRows = Array.from(
    { length: Math.ceil(filteredCourses.length / 4) },
    (_, rowIndex) => filteredCourses.slice(rowIndex * 4, (rowIndex + 1) * 4)
  );

  return (
    <div className="learn-page" style={{ padding: "40px 0 80px 0" }}>
      <div className="container">
        <section className="learn-pathways" aria-labelledby="learn-pathways-title">
          <div className="learn-pathways-heading">
            <span className="pill pill-cyan">Choose your adventure</span>
            <h2 id="learn-pathways-title" className="learn-section-title">Three paths. One amazing AI journey.</h2>
            <p>Start at the level that feels right for you, then keep exploring.</p>
          </div>
          <div className="learn-pathway-grid">
            {learnGradePaths.map((path) => (
              <button
                key={path.grade}
                type="button"
                className={`learn-pathway-card ${activeGrade === path.grade ? "active" : ""}`}
                style={{ "--learn-path-accent": path.color }}
                onClick={() => setActiveGrade(path.grade)}
                aria-pressed={activeGrade === path.grade}
              >
                <span className="learn-pathway-icon" aria-hidden="true">{path.icon}</span>
                <span className="learn-pathway-grade">{path.grade}</span>
                <span className="learn-pathway-title">{path.title}</span>
                <span className="learn-pathway-level">{path.level} level</span>
                <span className="learn-pathway-description">{path.description}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Banner */}
        <div style={{
          background: "linear-gradient(135deg, #130f3a 0%, #1e1754 100%)",
          color: "white",
          borderRadius: "var(--radius-xl)",
          padding: "44px",
          marginBottom: "36px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px"
        }}>
          <div>
            <span className="pill pill-cyan" style={{ marginBottom: "12px" }}>K-12 AI Curriculum</span>
            <h1 style={{ fontSize: "2.6rem", fontWeight: "800", marginBottom: "8px" }}>
              Explore the World of AI
            </h1>
            <p style={{ color: "#c7d2fe", fontSize: "1.05rem", maxWidth: "620px" }}>
              Master fundamental to advanced concepts in machine learning, neural networks, computer vision, and prompt engineering.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button className="btn-primary" onClick={() => setActivePage("tutorials")}>
              <Icons.Play size={18} fill="white" />
              <span>Jump to Tutorials</span>
            </button>
          </div>
        </div>

        {/* Grade Pathway Tabs */}
        <div style={{ background: "white", padding: "20px 24px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)", marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>Grade Level:</span>
            <div className="grade-selector">
              {["Grade 3–5", "Grade 6–8", "Grade 9–12"].map((g) => (
                <button
                  key={g}
                  className={`grade-btn ${activeGrade === g ? "active" : ""}`}
                  onClick={() => setActiveGrade(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: "flex", gap: "8px", overflowX: "auto", whiteSpace: "nowrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.78rem",
                  fontWeight: "700",
                  background: selectedCategory === cat ? "var(--primary)" : "#f1f5f9",
                  color: selectedCategory === cat ? "white" : "#64748b",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Detailed Grid */}
        <div className="learn-course-rows">
          {courseRows.map((row, rowIndex) => (
            <div className="learn-course-grid" key={`course-row-${rowIndex}`}>
              {row.map((course) => (
                <article className="learn-course-card" key={course.id}>
                  <div className="learn-course-image">
                    <img src={course.image} alt="" />
                    <span className="learn-course-category" style={{ "--learn-course-accent": course.color }}>{course.category}</span>
                  </div>
                  <div className="learn-course-content">
                    <div className="learn-course-badges" aria-label={`${course.gradeRange}, ${course.difficulty}`}>
                      <span className="grade-range-badge learn-grade-badge">{course.gradeRange}</span>
                      <span className={`learn-level-badge learn-level-${course.difficulty.toLowerCase()}`}>{course.difficulty}</span>
                    </div>
                    <div className="learn-course-meta">{course.duration} <span aria-hidden="true">•</span> {course.lessonsCount} Lessons</div>
                    <h3 className="learn-course-title">{course.title}</h3>
                    <p className="learn-course-description">{course.description}</p>
                    <div className="learn-course-syllabus">
                      <h4>What you'll explore</h4>
                      <ul>
                        {course.topics.map((topic, index) => (
                          <li key={`${course.id}-topic-${index}`}>
                            <span className="learn-topic-check" aria-hidden="true"><Icons.Check size={14} /></span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className="btn-primary learn-course-action"
                      onClick={() => setActivePage("tutorials")}
                    >
                      <span>Start Course Lessons</span>
                      <Icons.ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

window.AIFutureLabPages.LearnAIPage = LearnAIPage;
