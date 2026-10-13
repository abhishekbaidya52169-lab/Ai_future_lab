// Master Footer Component
window.AIFutureLabComponents = window.AIFutureLabComponents || {};

const Footer = ({ setActivePage }) => {
  const { Icons } = window.AIFutureLabComponents;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #4f46e5, #00f0ff)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="assets/images/ai-robot-mascot.png" alt="Mascot" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <h3 style={{ color: "white", fontSize: "1.2rem", fontWeight: "800" }}>AI Future Lab</h3>
                <span style={{ fontSize: "0.75rem", color: "#38bdf8", fontWeight: "600" }}>Learn AI. Build Projects. Create the Future.</span>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: "1.6", color: "#94a3b8", maxWidth: "320px", marginBottom: "20px" }}>
              The comprehensive K-12 AI education & innovation platform. Combining hands-on coding, machine learning, computer vision, and responsible AI ethics for Grades 3–12.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <span className="pill pill-cyan" style={{ fontSize: "0.75rem" }}>For Student/Parent</span>
              <span className="pill pill-purple" style={{ fontSize: "0.75rem" }}>For Teachers</span>
              <span className="pill pill-blue" style={{ fontSize: "0.75rem" }}>For Schools</span>
            </div>
          </div>

          {/* Learn AI Categories */}
          <div>
            <h4 className="footer-col-title">Learning Domains</h4>
            <ul className="footer-links">
              <li><a href="#learn" onClick={(e) => { e.preventDefault(); setActivePage("learn"); }}>AI Fundamentals</a></li>
              <li><a href="#learn" onClick={(e) => { e.preventDefault(); setActivePage("learn"); }}>Machine Learning</a></li>
              <li><a href="#learn" onClick={(e) => { e.preventDefault(); setActivePage("learn"); }}>Generative AI & LLMs</a></li>
              <li><a href="#learn" onClick={(e) => { e.preventDefault(); setActivePage("learn"); }}>Computer Vision</a></li>
              <li><a href="#learn" onClick={(e) => { e.preventDefault(); setActivePage("learn"); }}>Coding with AI</a></li>
              <li><a href="#learn" onClick={(e) => { e.preventDefault(); setActivePage("learn"); }}>AI in the Real World</a></li>
            </ul>
          </div>

          {/* Grade Pathways & Projects */}
          <div>
            <h4 className="footer-col-title">Grade Pathways</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); setActivePage("home"); }}>Grade 3–5: AI Explorer</a></li>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); setActivePage("home"); }}>Grade 6–8: AI Creator</a></li>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); setActivePage("home"); }}>Grade 9–12: AI Innovator</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); setActivePage("projects"); }}>AI Projects Hub</a></li>
              <li><a href="#challenges" onClick={(e) => { e.preventDefault(); setActivePage("challenges"); }}>AI Challenge Arena</a></li>
              <li><a href="#certificates" onClick={(e) => { e.preventDefault(); setActivePage("certificates"); }}>Student Certificates</a></li>
            </ul>
          </div>

          {/* Portals & Ethics */}
          <div>
            <h4 className="footer-col-title">School & Portals</h4>
            <ul className="footer-links">
              <li><a href="#dashboard" onClick={(e) => { e.preventDefault(); setActivePage("dashboard"); }}>Student Dashboard</a></li>
              <li><a href="#teachers" onClick={(e) => { e.preventDefault(); setActivePage("teachers"); }}>AI for Teachers Portal</a></li>
              <li><a href="#schools" onClick={(e) => { e.preventDefault(); setActivePage("schools"); }}>School Admin Dashboard</a></li>
              <li><a href="#quiz" onClick={(e) => { e.preventDefault(); setActivePage("quiz"); }}>AI Knowledge Quiz</a></li>
              <li><a href="#responsible-ai" onClick={(e) => { e.preventDefault(); setActivePage("responsible-ai"); }}>Responsible AI & Ethics</a></li>
              <li><a href="#tutorials" onClick={(e) => { e.preventDefault(); setActivePage("tutorials"); }}>Step-by-Step Tutorials</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          fontSize: "0.85rem"
        }}>
          <div>
            © 2026 AI Future Lab. Inspired by Code.org & UNESCO AI Competency Framework.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span style={{ color: "#38bdf8" }}>Learn</span>
            <span>•</span>
            <span style={{ color: "#a855f7" }}>Experiment</span>
            <span>•</span>
            <span style={{ color: "#ec4899" }}>Build</span>
            <span>•</span>
            <span style={{ color: "#10b981" }}>Present</span>
            <span>•</span>
            <span style={{ color: "#f59e0b" }}>Earn Certificate</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

window.AIFutureLabComponents.Footer = Footer;
