// AI for Teachers Portal Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const TeachersPage = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [notification, setNotification] = React.useState("");
  const { Icons } = window.AIFutureLabComponents;

  const teacherNav = [
    { id: "dashboard", label: "Dashboard" },
    { id: "lessons", label: "Lesson Plans" },
    { id: "activities", label: "AI Activities" },
    { id: "guides", label: "Project Guides" },
    { id: "worksheets", label: "Worksheets" },
    { id: "quizzes", label: "Quizzes & Tests" },
    { id: "rubrics", label: "Assessment Rubrics" },
    { id: "progress", label: "Student Progress" },
    { id: "guidelines", label: "AI Classroom Guidelines" }
  ];

  const handleActionClick = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 3500);
  };

  return (
    <div className="teachers-page" style={{ padding: "40px 0 80px 0" }}>
      <div className="container">
        {/* Notification Toast */}
        {notification && (
          <div style={{ background: "#10b981", color: "white", padding: "12px 24px", borderRadius: "10px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "var(--shadow-md)" }}>
            <Icons.CheckCircle size={20} />
            <strong>{notification}</strong>
          </div>
        )}

        {/* Teacher Profile Banner */}
        <div style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
          color: "white",
          borderRadius: "var(--radius-xl)",
          padding: "36px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          alignItems: "center",
          gap: "32px",
          marginBottom: "32px",
          boxShadow: "0 15px 35px rgba(30, 27, 75, 0.25)"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <span className="pill pill-cyan">Educator Portal</span>
              <span style={{ color: "#a5b4fc", fontSize: "0.85rem" }}>School Curriculum Hub</span>
            </div>
            <h1 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "8px" }}>
              AI for Teachers — Plan, Teach & Inspire
            </h1>
            <p style={{ color: "#c7d2fe", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
              Access structured lesson plans, standards-aligned assessment rubrics, hands-on classroom activities, and monitor your students' coding progress.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#4f46e5", border: "2px solid #00f0ff", overflow: "hidden" }}>
                <img src="assets/images/teacher-portal.jpeg" alt="Ms. Priya Sharma" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <strong style={{ fontSize: "1rem" }}>Ms. Priya Sharma</strong>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Computer Science Lead • Teacher ID: T1236</div>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
            <img src="assets/images/teacher-portal.jpeg" alt="Teacher Portal Art" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>

        {/* 5 KPI Stat Cards matching screenshot */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px", marginBottom: "32px" }}>
          {[
            { label: "Classes", val: "6", color: "#4f46e5", icon: "BookOpen" },
            { label: "Students", val: "180+", color: "#06b6d4", icon: "Users" },
            { label: "Assignments", val: "12", color: "#8b5cf6", icon: "Code" },
            { label: "Projects Evaluated", val: "28", color: "#10b981", icon: "CheckCircle" },
            { label: "Avg Quiz Score", val: "85%", color: "#f59e0b", icon: "Trophy" }
          ].map((stat, i) => (
            <div key={i} style={{ background: "white", padding: "20px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>{stat.label}</span>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: stat.color, marginTop: "4px" }}>{stat.val}</div>
            </div>
          ))}
        </div>

        {/* 2-Column Educator Layout */}
        <div className="dashboard-grid">
          {/* Left Teacher Sidebar */}
          <div className="dash-sidebar">
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "#64748b", padding: "8px 16px", fontWeight: "700" }}>Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {teacherNav.map((item) => (
                <button
                  key={item.id}
                  className={`dash-menu-item ${activeTab === item.id ? "active" : ""}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icons.Star size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Main Teacher Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* Quick Actions Row */}
            <div style={{ background: "white", padding: "24px 28px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "14px" }}>Quick Classroom Actions</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <button className="btn-primary" style={{ fontSize: "0.85rem" }} onClick={() => handleActionClick("Assignment modal created!")}>
                  <Icons.Code size={16} /> Create Assignment
                </button>
                <button className="btn-outline-dark" style={{ fontSize: "0.85rem" }} onClick={() => handleActionClick("Curriculum material uploaded!")}>
                  <Icons.BookOpen size={16} /> Add Material
                </button>
                <button className="btn-outline-dark" style={{ fontSize: "0.85rem" }} onClick={() => handleActionClick("Exported student progress report!")}>
                  <Icons.BarChart size={16} /> Export Progress
                </button>
                <button className="btn-outline-dark" style={{ fontSize: "0.85rem" }} onClick={() => handleActionClick("Downloaded classroom resource bundle!")}>
                  <Icons.Download size={16} /> Download Resources
                </button>
              </div>
            </div>

            {/* Upcoming Classes Schedule */}
            <div style={{ background: "white", padding: "24px 28px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "16px" }}>Upcoming AI Classes</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
                {[
                  { time: "09:00 AM", title: "AI Fundamentals", class: "Class 8A", room: "Lab 2" },
                  { time: "11:30 AM", title: "Machine Learning", class: "Class 9B", room: "Lab 1" },
                  { time: "02:00 PM", title: "Project Workshop", class: "Class 10", room: "Makerspace" }
                ].map((c, i) => (
                  <div key={i} style={{ background: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
                    <span style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--primary)" }}>{c.time}</span>
                    <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#1e1b4b", marginTop: "2px" }}>{c.title}</h4>
                    <div style={{ fontSize: "0.82rem", color: "#64748b", marginTop: "4px" }}>{c.class} • {c.room}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Student Activity Table matching design */}
            <div style={{ background: "white", padding: "24px 28px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)", overflowX: "auto" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "16px" }}>Recent Student Activity</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border-light)", textAlign: "left", color: "#64748b" }}>
                    <th style={{ padding: "10px 12px" }}>Student</th>
                    <th style={{ padding: "10px 12px" }}>Class</th>
                    <th style={{ padding: "10px 12px" }}>Course</th>
                    <th style={{ padding: "10px 12px" }}>Progress</th>
                    <th style={{ padding: "10px 12px" }}>Quiz Score</th>
                    <th style={{ padding: "10px 12px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Ashish Singh", class: "9B", course: "AI Fundamentals", progress: 100, score: "9/10", status: "Done" },
                    { name: "Diya Patel", class: "9B", course: "Machine Learning", progress: 80, score: "8/10", status: "Review" },
                    { name: "Rohan Kumar", class: "10A", course: "Generative AI", progress: 60, score: "7/10", status: "Review" },
                    { name: "Sneha Verma", class: "8A", course: "Python for AI", progress: 95, score: "10/10", status: "Done" }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border-light)" }}>
                      <td style={{ padding: "12px", fontWeight: "700", color: "#1e1b4b" }}>{row.name}</td>
                      <td style={{ padding: "12px", color: "#64748b" }}>{row.class}</td>
                      <td style={{ padding: "12px" }}>{row.course}</td>
                      <td style={{ padding: "12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div className="progress-container" style={{ width: "80px", height: "6px", margin: 0 }}>
                            <div className="progress-fill" style={{ width: `${row.progress}%` }}></div>
                          </div>
                          <span style={{ fontSize: "0.78rem", fontWeight: "700" }}>{row.progress}%</span>
                        </div>
                      </td>
                      <td style={{ padding: "12px", fontWeight: "700", color: "#10b981" }}>{row.score}</td>
                      <td style={{ padding: "12px" }}>
                        <button
                          style={{ background: "#f1f5f9", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)" }}
                          onClick={() => handleActionClick(`Feedback sent to ${row.name}!`)}
                        >
                          Grade / Feedback
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.AIFutureLabPages.TeachersPage = TeachersPage;
