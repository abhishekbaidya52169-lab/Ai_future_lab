// 12-Month Learning Journey Roadmap Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const RoadmapPage = ({ setActivePage, setSelectedProject }) => {
  const { Icons } = window.AIFutureLabComponents;
  const { roadmap, projects } = window.AIFutureLabData;

  const handleProjectClick = (projTitle) => {
    const found = projects.find(p => p.title.toLowerCase().includes(projTitle.toLowerCase()));
    if (found) {
      setSelectedProject(found);
      setActivePage("projects");
    } else {
      setActivePage("projects");
    }
  };

  return (
    <div className="roadmap-page" style={{ padding: "40px 0 80px 0" }}>
      <div className="container">
        {/* Banner */}
        <div style={{
          background: "linear-gradient(135deg, #1b124a 0%, #291b6b 100%)",
          color: "white",
          borderRadius: "var(--radius-xl)",
          padding: "44px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          alignItems: "center",
          gap: "36px",
          marginBottom: "36px",
          boxShadow: "0 15px 35px rgba(27, 18, 74, 0.3)"
        }}>
          <div>
            <span className="pill pill-cyan" style={{ marginBottom: "12px" }}>Complete School Progression</span>
            <h1 style={{ fontSize: "2.6rem", fontWeight: "800", marginBottom: "10px" }}>
              Your 12-Month AI Learning Journey
            </h1>
            <p style={{ color: "#c7d2fe", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "20px" }}>
              The proven <strong>Learn → Practice → Project → Challenge → Portfolio</strong> curriculum roadmap designed to transform school students into skilled young AI creators.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <span className="pill pill-amber">12 Milestone Months</span>
              <span className="pill pill-green">12 Hands-on Projects</span>
            </div>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
            <img src="assets/images/learning-roadmap.jpeg" alt="12 Month Learning Roadmap" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>

        {/* 12 Months Timeline Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {roadmap.map((m) => (
            <div
              key={m.month}
              style={{
                background: "white",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                border: "1.5px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ background: "var(--primary)", color: "white", padding: "4px 12px", borderRadius: "var(--radius-full)", fontSize: "0.78rem", fontWeight: "800" }}>
                  Month {m.month}
                </span>
                <span className="pill pill-purple" style={{ fontSize: "0.7rem" }}>{m.badge}</span>
              </div>

              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "6px" }}>
                {m.focus}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "16px", flexGrow: 1 }}>
                {m.desc}
              </p>

              <div style={{ background: "#f8fafc", padding: "12px 14px", borderRadius: "10px", border: "1px solid var(--border-light)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Hands-on Project:</div>
                  <strong style={{ fontSize: "0.88rem", color: "var(--primary)" }}>{m.project}</strong>
                </div>
                <button
                  style={{ background: "white", border: "1px solid var(--border-light)", padding: "6px 10px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", cursor: "pointer" }}
                  onClick={() => handleProjectClick(m.project)}
                >
                  View →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

window.AIFutureLabPages.RoadmapPage = RoadmapPage;
