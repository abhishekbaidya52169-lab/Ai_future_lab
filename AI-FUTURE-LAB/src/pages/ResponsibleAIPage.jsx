// Responsible AI & Ethics Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const ResponsibleAIPage = ({ setActivePage }) => {
  const [pledgeSigned, setPledgeSigned] = React.useState(false);
  const [studentPledgeName, setStudentPledgeName] = React.useState("Rahul Sharma");
  const { Icons } = window.AIFutureLabComponents;

  const ethicsPillars = [
    { title: "AI Can Make Mistakes", desc: "Language models can 'hallucinate' plausible-sounding falsehoods. Always verify citations and critical facts from credible sources.", icon: "HelpCircle", color: "#f59e0b" },
    { title: "Bias & Fairness in Data", desc: "Models trained on unbalanced datasets can amplify harmful stereotypes. We teach students how to audit training data for equity.", icon: "Users", color: "#ec4899" },
    { title: "Privacy & Data Protection", desc: "Never feed confidential passwords, home addresses, or private photos into public cloud AI endpoints.", icon: "ShieldCheck", color: "#3b82f6" },
    { title: "Copyright & Intellectual Property", desc: "Understand how creative works are learned by algorithms and how to attribute human creators fairly.", icon: "BookOpen", color: "#8b5cf6" },
    { title: "Deepfakes & Media Literacy", desc: "Recognize synthetic voice cloning, manipulated images, and misinformation using forensic verification tools.", icon: "Video", color: "#06b6d4" },
    { title: "Academic Integrity & Responsible Prompting", desc: "Use AI to expand your curiosity, brainstorm ideas, and troubleshoot code—never to bypass learning or submit uncredited work.", icon: "Award", color: "#10b981" }
  ];

  return (
    <div className="responsible-ai-page" style={{ padding: "40px 0 80px 0" }}>
      <div className="container">
        {/* Banner */}
        <div style={{
          background: "linear-gradient(135deg, #0e1e38 0%, #172554 100%)",
          color: "white",
          borderRadius: "var(--radius-xl)",
          padding: "44px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          alignItems: "center",
          gap: "36px",
          marginBottom: "36px",
          boxShadow: "0 15px 35px rgba(15, 23, 42, 0.3)"
        }}>
          <div>
            <span className="pill pill-green" style={{ marginBottom: "12px" }}>Mandatory Curriculum</span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "12px" }}>
              Responsible AI & Ethics
            </h1>
            <p style={{ color: "#bfdbfe", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "20px" }}>
              Technology without ethics is incomplete. Current school AI curriculums combine technical coding with responsible decision-making to build a safe digital future.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <span className="pill pill-cyan">Safety First</span>
              <span className="pill pill-purple">Fairness & Bias</span>
              <span className="pill pill-amber">Digital Integrity</span>
            </div>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
            <img src="assets/images/ai-school-assistant.png" alt="Responsible AI Art" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>

        {/* 6 Ethical Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px", marginBottom: "60px" }}>
          {ethicsPillars.map((p, i) => (
            <div key={i} style={{ background: "white", padding: "28px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${p.color}15`, color: p.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Icons.ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "8px" }}>{p.title}</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: "1.6" }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Ethical AI Student Pledge */}
        <div style={{ background: "white", padding: "40px", borderRadius: "var(--radius-xl)", border: "2px solid #818cf8", maxWidth: "760px", margin: "0 auto", textAlign: "center", boxShadow: "0 10px 30px rgba(99, 102, 241, 0.15)" }}>
          <span className="pill pill-purple" style={{ marginBottom: "12px" }}>Student Commitment</span>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "12px" }}>
            The Ethical AI Student Pledge
          </h2>
          <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.6", maxWidth: "620px", margin: "0 auto 24px auto" }}>
            "I pledge to use Artificial Intelligence as a tool for creativity, learning, and human empowerment. I will respect personal privacy, verify facts, credit my sources, and build AI solutions that promote fairness and kindness in my school and world."
          </p>

          {!pledgeSigned ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <input
                type="text"
                value={studentPledgeName}
                onChange={(e) => setStudentPledgeName(e.target.value)}
                placeholder="Enter your student name"
                style={{ padding: "10px 18px", borderRadius: "8px", border: "1px solid var(--border-light)", fontSize: "0.95rem", textAlign: "center", width: "280px" }}
              />
              <button className="btn-primary" onClick={() => setPledgeSigned(true)}>
                <Icons.CheckCircle size={18} />
                <span>Sign Ethical AI Pledge (+50 XP)</span>
              </button>
            </div>
          ) : (
            <div style={{ background: "#f0fdf4", border: "1px solid #86efac", padding: "20px", borderRadius: "12px", display: "inline-block" }}>
              <Icons.ShieldCheck size={36} color="#10b981" />
              <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#166534", marginTop: "8px" }}>
                Pledge Signed by {studentPledgeName}!
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#15803d", marginTop: "4px" }}>
                Badge Unlocked: <strong>Responsible AI Champion</strong> (+50 XP added to Dashboard)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

window.AIFutureLabPages.ResponsibleAIPage = ResponsibleAIPage;
