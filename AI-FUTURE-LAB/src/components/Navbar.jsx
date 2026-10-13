// Master Navigation Bar Component
window.AIFutureLabComponents = window.AIFutureLabComponents || {};

const Navbar = ({ activePage, setActivePage }) => {
  const navLinks = [
    { id: "home", label: "home" },
    { id: "learn", label: "learn AI" },
    { id: "tutorials", label: "tutorials" },
    { id: "projects", label: "projects" },
    { id: "challenges", label: "challenges" },
    { id: "quiz", label: "quiz" },
    { id: "teachers", label: "teachers" },
    { id: "schools", label: "school" },
    { id: "dashboard", label: "students/parents" }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <div className="brand-logo" onClick={() => handleNavClick("home")}>
          <div className="brand-icon">
            <img src="assets/images/ai-robot-mascot.png" alt="AI Mascot" />
          </div>
          <div>
            <span className="brand-title">AI Future Lab</span>
            <span className="brand-tag">by Envystream Smarttech</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activePage === link.id ? "active" : ""}`}
              onClick={() => handleNavClick(link.id)}
              aria-current={activePage === link.id ? "page" : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
};

window.AIFutureLabComponents.Navbar = Navbar;
