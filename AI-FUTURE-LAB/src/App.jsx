// Master App Component
const { useState, useEffect } = window.React || React;

const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [activeGrade, setActiveGrade] = useState("Grade 6–8");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { Navbar, Footer, AITutorWidget } = window.AIFutureLabComponents;
  const {
    HomePage,
    LearnAIPage,
    ProjectsPage,
    TutorialsPage,
    ChallengesPage,
    QuizPage,
    DashboardPage,
    TeachersPage,
    SchoolsPage,
    CertificatesPage,
    ResponsibleAIPage,
    RoadmapPage
  } = window.AIFutureLabPages;

  // Handle URL hash changes for easy bookmarking and deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && [
        "home", "learn", "tutorials", "projects", "challenges", 
        "quiz", "dashboard", "teachers", "schools", "certificates", 
        "responsible-ai", "roadmap"
      ].includes(hash)) {
        setActivePage(hash);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const changePage = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-root">
      {/* Top Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={changePage}
        activeGrade={activeGrade}
        setActiveGrade={setActiveGrade}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Multi-page Dynamic Router Content */}
      <main className="main-content">
        {activePage === "home" && (
          <HomePage
            setActivePage={changePage}
            activeGrade={activeGrade}
            setActiveGrade={setActiveGrade}
            setSelectedProject={setSelectedProject}
          />
        )}

        {activePage === "learn" && (
          <LearnAIPage
            setActivePage={changePage}
            activeGrade={activeGrade}
            setActiveGrade={setActiveGrade}
          />
        )}

        {activePage === "tutorials" && (
          <TutorialsPage
            setActivePage={changePage}
          />
        )}

        {activePage === "projects" && (
          <ProjectsPage
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}

        {activePage === "challenges" && (
          <ChallengesPage
            setActivePage={changePage}
          />
        )}

        {activePage === "quiz" && (
          <QuizPage
            setActivePage={changePage}
          />
        )}

        {activePage === "dashboard" && (
          <DashboardPage
            setActivePage={changePage}
            setSelectedProject={setSelectedProject}
          />
        )}

        {activePage === "teachers" && (
          <TeachersPage
            setActivePage={changePage}
          />
        )}

        {activePage === "schools" && (
          <SchoolsPage
            setActivePage={changePage}
          />
        )}

        {activePage === "certificates" && (
          <CertificatesPage />
        )}

        {activePage === "responsible-ai" && (
          <ResponsibleAIPage
            setActivePage={changePage}
          />
        )}

        {activePage === "roadmap" && (
          <RoadmapPage
            setActivePage={changePage}
            setSelectedProject={setSelectedProject}
          />
        )}
      </main>

      {/* Floating Interactive AI Tutor Companion ("Byte") */}
      <AITutorWidget />

      {/* Master Footer */}
      <Footer setActivePage={changePage} />
    </div>
  );
};

// Render React App
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
