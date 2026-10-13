// Home Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const HomePage = ({ setActivePage, activeGrade, setActiveGrade, setSelectedProject }) => {
  const { Icons } = window.AIFutureLabComponents;
  const { courses, gradePathways } = window.AIFutureLabData;

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <video
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster=""
          aria-hidden="true"
          tabIndex="-1"
        >
          <source src="/assets/images/home-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" aria-hidden="true"></div>
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-badge-top">
              <Icons.Sparkles size={16} color="#00f0ff" />
              <span>Your AI adventure starts here!</span>
            </div>
            <h1 className="hero-title">
              Learn AI. <br />
              <span className="gradient-text">Build Projects.</span> <br />
              Create the Future.
            </h1>
            <p className="hero-subtitle">
              Play with ideas, try hands-on AI experiments, and build awesome projects. Your next big invention can start right here!
            </p>

            <div className="hero-cta-group">
              <button className="btn-primary" onClick={() => setActivePage("learn")}>
                <span>Start Learning</span>
                <Icons.ArrowRight size={18} />
              </button>
              <button className="btn-outline-white" onClick={() => setActivePage("projects")}>
                <Icons.Code size={18} />
                <span>Explore Projects</span>
              </button>
            </div>

            <div className="hero-meta-roles">
              <span>Student/Parent</span>
              <span className="hero-meta-dot"></span>
              <span>Schools</span>
              <span className="hero-meta-dot"></span>
              <span>Teachers</span>
              <span className="hero-meta-dot"></span>
              <span>Parents</span>
            </div>
            <div className="hero-floating-stat">
              <div className="stat-icon-wrap">
                <Icons.Trophy size={22} />
              </div>
              <div>
                <div style={{ color: "white", fontWeight: "800", fontSize: "1.2rem" }}>50,000+</div>
                <div style={{ color: "#94a3b8", fontSize: "0.8rem", fontWeight: "600" }}>Active School Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Students Will Learn (6 Core Categories) */}
      <section className="section-padding home-learning-section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">What Students Will Learn</span>
            <h2 className="section-title">Explore the World of AI</h2>
            <p className="section-subtitle">
              Structured across 6 comprehensive learning categories designed to take young minds from curiosity to mastery.
            </p>
          </div>

          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card" onClick={() => setActivePage("learn")}>
                <div className="card-img-wrap">
                  <img src={course.image} alt={course.title} />
                  <span className="card-tag-floating">{course.category}</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{course.title}</h3>
                  <p className="card-desc">{course.tagline}</p>
                  <div className="card-meta-row">
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Icons.Clock size={16} color="var(--primary)" />
                      {course.duration}
                    </span>
                    <span style={{ color: "var(--primary)", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }}>
                      Explore <Icons.ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Learning by Grade (Choose Your AI Journey) */}
      <section className="section-padding home-learning-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Tailored Pathways</span>
            <h2 className="section-title">Choose Your AI Journey</h2>
            <p className="section-subtitle">
              Age-appropriate curriculums aligned with Code.org standards to ensure every student learns at the right pace.
            </p>
          </div>

          <div className="pathway-grid">
            {gradePathways.map((path) => (
              <div
                key={path.grade}
                className="pathway-card"
                style={{ borderColor: activeGrade === path.grade ? "var(--primary)" : "var(--border-light)" }}
              >
                <div className="card-img-wrap" style={{ aspectRatio: "4/3" }}>
                  <img src={path.image} alt={path.title} />
                  <span className="card-tag-floating" style={{ background: path.accentColor }}>{path.grade}</span>
                </div>
                <div className="pathway-header">
                  <h3 className="pathway-title">{path.title}</h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginTop: "4px" }}>{path.subtitle}</p>
                </div>

                <ul className="pathway-topics-list">
                  {path.topics.slice(0, 5).map((topic, i) => (
                    <li key={i} className="pathway-topic-item">
                      <span className="pathway-topic-dot" style={{ background: path.accentColor }}></span>
                      <span>{topic}</span>
                    </li>
                  ))}
                  {path.topics.length > 5 && (
                    <li style={{ fontSize: "0.82rem", color: "var(--primary)", fontWeight: "600", paddingLeft: "16px" }}>
                      + {path.topics.length - 5} more topics
                    </li>
                  )}
                </ul>

                <div style={{ padding: "0 24px 24px 24px" }}>
                  <button
                    className="btn-outline-dark"
                    style={{ width: "100%", justifyContent: "center" }}
                    onClick={() => { setActiveGrade(path.grade); setActivePage("learn"); }}
                  >
                    <span>Explore Pathway</span>
                    <Icons.ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Differentiator Section: Don't Just Learn AI. Build with AI */}
      <section className="container">
        <div className="diff-section">
          <div className="diff-grid">
            <div>
              <span className="pill pill-cyan" style={{ marginBottom: "16px" }}>The Biggest Differentiator</span>
              <h2 style={{ fontSize: "2.4rem", fontWeight: "800", lineHeight: "1.2", marginBottom: "16px" }}>
                Don't Just Learn AI. <br />
                <span className="gradient-text">Build with AI.</span>
              </h2>
              <p style={{ color: "var(--text-on-dark-muted)", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "20px" }}>
                Instead of passive video lectures and dry theory, AI Future Lab turns school students into active creators who solve real community problems.
              </p>

              <div className="steps-flow">
                <span className="step-chip">Learn</span>
                <span className="step-arrow">→</span>
                <span className="step-chip">Experiment</span>
                <span className="step-arrow">→</span>
                <span className="step-chip" style={{ background: "rgba(0, 240, 255, 0.2)" }}>Build</span>
                <span className="step-arrow">→</span>
                <span className="step-chip">Solve a Problem</span>
                <span className="step-arrow">→</span>
                <span className="step-chip">Present</span>
                <span className="step-arrow">→</span>
                <span className="step-chip" style={{ background: "rgba(245, 158, 11, 0.2)" }}>Certificate</span>
              </div>

              <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
                <button className="btn-primary" onClick={() => setActivePage("projects")}>
                  <span>Browse 10+ School Projects</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.2)", boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)" }}>
              <img src="assets/images/build-with-ai-banner.jpeg" alt="Build with AI Banner" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. 12-Month Learning Journey Roadmap Teaser */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="section-label">Year-Round Curriculum</span>
              <h2 className="section-title" style={{ marginBottom: "6px" }}>Your 12-Month Learning Journey</h2>
              <p className="section-subtitle">
                A progressive monthly path from "What is AI?" to building capstone solutions.
              </p>
            </div>
            <button className="btn-outline-dark" onClick={() => setActivePage("roadmap")}>
              <span>View Full 12-Month Roadmap</span>
              <Icons.ArrowRight size={16} />
            </button>
          </div>

          <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1.5px solid var(--border-light)", boxShadow: "var(--shadow-md)", cursor: "pointer" }} onClick={() => setActivePage("roadmap")}>
            <img src="assets/images/learning-roadmap.jpeg" alt="12 Month Learning Roadmap" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </section>
    </div>
  );
};

window.AIFutureLabPages.HomePage = HomePage;
