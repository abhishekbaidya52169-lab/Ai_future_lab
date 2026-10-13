// AI Quiz Section Page Component
window.AIFutureLabPages = window.AIFutureLabPages || {};

const QuizPage = ({ setActivePage }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [quizFinished, setQuizFinished] = React.useState(false);

  const { Icons } = window.AIFutureLabComponents;
  const { quizzes, gamification } = window.AIFutureLabData;
  const quiz = quizzes[0];
  const q = quiz.questions[currentQuestionIndex];

  const handleSelectOption = (optIndex) => {
    if (selectedAnswers[q.id] !== undefined) return; // Prevent changing after selection
    setSelectedAnswers((prev) => ({
      ...prev,
      [q.id]: optIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
  };

  // Calculate score
  const score = Object.keys(selectedAnswers).reduce((acc, qId) => {
    const questionObj = quiz.questions.find((item) => item.id === parseInt(qId));
    return questionObj && selectedAnswers[qId] === questionObj.correctAnswer ? acc + 2 : acc;
  }, 0);

  return (
    <div className="quiz-page" style={{ padding: "40px 0 80px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px auto" }}>
          <span className="pill pill-purple" style={{ marginBottom: "12px" }}>Interactive Assessment</span>
          <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "8px" }}>
            Test Your AI Knowledge
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
            Earn +20 XP and unlock new badges by showing off your AI mastery!
          </p>
        </div>

        {!quizFinished ? (
          /* Active Question Card */
          <div className="quiz-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <span className="pill pill-blue">Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
              <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: "600" }}>+20 XP on completion</span>
            </div>

            <div className="progress-container" style={{ marginBottom: "24px", height: "6px" }}>
              <div className="progress-fill" style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}></div>
            </div>

            <h2 style={{ fontSize: "1.45rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "24px" }}>
              {q.question}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {q.options.map((option, optIdx) => {
                const isSelected = selectedAnswers[q.id] === optIdx;
                const isAnswered = selectedAnswers[q.id] !== undefined;
                const isCorrect = optIdx === q.correctAnswer;

                let optionClass = "quiz-option";
                if (isAnswered) {
                  if (isCorrect) optionClass += " correct";
                  else if (isSelected) optionClass += " wrong";
                } else if (isSelected) {
                  optionClass += " selected";
                }

                return (
                  <button
                    key={optIdx}
                    className={optionClass}
                    onClick={() => handleSelectOption(optIdx)}
                  >
                    <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: "700" }}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span style={{ flexGrow: 1 }}>{option}</span>
                    {isAnswered && isCorrect && <Icons.CheckCircle size={18} color="#10b981" />}
                  </button>
                );
              })}
            </div>

            {selectedAnswers[q.id] !== undefined && (
              <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "10px", marginBottom: "24px", fontSize: "0.88rem", color: "#334155", borderLeft: "4px solid var(--primary)" }}>
                <strong>Explanation:</strong> {q.explanation}
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className="btn-primary"
                disabled={selectedAnswers[q.id] === undefined}
                onClick={handleNextQuestion}
                style={{ opacity: selectedAnswers[q.id] === undefined ? 0.5 : 1 }}
              >
                <span>{currentQuestionIndex === quiz.questions.length - 1 ? "Submit Quiz" : "Next Question"}</span>
                <Icons.ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* Quiz Results Screen matching PDF page 10 */
          <div className="quiz-card" style={{ textAlign: "center" }}>
            <div style={{ maxWidth: "340px", margin: "0 auto 20px auto", borderRadius: "16px", overflow: "hidden" }}>
              <img src="assets/images/ai-quiz-result.jpeg" alt="Quiz Result Mascot" style={{ width: "100%", height: "auto" }} />
            </div>

            <span className="pill pill-green" style={{ marginBottom: "12px" }}>Quiz Complete!</span>
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#1e1b4b", marginBottom: "6px" }}>
              Your Score: <span style={{ color: "var(--primary)" }}>{score}/10</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "20px" }}>
              Awesome job! You just earned <strong>+20 XP</strong> and advanced toward your next badge.
            </p>

            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "16px", maxWidth: "480px", margin: "0 auto 28px auto", textAlign: "left" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: "700", color: "#166534", textTransform: "uppercase" }}>Recommended Next Lesson:</span>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#166534", marginTop: "2px" }}>{quiz.recommendedNext}</h4>
              <p style={{ fontSize: "0.84rem", color: "#15803d", marginTop: "4px" }}>Dive deeper into training loss, pattern detection, and image classification models.</p>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "14px" }}>
              <button className="btn-outline-dark" onClick={handleRestart}>
                Retake Quiz
              </button>
              <button className="btn-primary" onClick={() => setActivePage("dashboard")}>
                <span>View Dashboard Progress</span>
                <Icons.ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Gamification Points & Badges Matrix from PDF Section 11 */}
        <div style={{ marginTop: "60px", background: "white", padding: "36px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-light)" }}>
          <div className="section-header" style={{ marginBottom: "32px" }}>
            <span className="section-label">Gamified Rewards</span>
            <h3 className="section-title" style={{ fontSize: "1.8rem" }}>Points & Badges System</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "36px" }}>
            {gamification.pointsSystem.map((item, idx) => (
              <div key={idx} style={{ background: "#f8fafc", padding: "18px", borderRadius: "12px", border: "1px solid var(--border-light)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.9rem", fontWeight: "600", color: "#1e1b4b" }}>{item.action}</span>
                <span style={{ fontSize: "1.1rem", fontWeight: "800", color: item.color, background: "white", padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-light)" }}>
                  {item.points}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
            {gamification.badges.map((b) => (
              <div key={b.id} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", borderRadius: "12px", background: b.earned ? "#f0fdf4" : "#f8fafc", border: `1px solid ${b.earned ? "#bbf7d0" : "var(--border-light)"}` }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: b.earned ? "#10b981" : "#cbd5e1", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icons.Trophy size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: "0.9rem", color: "#1e1b4b" }}>{b.name}</strong>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

window.AIFutureLabPages.QuizPage = QuizPage;
