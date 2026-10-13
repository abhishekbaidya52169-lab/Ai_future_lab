// Certificate Arena Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const CertificatesPage = () => {
  const [studentName, setStudentName] = React.useState("Rahul Sharma");
  const [copied, setCopied] = React.useState(false);
  const { Icons } = window.AIFutureLabComponents;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="certificates-page" style={{ padding: "40px 0 80px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 36px auto" }}>
          <span className="pill pill-amber" style={{ marginBottom: "12px" }}>Official Accreditation</span>
          <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "8px" }}>
            Certificate Arena
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
            Celebrate mastery! Verify and export your official AI Future Lab completion certificate.
          </p>

          {/* Name Customizer input */}
          <div style={{ marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "10px", background: "white", padding: "6px 16px", borderRadius: "var(--radius-full)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
            <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: "600" }}>Customize Student Name:</span>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              style={{ border: "none", outline: "none", fontWeight: "700", color: "var(--primary)", fontSize: "0.95rem" }}
            />
          </div>
        </div>

        {/* Certificate Frame Container */}
        <div className="cert-frame">
          {/* Top Decorative Header Art */}
          <div style={{ width: "160px", margin: "0 auto 20px auto" }}>
            <img src="assets/images/certificate-decoration.jpeg" alt="Certificate Decoration" style={{ width: "100%", height: "auto" }} />
          </div>

          <div style={{ textTransform: "uppercase", letterSpacing: "0.15em", color: "#6366f1", fontSize: "0.95rem", fontWeight: "800", marginBottom: "10px" }}>
            AI FUTURE LAB • CERTIFICATE OF COMPLETION
          </div>

          <h2 style={{ fontSize: "2.2rem", fontWeight: "900", color: "#1e1b4b", marginBottom: "14px", fontFamily: "Georgia, serif" }}>
            AI Foundations for Young Innovators
          </h2>

          <p style={{ fontStyle: "italic", color: "#64748b", fontSize: "1.05rem", marginBottom: "16px" }}>
            This certifies that
          </p>

          {/* Recipient Name */}
          <div style={{ fontSize: "2.6rem", fontWeight: "800", color: "var(--primary)", borderBottom: "2px solid #cbd5e1", display: "inline-block", padding: "0 40px 10px 40px", marginBottom: "20px", fontFamily: "Georgia, serif" }}>
            {studentName || "Student Name"}
          </div>

          {/* Description Paragraph from PDF Section 16 */}
          <p style={{ maxWidth: "680px", margin: "0 auto 36px auto", color: "#334155", fontSize: "1.05rem", lineHeight: "1.7" }}>
            has successfully completed the comprehensive <strong>AI Foundations Program</strong> covering AI fundamentals, machine learning models, generative AI systems, responsible AI safety standards, and hands-on project development.
          </p>

          {/* Certificate Metadata & Signatures */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", borderTop: "1px solid #e2e8f0", paddingTop: "28px", alignItems: "flex-end" }}>
            <div>
              <div style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Certificate ID</div>
              <strong style={{ fontSize: "0.95rem", color: "#1e1b4b" }}>AIFL-2026-88942</strong>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: "2px" }}>October 2026</div>
            </div>

            {/* Gold Ribbon Seal Badge */}
            <div>
              <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "radial-gradient(circle, #fbbf24 0%, #d97706 100%)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 6px 16px rgba(217, 119, 6, 0.4)", border: "3px solid #fef3c7" }}>
                <Icons.Trophy size={32} />
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: "800", color: "#b45309", marginTop: "6px" }}>HONORS PASS</div>
            </div>

            <div>
              <div style={{ fontStyle: "italic", fontSize: "1.2rem", color: "#1e1b4b", fontFamily: "cursive", marginBottom: "2px" }}>Dr. Ellen Vance</div>
              <div style={{ borderTop: "1px solid #cbd5e1", width: "140px", margin: "0 auto 4px auto" }}></div>
              <div style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Lead AI Director</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "36px" }}>
          <button className="btn-primary" onClick={handlePrint}>
            <Icons.Download size={18} />
            <span>Download & Print Certificate</span>
          </button>
          <button className="btn-outline-dark" onClick={handleShare}>
            <Icons.Share2 size={18} />
            <span>{copied ? "Link Copied to Clipboard!" : "Share Certificate"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

window.AIFutureLabPages.CertificatesPage = CertificatesPage;
