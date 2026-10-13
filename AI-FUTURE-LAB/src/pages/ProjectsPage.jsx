// Projects Hub Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const ProjectsPage = ({ selectedProject, setSelectedProject }) => {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [search, setSearch] = React.useState("");
  const [ideaModalOpen, setIdeaModalOpen] = React.useState(false);
  const [submittedIdea, setSubmittedIdea] = React.useState(false);

  // Live Simulator state for modal
  const [simChatInput, setSimChatInput] = React.useState("");
  const [simChatMessages, setSimChatMessages] = React.useState([]);
  const [simClassifierResult, setSimClassifierResult] = React.useState(null);
  const [simStoryInput, setSimStoryInput] = React.useState("A friendly robot visits a magical school on Mars");
  const [simStoryOutput, setSimStoryOutput] = React.useState("");

  const { Icons } = window.AIFutureLabComponents;
  const { projects, projectLevels } = window.AIFutureLabData;
  const projectGradeRanges = {
    Beginner: "Grades 3–5",
    Intermediate: "Grades 6–8",
    Advanced: "Grades 9–12"
  };

  const filteredProjects = projects.filter((proj) => {
    const matchesFilter = activeFilter === "All" || proj.level === activeFilter;
    const matchesSearch = proj.title.toLowerCase().includes(search.toLowerCase()) ||
                          proj.category.toLowerCase().includes(search.toLowerCase()) ||
                          proj.tagline.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleOpenProject = (proj) => {
    setSelectedProject(proj);
    setSimChatMessages([
      { sender: "bot", text: proj.defaultDemoReplies ? proj.defaultDemoReplies["default"] : "Hello! How can I assist you with your project today?" }
    ]);
    setSimClassifierResult(null);
    setSimStoryOutput("");
  };

  const handleSimChatSubmit = () => {
    if (!simChatInput.trim() || !selectedProject) return;
    const text = simChatInput.trim();
    const newMsgs = [...simChatMessages, { sender: "user", text }];
    setSimChatMessages(newMsgs);
    setSimChatInput("");

    setTimeout(() => {
      let reply = "I understand your query! Let me check the school database...";
      const lower = text.toLowerCase();
      if (selectedProject.defaultDemoReplies) {
        if (lower.includes("time") || lower.includes("schedule")) reply = selectedProject.defaultDemoReplies["timetable"];
        else if (lower.includes("homework") || lower.includes("assignment")) reply = selectedProject.defaultDemoReplies["homework"];
        else if (lower.includes("club") || lower.includes("sport")) reply = selectedProject.defaultDemoReplies["clubs"];
        else if (lower.includes("exam") || lower.includes("test")) reply = selectedProject.defaultDemoReplies["exam"];
        else reply = "Great question! That information is updated on the school board weekly.";
      }
      setSimChatMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 500);
  };

  const handleSimClassify = (item) => {
    if (item === "dog") setSimClassifierResult({ label: "Golden Retriever Dog", confidence: "98.4%", icon: "🐶", isCorrect: true });
    else if (item === "cat") setSimClassifierResult({ label: "Tabby House Cat", confidence: "97.1%", icon: "🐱", isCorrect: true });
    else if (item === "plant") setSimClassifierResult({ label: "Green Succulent Plant", confidence: "95.8%", icon: "🪴", isCorrect: true });
  };

  const handleGenerateStory = () => {
    setSimStoryOutput("Chapter 1: The Cosmic Bell\n" + simStoryInput + ". Byte the robot floated through the zero-gravity courtyard, scanning the holographic schedule. 'Welcome students!' beamed Byte, 'Today we build a quantum stargate!' The students cheered as starlight sparkled across their floating laptops...");
  };

  return (
    <div className="projects-page">
      {/* Header Banner */}
      <section className="projects-header-banner">
        <div className="container">
          <span className="hero-badge-top" style={{ marginBottom: "14px" }}>
            <Icons.Code size={16} color="#00f0ff" />
            <span>Hands-on Project Portfolio</span>
          </span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "800", marginBottom: "12px" }}>
            AI Projects — <span className="gradient-text">Don't Just Learn AI. Build with AI.</span>
          </h1>
          <p style={{ color: "var(--text-on-dark-muted)", fontSize: "1.1rem", maxWidth: "680px" }}>
            Build real-world projects, solve authentic school challenges, and create an impressive digital portfolio for high school and college.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="container">
        <div className="filter-bar">
          <div className="filter-tabs">
            {["All", "Beginner", "Intermediate", "Advanced"].map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="search-input-wrap">
            <Icons.Search size={18} color="#94a3b8" />
            <input
              type="text"
              placeholder="Search projects (e.g. chatbot, vision)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="container" style={{ marginBottom: "70px" }}>
        <div className="courses-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="course-card" onClick={() => handleOpenProject(proj)}>
              <div className="card-img-wrap">
                <img src={proj.image} alt={proj.title} />
                <span className="card-tag-floating" style={{ background: proj.level === "Beginner" ? "#10b981" : proj.level === "Intermediate" ? "#3b82f6" : "#f59e0b" }}>
                  {proj.level}
                </span>
              </div>
              <div className="card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                    <span className="pill pill-purple" style={{ fontSize: "0.72rem" }}>{proj.category}</span>
                    <span className="grade-range-badge project-grade-badge">{projectGradeRanges[proj.level]}</span>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Icons.Clock size={14} /> {proj.duration}
                  </span>
                </div>
                <h3 className="card-title">{proj.title}</h3>
                <p className="card-desc">{proj.tagline}</p>
                <div className="card-meta-row">
                  <span style={{ fontSize: "0.78rem", color: "#475569", fontWeight: "600" }}>
                    {proj.technology}
                  </span>
                  <button className="btn-primary" style={{ padding: "6px 16px", fontSize: "0.82rem" }}>
                    View & Build
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Have a Project Idea Banner */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%)",
          color: "white",
          borderRadius: "var(--radius-xl)",
          padding: "44px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
          boxShadow: "0 15px 35px rgba(30, 27, 75, 0.3)"
        }}>
          <div>
            <span className="pill pill-cyan" style={{ marginBottom: "12px" }}>Student Innovation</span>
            <h3 style={{ fontSize: "1.9rem", fontWeight: "800", marginBottom: "8px" }}>Have a Unique Project Idea?</h3>
            <p style={{ color: "#c7d2fe", maxWidth: "560px", fontSize: "0.98rem" }}>
              Turn your personal idea into a real AI project with our step-by-step guides, mentor review, and starter code templates.
            </p>
          </div>
          <button className="btn-primary" style={{ background: "white", color: "#1e1b4b" }} onClick={() => setIdeaModalOpen(true)}>
            <Icons.Sparkles size={18} color="#4f46e5" />
            <span style={{ fontWeight: "700" }}>Suggest a Project</span>
          </button>
        </div>
      </section>

      {/* Project Levels Progression */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Clear Progression</span>
            <h2 className="section-title">Project Levels</h2>
            <p className="section-subtitle">
              From beginner no-code blocks to building full-stack cloud AI applications.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {projectLevels.map((lvl, index) => (
              <div key={index} style={{
                background: "#f8fafc",
                borderRadius: "var(--radius-lg)",
                padding: "28px",
                border: "1.5px solid var(--border-light)",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{
                  display: "inline-block",
                  background: lvl.color,
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.78rem",
                  fontWeight: "700",
                  marginBottom: "14px",
                  width: "fit-content"
                }}>
                  {lvl.level}
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "6px" }}>{lvl.tag}</h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "16px", flexGrow: 1 }}>{lvl.description}</p>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>Examples:</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                    {lvl.examples.map((ex, i) => (
                      <span key={i} style={{ background: "white", border: "1px solid var(--border-light)", padding: "3px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: "500" }}>
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal with LIVE SIMULATOR */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="pill pill-blue">{selectedProject.level}</span>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#1e1b4b" }}>{selectedProject.title}</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <Icons.X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px", marginBottom: "28px" }}>
                <div>
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", color: "var(--primary)", fontWeight: "700", marginBottom: "6px" }}>The Problem</h4>
                    <p style={{ color: "#334155", fontSize: "0.95rem" }}>{selectedProject.problem}</p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", color: "#10b981", fontWeight: "700", marginBottom: "6px" }}>Our Solution</h4>
                    <p style={{ color: "#334155", fontSize: "0.95rem" }}>{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", color: "#8b5cf6", fontWeight: "700", marginBottom: "8px" }}>What Students Learn</h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {selectedProject.skillsLearned.map((skill, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#475569" }}>
                          <span style={{ color: "#10b981" }}><Icons.Check size={16} /></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Meta Column */}
                <div style={{ background: "#f8fafc", padding: "24px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)" }}>
                  <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", borderRadius: "12px", marginBottom: "16px" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.88rem" }}>
                    <div>
                      <span style={{ color: "#64748b", display: "block", fontSize: "0.78rem" }}>Technology:</span>
                      <strong>{selectedProject.technology}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#64748b", display: "block", fontSize: "0.78rem" }}>Duration:</span>
                      <strong>{selectedProject.duration}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#64748b", display: "block", fontSize: "0.78rem" }}>Final Output:</span>
                      <p style={{ color: "#334155", marginTop: "2px" }}>{selectedProject.finalOutput}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LIVE INTERACTIVE SIMULATOR */}
              <div style={{
                background: "linear-gradient(135deg, #0f0c24 0%, #1e1b4b 100%)",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                color: "white"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Icons.Sparkles size={18} color="#00f0ff" />
                    <h4 style={{ fontSize: "1.05rem", fontWeight: "700" }}>Interactive Live Simulator</h4>
                  </div>
                  <span className="pill pill-cyan" style={{ fontSize: "0.72rem" }}>Test Prototype</span>
                </div>

                {/* Chat Simulator */}
                {selectedProject.demoType === "chat" && (
                  <div>
                    <div style={{ height: "180px", overflowY: "auto", background: "rgba(255, 255, 255, 0.05)", borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
                      {simChatMessages.map((m, i) => (
                        <div key={i} style={{
                          alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                          background: m.sender === "user" ? "var(--primary)" : "rgba(255, 255, 255, 0.15)",
                          padding: "8px 12px",
                          borderRadius: "10px",
                          fontSize: "0.85rem",
                          maxWidth: "80%"
                        }}>
                          {m.text}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <input
                        type="text"
                        placeholder="Type 'timetable', 'homework', 'clubs'..."
                        value={simChatInput}
                        onChange={(e) => setSimChatInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSimChatSubmit()}
                        style={{ flexGrow: 1, padding: "8px 14px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.2)", background: "rgba(255, 255, 255, 0.1)", color: "white", outline: "none" }}
                      />
                      <button className="btn-primary" style={{ padding: "8px 18px" }} onClick={handleSimChatSubmit}>
                        Ask Bot
                      </button>
                    </div>
                  </div>
                )}

                {/* Classifier Simulator */}
                {selectedProject.demoType === "classifier" && (
                  <div>
                    <p style={{ fontSize: "0.88rem", color: "#cbd5e1", marginBottom: "12px" }}>Select a sample input to test neural network classification:</p>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
                      <button className="btn-outline-white" onClick={() => handleSimClassify("dog")}>🐶 Golden Dog</button>
                      <button className="btn-outline-white" onClick={() => handleSimClassify("cat")}>🐱 Fluffy Cat</button>
                      <button className="btn-outline-white" onClick={() => handleSimClassify("plant")}>🪴 Potted Plant</button>
                    </div>
                    {simClassifierResult && (
                      <div style={{ background: "rgba(16, 185, 129, 0.2)", border: "1px solid #10b981", borderRadius: "8px", padding: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "2rem" }}>{simClassifierResult.icon}</span>
                        <div>
                          <strong>Detected: {simClassifierResult.label}</strong>
                          <div style={{ fontSize: "0.8rem", color: "#a7f3d0" }}>Confidence: {simClassifierResult.confidence}</div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Default Simulator */}
                {(selectedProject.demoType !== "chat" && selectedProject.demoType !== "classifier") && (
                  <div>
                    <p style={{ fontSize: "0.88rem", color: "#cbd5e1", marginBottom: "10px" }}>Enter prompt to run the project logic:</p>
                    <input
                      type="text"
                      value={simStoryInput}
                      onChange={(e) => setSimStoryInput(e.target.value)}
                      style={{ width: "100%", padding: "8px 14px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.2)", background: "rgba(255, 255, 255, 0.1)", color: "white", outline: "none", marginBottom: "10px" }}
                    />
                    <button className="btn-primary" style={{ padding: "8px 18px", marginBottom: "10px" }} onClick={handleGenerateStory}>
                      Generate Output
                    </button>
                    {simStoryOutput && (
                      <div style={{ background: "rgba(255, 255, 255, 0.08)", borderRadius: "8px", padding: "12px", fontSize: "0.85rem", lineHeight: "1.5" }}>
                        {simStoryOutput}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Suggest an Idea Modal */}
      {ideaModalOpen && (
        <div className="modal-overlay" onClick={() => setIdeaModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "560px" }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontSize: "1.25rem", fontWeight: "800" }}>Suggest an AI Project</h3>
              <button className="modal-close-btn" onClick={() => setIdeaModalOpen(false)}><Icons.X size={18} /></button>
            </div>
            <div className="modal-body">
              {submittedIdea ? (
                <div style={{ textAlign: "center", padding: "30px 0" }}>
                  <Icons.CheckCircle size={48} color="#10b981" />
                  <h4 style={{ fontSize: "1.3rem", fontWeight: "700", marginTop: "16px", marginBottom: "8px" }}>Project Idea Submitted!</h4>
                  <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Our mentors will review your idea and add starter code templates to the lab.</p>
                  <button className="btn-primary" style={{ marginTop: "20px" }} onClick={() => { setSubmittedIdea(false); setIdeaModalOpen(false); }}>Close</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmittedIdea(true); }}>
                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "6px" }}>Project Title</label>
                    <input type="text" placeholder="e.g., AI Smart Cafeteria Menu" required style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--border-light)" }} />
                  </div>
                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "6px" }}>Problem it Solves</label>
                    <textarea rows="3" placeholder="Explain what problem your school or friends have..." required style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--border-light)", fontFamily: "inherit" }}></textarea>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "6px" }}>Grade Level</label>
                    <select style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--border-light)" }}>
                      <option>Grade 3–5 (Explorer)</option>
                      <option>Grade 6–8 (Creator)</option>
                      <option>Grade 9–12 (Innovator)</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Submit Idea for Review</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

window.AIFutureLabPages.ProjectsPage = ProjectsPage;
