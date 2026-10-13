// Student Dashboard Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const DashboardPage = ({ setActivePage, setSelectedProject }) => {
  const [activeTab, setActiveTab] = React.useState("overview");
  const { Icons } = window.AIFutureLabComponents;
  const { projects } = window.AIFutureLabData;

  const sidebarLinks = [
    { id: "overview", label: "Overview", icon: "Layout" },
    { id: "examination", label: "Examination & Quizzes", icon: "BookOpen" },
    { id: "attendance", label: "Attendance & Streaks", icon: "Flame" },
    { id: "results", label: "Results & Scores", icon: "Award" },
    { id: "scholarships", label: "Scholarships", icon: "Trophy" },
    { id: "internships", label: "Internships & Labs", icon: "Code" },
    { id: "academics", label: "Academics", icon: "GraduationCap" },
    { id: "notices", label: "Notices & Announcements", icon: "Sparkles" },
    { id: "my-projects", label: "My Projects", icon: "Code" },
    { id: "certificates", label: "Certificates", icon: "Award" }
  ];

  return (
    <div className="dashboard-page" style={{ padding: "40px 0 80px 0" }}>
      <div className="container">
        {/* Top Profile Banner matching design */}
        <div className="dash-profile-card">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ width: "78px", height: "78px", borderRadius: "50%", border: "3px solid #00f0ff", overflow: "hidden", background: "#312e81" }}>
              <img src="assets/images/student-dashboard-avatar.jpeg" alt="Rahul Sharma" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h1 style={{ fontSize: "1.8rem", fontWeight: "800" }}>Rahul Sharma</h1>
                <span className="pill pill-green" style={{ fontSize: "0.72rem" }}>Active Learner</span>
              </div>
              <p style={{ color: "#cbd5e1", fontSize: "0.88rem", marginTop: "2px" }}>
                Roll No: 12345 • Grade 10 / Young AI Innovator Program
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="dash-stats-bar">
            <div className="dash-stat-item">
              <div className="dash-stat-val" style={{ color: "#00f0ff" }}>8.24</div>
              <div className="dash-stat-lbl">CGPA</div>
            </div>
            <div className="dash-stat-item">
              <div className="dash-stat-val" style={{ color: "#a855f7" }}>8.12</div>
              <div className="dash-stat-lbl">SGPA</div>
            </div>
            <div className="dash-stat-item">
              <div className="dash-stat-val" style={{ color: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                <Icons.Flame size={18} /> 12
              </div>
              <div className="dash-stat-lbl">Streak Days</div>
            </div>
            <div className="dash-stat-item">
              <div className="dash-stat-val" style={{ color: "#10b981" }}>1,240</div>
              <div className="dash-stat-lbl">XP Points</div>
            </div>
          </div>
        </div>

        {/* Dashboard 2-Column Grid */}
        <div className="dashboard-grid">
          {/* Left Navigation Sidebar */}
          <div className="dash-sidebar">
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {sidebarLinks.map((item) => (
                <button
                  key={item.id}
                  className={`dash-menu-item ${activeTab === item.id ? "active" : ""}`}
                  onClick={() => {
                    if (item.id === "certificates") setActivePage("certificates");
                    else if (item.id === "examination") setActivePage("quiz");
                    else setActiveTab(item.id);
                  }}
                >
                  <Icons.Star size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Main Dashboard Widgets */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* 1. Learning Progress (Your AI Journey) */}
            <div style={{ background: "white", padding: "28px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#1e1b4b" }}>Your AI Journey</h3>
                <span style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: "600", cursor: "pointer" }} onClick={() => setActivePage("learn")}>
                  View All Curricula →
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
                {[
                  { name: "AI Fundamentals", pct: 100, done: true, color: "#10b981" },
                  { name: "Machine Learning", pct: 100, done: true, color: "#10b981" },
                  { name: "Generative AI", pct: 70, done: false, color: "#8b5cf6" },
                  { name: "Python for AI", pct: 40, done: false, color: "#3b82f6" },
                  { name: "AI Projects", pct: "2/5", done: false, color: "#f59e0b" }
                ].map((item, idx) => (
                  <div key={idx} style={{ background: "#f8fafc", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <span style={{ fontSize: "0.82rem", fontWeight: "700", color: "#475569" }}>{item.name}</span>
                      {item.done ? (
                        <span style={{ color: "#10b981" }}><Icons.Check size={16} /></span>
                      ) : (
                        <span style={{ fontSize: "0.78rem", fontWeight: "700", color: item.color }}>{typeof item.pct === 'number' ? `${item.pct}%` : item.pct}</span>
                      )}
                    </div>
                    <div className="progress-container" style={{ margin: "6px 0 0 0", height: "6px" }}>
                      <div className="progress-fill" style={{ width: typeof item.pct === 'number' ? `${item.pct}%` : '40%', background: item.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Continue Learning Card */}
            <div style={{ background: "white", padding: "28px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "16px" }}>Continue Learning</h3>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)", padding: "20px 24px", borderRadius: "var(--radius-lg)", border: "1px solid #c7d2fe", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                    <Icons.Play size={24} fill="white" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#1e1b4b" }}>Introduction to Machine Learning</h4>
                    <p style={{ fontSize: "0.85rem", color: "#475569" }}>Chapter 4: Evaluating Accuracy and Minimizing Loss</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" }}>
                      <div className="progress-container" style={{ width: "160px", height: "6px", margin: 0 }}>
                        <div className="progress-fill" style={{ width: "65%" }}></div>
                      </div>
                      <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)" }}>65% Complete</span>
                    </div>
                  </div>
                </div>
                <button className="btn-primary" onClick={() => setActivePage("tutorials")}>
                  <span>Resume Lesson</span>
                  <Icons.ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* 3. My Projects & Achievements Row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {/* My Projects */}
              <div style={{ background: "white", padding: "24px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#1e1b4b" }}>My Active Projects</h4>
                  <span className="pill pill-blue" style={{ fontSize: "0.7rem", cursor: "pointer" }} onClick={() => setActivePage("projects")}>View All</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { name: "AI Story Generator", status: "In Progress", color: "#3b82f6" },
                    { name: "School Chatbot Assistant", status: "Testing API", color: "#8b5cf6" },
                    { name: "Waste Classifier Kiosk", status: "Planning", color: "#10b981" }
                  ].map((p, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", background: "#f8fafc", borderRadius: "10px" }}>
                      <span style={{ fontSize: "0.88rem", fontWeight: "600", color: "#1e1b4b" }}>{p.name}</span>
                      <span style={{ fontSize: "0.75rem", fontWeight: "700", color: p.color, background: "white", padding: "4px 8px", borderRadius: "6px", border: "1px solid var(--border-light)" }}>
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Badges */}
              <div style={{ background: "white", padding: "24px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#1e1b4b" }}>Recent Badges</h4>
                  <span className="pill pill-amber" style={{ fontSize: "0.7rem" }}>3 Earned</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { name: "AI Explorer", date: "Earned 10 days ago", icon: "Compass", color: "#3b82f6" },
                    { name: "Python Beginner", date: "Earned 15 days ago", icon: "Code", color: "#10b981" },
                    { name: "Project Builder", date: "Earned 20 days ago", icon: "Cpu", color: "#8b5cf6" }
                  ].map((b, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: "#f8fafc", borderRadius: "10px" }}>
                      <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "white", border: `2px solid ${b.color}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icons.Trophy size={16} color={b.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "#1e1b4b" }}>{b.name}</div>
                        <div style={{ fontSize: "0.72rem", color: "#64748b" }}>{b.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Certificate CTA */}
            <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", color: "white", padding: "24px 32px", borderRadius: "var(--radius-xl)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "800", marginBottom: "4px" }}>My Certificates of Completion</h4>
                <p style={{ color: "#c7d2fe", fontSize: "0.88rem" }}>You have unlocked the official AI Foundations for Young Innovators credential!</p>
              </div>
              <button className="btn-primary" style={{ background: "white", color: "#1e1b4b" }} onClick={() => setActivePage("certificates")}>
                <Icons.Award size={18} color="#4f46e5" />
                <span>Open Certificate Arena</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.AIFutureLabPages.DashboardPage = DashboardPage;
