// Tutorials Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const TutorialsPage = ({ setActivePage }) => {
  const [activeStepIndex, setActiveStepIndex] = React.useState(0);
  const [classifiedItems, setClassifiedItems] = React.useState({});

  const { Icons } = window.AIFutureLabComponents;
  const { tutorials } = window.AIFutureLabData;
  const currentTutorial = tutorials[0];
  const activeStep = currentTutorial.steps[activeStepIndex];

  const handleClassify = (itemId, userChoice) => {
    setClassifiedItems((prev) => ({
      ...prev,
      [itemId]: userChoice
    }));
  };

  return (
    <div className="tutorials-page">
      {/* Header Banner */}
      <section className="projects-header-banner" style={{ padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span className="pill pill-cyan">Step-by-Step Curriculum</span>
            <span style={{ color: "#94a3b8" }}>•</span>
            <span style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>Learn → Watch → Try → Build → Quiz</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <h1 style={{ fontSize: "2.4rem", fontWeight: "800", marginBottom: "6px" }}>
                AI Tutorials — <span className="gradient-text">Interactive Classroom</span>
              </h1>
              <p style={{ color: "var(--text-on-dark-muted)", fontSize: "1rem" }}>
                Tutorial {currentTutorial.number}: {currentTutorial.title}
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "6px 14px", borderRadius: "var(--radius-full)", color: "white", fontSize: "0.84rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <Icons.Clock size={16} /> {currentTutorial.duration}
              </span>
              <span className="pill pill-green" style={{ fontSize: "0.84rem" }}>
                {currentTutorial.badge}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Tutorial Grid */}
      <div className="container" style={{ margin: "40px auto 80px auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "32px", alignItems: "start" }}>
          {/* Left Step Navigator */}
          <div style={{ background: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)", padding: "24px", position: "sticky", top: "90px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "16px" }}>Tutorial Steps</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {currentTutorial.steps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    textAlign: "left",
                    fontSize: "0.88rem",
                    fontWeight: activeStepIndex === idx ? "700" : "500",
                    background: activeStepIndex === idx ? "var(--primary-light)" : "transparent",
                    color: activeStepIndex === idx ? "var(--primary)" : "var(--text-main)",
                    border: "none",
                    transition: "all 0.2s"
                  }}
                >
                  <span>{step.title}</span>
                  {activeStepIndex === idx && <Icons.ArrowRight size={16} />}
                </button>
              ))}
            </div>

            <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid var(--border-light)" }}>
              <button
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.85rem" }}
                onClick={() => setActivePage("quiz")}
              >
                <span>Take Lesson Quiz</span>
                <Icons.ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Main Lesson Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* 1. Step Content Card */}
            <div style={{ background: "white", borderRadius: "var(--radius-xl)", padding: "36px", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span className="pill pill-purple">Step {activeStepIndex + 1} of {currentTutorial.steps.length}</span>
                <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Core Concept</span>
              </div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "16px" }}>
                {activeStep.title}
              </h2>
              <p style={{ fontSize: "1.02rem", lineHeight: "1.7", color: "#334155", marginBottom: "24px" }}>
                {activeStep.content}
              </p>

              <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "0.88rem", fontWeight: "700", textTransform: "uppercase", color: "var(--primary)", marginBottom: "8px" }}>Key Takeaways</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {activeStep.keyPoints.map((pt, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "#475569" }}>
                      <span style={{ color: "#10b981" }}><Icons.Check size={16} /></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Video Player Showcase */}
            <div style={{ background: "white", borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ padding: "20px 28px", borderBottom: "1px solid var(--border-light)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Icons.Play size={18} color="var(--primary)" />
                  <strong style={{ fontSize: "1rem" }}>Watch: 5-Minute AI Introduction Video</strong>
                </div>
                <span style={{ fontSize: "0.8rem", color: "#64748b" }}>HD 4K Lesson</span>
              </div>

              <div style={{ width: "100%", aspectRatio: "16/9", background: "#0c0926" }}>
                <video
                  controls
                  preload="metadata"
                  poster={currentTutorial.thumbnail}
                  aria-label="AI introduction tutorial video"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                >
                  <source src="assets/images/tutorial-experiment.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </div>
            </div>

            {/* 3. Try It Yourself Interactive Activity */}
            <div style={{ background: "white", borderRadius: "var(--radius-xl)", padding: "36px", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span className="pill pill-green">Interactive Exercise</span>
                <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Hands-on Practice</span>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "6px" }}>
                {currentTutorial.interactiveActivity.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "20px" }}>
                {currentTutorial.interactiveActivity.instruction}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
                {currentTutorial.interactiveActivity.items.map((item) => {
                  const userChoice = classifiedItems[item.id];
                  const isAnswered = userChoice !== undefined;
                  const isCorrect = userChoice === item.isAI;

                  return (
                    <div
                      key={item.id}
                      style={{
                        background: isAnswered ? (isCorrect ? "rgba(16, 185, 129, 0.08)" : "rgba(239, 68, 68, 0.08)") : "#f8fafc",
                        border: `1.5px solid ${isAnswered ? (isCorrect ? "#10b981" : "#ef4444") : "var(--border-light)"}`,
                        borderRadius: "var(--radius-md)",
                        padding: "18px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                      }}
                    >
                      <strong style={{ fontSize: "0.95rem", color: "#1e1b4b" }}>{item.name}</strong>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => handleClassify(item.id, true)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "var(--radius-full)",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            background: userChoice === true ? "var(--primary)" : "white",
                            color: userChoice === true ? "white" : "var(--text-main)",
                            border: "1px solid var(--border-light)"
                          }}
                        >
                          Uses AI
                        </button>
                        <button
                          onClick={() => handleClassify(item.id, false)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "var(--radius-full)",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            background: userChoice === false ? "#475569" : "white",
                            color: userChoice === false ? "white" : "var(--text-main)",
                            border: "1px solid var(--border-light)"
                          }}
                        >
                          No AI
                        </button>
                      </div>
                      {isAnswered && (
                        <div style={{ fontSize: "0.78rem", color: isCorrect ? "#065f46" : "#991b1b", marginTop: "4px" }}>
                          {isCorrect ? "✓ Correct! " : "✗ Not quite. "} {item.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Mini Challenge Box */}
            <div style={{
              background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
              color: "white",
              borderRadius: "var(--radius-xl)",
              padding: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px"
            }}>
              <div>
                <span className="pill pill-amber" style={{ marginBottom: "10px" }}>Mini Challenge • {currentTutorial.miniChallenge.reward}</span>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "8px" }}>
                  {currentTutorial.miniChallenge.title}
                </h4>
                <p style={{ color: "#c7d2fe", fontSize: "0.92rem", maxWidth: "560px" }}>
                  {currentTutorial.miniChallenge.concept}
                </p>
              </div>
              <button className="btn-primary" style={{ background: "white", color: "#1e1b4b" }} onClick={() => setActivePage("projects")}>
                <span>Start Challenge</span>
                <Icons.ArrowRight size={16} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
              <button
                className="btn-outline-dark"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                style={{ opacity: activeStepIndex === 0 ? 0.5 : 1, cursor: activeStepIndex === 0 ? "not-allowed" : "pointer" }}
              >
                Previous Step
              </button>
              <button
                className="btn-primary"
                onClick={() => {
                  if (activeStepIndex < currentTutorial.steps.length - 1) {
                    setActiveStepIndex(activeStepIndex + 1);
                    window.scrollTo({ top: 120, behavior: "smooth" });
                  } else {
                    setActivePage("quiz");
                  }
                }}
              >
                <span>{activeStepIndex === currentTutorial.steps.length - 1 ? "Complete & Take Quiz" : "Next Step"}</span>
                <Icons.ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.AIFutureLabPages.TutorialsPage = TutorialsPage;
