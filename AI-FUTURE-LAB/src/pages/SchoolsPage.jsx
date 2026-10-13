// School AI Dashboard (Admin) Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const SchoolsPage = ({ setActivePage }) => {
  const { Icons } = window.AIFutureLabComponents;
  const [partnerSubmitted, setPartnerSubmitted] = React.useState(false);

  return (
    <div className="schools-page" style={{ padding: "40px 0 80px 0" }}>
      <div className="container">
        {/* Top School Banner */}
        <div style={{
          background: "linear-gradient(135deg, #0e1e38 0%, #172554 100%)",
          color: "white",
          borderRadius: "var(--radius-xl)",
          padding: "36px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          alignItems: "center",
          gap: "32px",
          marginBottom: "32px",
          boxShadow: "0 15px 35px rgba(15, 23, 42, 0.25)"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span className="pill pill-cyan">School Administration</span>
              <span style={{ color: "#93c5fd", fontSize: "0.85rem" }}>B2B Campus AI Platform</span>
            </div>
            <h1 style={{ fontSize: "2.3rem", fontWeight: "800", marginBottom: "8px" }}>
              School AI Dashboard — Track, Analyse, Improve
            </h1>
            <p style={{ color: "#bfdbfe", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
              Comprehensive school-wide monitoring. Track student adoption, course completions, project submissions, and evaluate learning outcomes across grade cohorts.
            </p>
            <div style={{ display: "flex", gap: "14px" }}>
              <button className="btn-primary" onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}>
                <span>Partner Your School</span>
                <Icons.ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
            <img src="assets/images/school-dashboard.jpeg" alt="School Dashboard Art" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>

        {/* 5 Admin KPI Cards matching PDF Section 15 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px", marginBottom: "32px" }}>
          {[
            { label: "Total Students", val: "450", color: "#3b82f6" },
            { label: "Active Students", val: "382", color: "#10b981" },
            { label: "Projects Completed", val: "728", color: "#8b5cf6" },
            { label: "Courses Completed", val: "1,240", color: "#06b6d4" },
            { label: "AI Challenges Won", val: "8", color: "#f59e0b" }
          ].map((stat, i) => (
            <div key={i} style={{ background: "white", padding: "20px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>{stat.label}</span>
              <div style={{ fontSize: "1.9rem", fontWeight: "800", color: stat.color, marginTop: "4px" }}>{stat.val}</div>
            </div>
          ))}
        </div>

        {/* Charts & Analytics Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px", marginBottom: "32px" }}>
          {/* Monthly Participation Bar Chart Visualization */}
          <div style={{ background: "white", padding: "28px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "#1e1b4b" }}>Student Participation Trend</h3>
              <span style={{ fontSize: "0.82rem", color: "#64748b" }}>Past 6 Months</span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: "180px", padding: "10px 20px", borderBottom: "2px solid #e2e8f0" }}>
              {[
                { month: "Jan", height: "45%", val: "210" },
                { month: "Feb", height: "60%", val: "280" },
                { month: "Mar", height: "75%", val: "320" },
                { month: "Apr", height: "85%", val: "350" },
                { month: "May", height: "92%", val: "370" },
                { month: "Jun", height: "98%", val: "382" }
              ].map((bar, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", width: "12%" }}>
                  <span style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: "700" }}>{bar.val}</span>
                  <div style={{ width: "100%", height: bar.height, background: "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)", borderRadius: "6px 6px 0 0", transition: "height 0.4s ease" }}></div>
                  <span style={{ fontSize: "0.78rem", fontWeight: "600", color: "#475569" }}>{bar.month}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: "0.82rem", color: "#10b981", fontWeight: "600", marginTop: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <Icons.CheckCircle size={16} /> +82% engagement growth since program launch
            </div>
          </div>

          {/* Course Completion Distribution */}
          <div style={{ background: "white", padding: "28px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "16px" }}>Curriculum Cohort Breakdown</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { name: "Grade 3–5: AI Explorer", count: "140 Students", pct: "37%", color: "#38bdf8" },
                { name: "Grade 6–8: AI Creator", count: "162 Students", pct: "42%", color: "#8b5cf6" },
                { name: "Grade 9–12: AI Innovator", count: "80 Students", pct: "21%", color: "#3b82f6" }
              ].map((c, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "6px" }}>
                    <span style={{ fontWeight: "700", color: "#1e1b4b" }}>{c.name}</span>
                    <span style={{ color: "#64748b" }}>{c.count} ({c.pct})</span>
                  </div>
                  <div className="progress-container" style={{ height: "8px", margin: 0 }}>
                    <div className="progress-fill" style={{ width: c.pct, background: c.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top-Performing Students Leaderboard Table */}
        <div style={{ background: "white", padding: "28px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)", marginBottom: "40px" }}>
          <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "16px" }}>Top Performing Students Leaderboard</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--border-light)", textAlign: "left", color: "#64748b" }}>
                <th style={{ padding: "10px" }}>Rank</th>
                <th style={{ padding: "10px" }}>Student Name</th>
                <th style={{ padding: "10px" }}>Class Cohort</th>
                <th style={{ padding: "10px" }}>Projects Completed</th>
                <th style={{ padding: "10px" }}>Mastery Score</th>
              </tr>
            </thead>
            <tbody>
              {[
                { rank: "#1", name: "Adnan Singh", class: "Grade 10", projects: 5, score: "98%" },
                { rank: "#2", name: "Diya Patel", class: "Grade 9", projects: 5, score: "96%" },
                { rank: "#3", name: "Rohan Kumar", class: "Grade 10", projects: 4, score: "94%" },
                { rank: "#4", name: "Sneha Verma", class: "Grade 8", projects: 4, score: "92%" }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "12px", fontWeight: "800", color: "var(--primary)" }}>{row.rank}</td>
                  <td style={{ padding: "12px", fontWeight: "700", color: "#1e1b4b" }}>{row.name}</td>
                  <td style={{ padding: "12px", color: "#64748b" }}>{row.class}</td>
                  <td style={{ padding: "12px" }}>{row.projects} projects</td>
                  <td style={{ padding: "12px", fontWeight: "700", color: "#10b981" }}>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Partner Your School Form */}
        <div style={{ background: "#f8fafc", padding: "36px", borderRadius: "var(--radius-xl)", border: "1.5px solid var(--border-light)", maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <span className="pill pill-blue" style={{ marginBottom: "8px" }}>B2B School Inquiries</span>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#1e1b4b" }}>Deploy AI Future Lab in Your School</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Provide turnkey AI literacy, student sandboxes, and educator resources for your campus.</p>
          </div>

          {partnerSubmitted ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <Icons.CheckCircle size={48} color="#10b981" />
              <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "12px" }}>Inquiry Received!</h4>
              <p style={{ color: "#64748b", fontSize: "0.88rem" }}>Our educational partnerships team will schedule a demo for your school leadership.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setPartnerSubmitted(true); }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: "600", marginBottom: "4px" }}>School Name</label>
                  <input type="text" placeholder="e.g. St. Xavier High School" required style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--border-light)" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: "600", marginBottom: "4px" }}>Contact Person</label>
                  <input type="text" placeholder="Principal / CS Coordinator" required style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--border-light)" }} />
                </div>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: "600", marginBottom: "4px" }}>Work Email</label>
                <input type="email" placeholder="principal@school.edu" required style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--border-light)" }} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Request School Demo</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

window.AIFutureLabPages.SchoolsPage = SchoolsPage;
