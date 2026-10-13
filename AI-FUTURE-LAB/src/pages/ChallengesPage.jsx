// AI Challenge Arena Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const ChallengesPage = ({ setActivePage }) => {
  const [submissionModalOpen, setSubmissionModalOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState({ days: 7, hours: 14, mins: 32, secs: 45 });
  const { Icons } = window.AIFutureLabComponents;

  // Live countdown timer ticker
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const evaluationCriteria = [
    { title: "Problem Understanding", marks: 20, color: "#3b82f6" },
    { title: "Innovation", marks: 20, color: "#8b5cf6" },
    { title: "AI Usage", marks: 20, color: "#06b6d4" },
    { title: "Technical Implementation", marks: 20, color: "#10b981" },
    { title: "Presentation", marks: 20, color: "#f59e0b" }
  ];

  return (
    <div className="challenges-page" style={{ padding: "40px 0 80px 0" }}>
      <div className="container">
        {/* Arena Banner */}
        <div style={{
          background: "radial-gradient(circle at 75% 30%, #311c6d 0%, #0d0a29 70%)",
          color: "white",
          borderRadius: "var(--radius-xl)",
          padding: "48px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          alignItems: "center",
          gap: "36px",
          marginBottom: "36px",
          boxShadow: "0 20px 50px rgba(13, 10, 41, 0.4)",
          border: "1px solid rgba(147, 197, 253, 0.2)"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span className="pill pill-amber">🏆 Monthly Championship</span>
              <span style={{ color: "#a5b4fc", fontSize: "0.85rem" }}>School Innovation Cup</span>
            </div>
            <h1 style={{ fontSize: "2.8rem", fontWeight: "800", lineHeight: "1.15", marginBottom: "12px" }}>
              AI Challenge Arena <br />
              <span className="gradient-text">Think. Build. Solve. Innovate.</span>
            </h1>
            <p style={{ color: "#c7d2fe", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "24px" }}>
              Every month, students across the nation tackle an authentic real-world challenge using AI tools. Showcase your skills, earn honors, and win the Golden Trophy!
            </p>

            {/* Live Countdown Timer */}
            <div style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "var(--radius-lg)", padding: "18px 24px", display: "inline-flex", gap: "20px", alignItems: "center", marginBottom: "24px" }}>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.6rem", fontWeight: "800", color: "#00f0ff" }}>0{timeLeft.days}</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "#94a3b8", textTransform: "uppercase" }}>Days</span>
              </div>
              <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#64748b" }}>:</span>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.6rem", fontWeight: "800", color: "#00f0ff" }}>{timeLeft.hours}</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "#94a3b8", textTransform: "uppercase" }}>Hours</span>
              </div>
              <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#64748b" }}>:</span>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.6rem", fontWeight: "800", color: "#00f0ff" }}>{timeLeft.mins}</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "#94a3b8", textTransform: "uppercase" }}>Mins</span>
              </div>
              <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#64748b" }}>:</span>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.6rem", fontWeight: "800", color: "#f59e0b" }}>{timeLeft.secs < 10 ? `0${timeLeft.secs}` : timeLeft.secs}</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "#94a3b8", textTransform: "uppercase" }}>Secs</span>
              </div>
            </div>

            <div>
              <button className="btn-primary" style={{ padding: "14px 32px", fontSize: "1rem" }} onClick={() => setSubmissionModalOpen(true)}>
                <Icons.Trophy size={20} color="#f59e0b" />
                <span>Join Challenge Now</span>
              </button>
            </div>
          </div>

          <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1.5px solid rgba(255, 255, 255, 0.2)", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)" }}>
            <img src="assets/images/challenge-arena.jpeg" alt="AI Challenge Arena Trophy" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>

        {/* Challenge of the Month Details */}
        <div style={{ background: "white", padding: "36px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)", marginBottom: "36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "10px" }}>
            <span className="pill pill-green">Current Active Problem</span>
            <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Prize: Golden Trophy Badge + 100 XP</span>
          </div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "12px" }}>
            Challenge: Build an AI Solution That Helps Reduce Food Waste in Your School
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: "1.6", maxWidth: "800px", marginBottom: "28px" }}>
            School cafeterias discard tons of uneaten food every semester. Your mission is to design and prototype an AI system (vision scanner, prediction dashboard, or student chatbot) to forecast cafeteria demand or optimize food donation.
          </p>

          {/* Submission Requirements Checklist */}
          <div style={{ background: "#f8fafc", padding: "24px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)", marginBottom: "32px" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#1e1b4b", marginBottom: "14px" }}>Submission Requirements:</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
              {[
                { title: "1. Problem Statement", desc: "Clear explanation of the school waste bottleneck" },
                { title: "2. Solution Design", desc: "How your AI concept addresses the issue" },
                { title: "3. Working Prototype", desc: "GitHub link, Web app URL or live code" },
                { title: "4. Presentation Deck", desc: "5-slide summary of student teamwork" },
                { title: "5. 2-Min Project Video", desc: "Short screen recording of working prototype" }
              ].map((req, i) => (
                <div key={i} style={{ background: "white", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-light)" }}>
                  <div style={{ color: "var(--primary)", fontWeight: "700", fontSize: "0.9rem" }}>{req.title}</div>
                  <div style={{ color: "#64748b", fontSize: "0.78rem", marginTop: "4px" }}>{req.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation Criteria Rings (100 Marks Total) matching PDF page 8 */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#1e1b4b" }}>Evaluation Rubric (Total: 100 Marks)</h3>
              <span className="pill pill-purple">Official Scoring Matrix</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
              {evaluationCriteria.map((crit, idx) => (
                <div key={idx} style={{ background: "#f8fafc", padding: "20px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)", textAlign: "center" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", border: `4px solid ${crit.color}`, margin: "0 auto 12px auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: "800", color: crit.color }}>
                    {crit.marks}
                  </div>
                  <strong style={{ fontSize: "0.88rem", color: "#1e1b4b" }}>{crit.title}</strong>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "2px" }}>20 Marks max</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Challenge Submission Modal */}
        {submissionModalOpen && (
          <div className="modal-overlay" onClick={() => setSubmissionModalOpen(false)}>
            <div className="modal-content" style={{ maxWidth: "600px" }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800" }}>Submit AI Challenge Entry</h3>
                <button className="modal-close-btn" onClick={() => setSubmissionModalOpen(false)}><Icons.X size={18} /></button>
              </div>
              <div className="modal-body">
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "30px 0" }}>
                    <Icons.CheckCircle size={52} color="#10b981" />
                    <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginTop: "16px", marginBottom: "8px" }}>Project Submitted Successfully!</h3>
                    <p style={{ color: "#64748b", fontSize: "0.92rem" }}>Your entry is entered into the Challenge Arena. Judges will publish final marks on the 1st of next month.</p>
                    <button className="btn-primary" style={{ marginTop: "20px" }} onClick={() => { setSubmitted(false); setSubmissionModalOpen(false); }}>Close</button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "4px" }}>Project Title</label>
                      <input type="text" placeholder="e.g., Cafeteria Smart AI Sorter" required style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--border-light)" }} />
                    </div>
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "4px" }}>Prototype URL / GitHub</label>
                      <input type="url" placeholder="https://github.com/student/my-ai-project" required style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--border-light)" }} />
                    </div>
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "4px" }}>Problem Statement & Solution</label>
                      <textarea rows="3" placeholder="Briefly describe what your AI code does..." required style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--border-light)", fontFamily: "inherit" }}></textarea>
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Submit to Arena (+100 XP)
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

window.AIFutureLabPages.ChallengesPage = ChallengesPage;
