// Interactive AI Tutor Mascot Widget ("Byte")
window.AIFutureLabComponents = window.AIFutureLabComponents || {};

const AITutorWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      sender: "bot",
      text: "👋 Beep boop! I'm Byte, your friendly AI Future Lab learning companion! How can I help you explore artificial intelligence today?"
    }
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const chatEndRef = React.useRef(null);
  const { Icons } = window.AIFutureLabComponents;

  React.useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    "What is Machine Learning?",
    "How does Computer Vision work?",
    "Suggest a beginner project",
    "Is AI always correct?"
  ];

  const handleSend = (userText) => {
    const text = userText || inputValue;
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);
    if (!userText) setInputValue("");

    // Simulate smart, friendly tutor reply
    setTimeout(() => {
      let reply = "That's a great question! In AI Future Lab, you can try hands-on experiments in our Tutorials tab to learn by doing!";
      const lower = text.toLowerCase();

      if (lower.includes("machine learning")) {
        reply = "🤖 Machine learning is like teaching a computer with flashcards instead of hand-written rules! By seeing thousands of examples (like pictures of cats or weather patterns), the computer learns to spot patterns on its own!";
      } else if (lower.includes("computer vision") || lower.includes("vision") || lower.includes("see")) {
        reply = "👀 Computers see images as grids of tiny numbers called pixels! A computer vision algorithm calculates brightness and edge contrast to detect shapes, faces, pets, and road signs in real time!";
      } else if (lower.includes("project") || lower.includes("idea")) {
        reply = "🚀 Check out our AI School Assistant or AI Story Generator projects! They take only 4-7 days to build and you can publish your own working app!";
      } else if (lower.includes("correct") || lower.includes("mistake") || lower.includes("bias")) {
        reply = "🛡️ Great thinking! AI can definitely make mistakes or have biases if its training data was incomplete. That's why our Responsible AI module teaches everyone to always verify facts!";
      } else if (lower.includes("generative") || lower.includes("chatgpt") || lower.includes("llm")) {
        reply = "🎨 Generative AI creates new content like artwork, stories, and code by learning statistical patterns across vast libraries of human creativity. Try our AI Story Generator project to test it!";
      }

      setMessages(prev => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

  return (
    <div className="ai-tutor-floating">
      {isOpen ? (
        <div className="ai-tutor-window">
          {/* Header */}
          <div className="tutor-header">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#00f0ff", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="assets/images/ai-tutor.jpeg" alt="Byte Mascot" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "700" }}>Byte • AI Tutor</h4>
                <span style={{ fontSize: "0.72rem", color: "#38bdf8", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", display: "inline-block" }}></span>
                  Online & Ready to Help
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: "#cbd5e1", padding: "4px" }}
              aria-label="Close tutor"
            >
              <Icons.X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="tutor-chat-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-bubble ${msg.sender === "bot" ? "chat-bubble-bot" : "chat-bubble-user"}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: "8px 12px", background: "#f1f5f9", display: "flex", gap: "6px", overflowX: "auto", whiteSpace: "nowrap" }}>
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                style={{
                  background: "white",
                  border: "1px solid var(--border-light)",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.74rem",
                  fontWeight: "600",
                  color: "var(--primary)",
                  cursor: "pointer"
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="tutor-input-box">
            <input
              type="text"
              placeholder="Ask Byte anything about AI..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="btn-primary"
              style={{ padding: "8px 14px", borderRadius: "var(--radius-full)" }}
              onClick={() => handleSend()}
            >
              <Icons.Send size={15} />
            </button>
          </div>
        </div>
      ) : null}

      {/* Floating Trigger Button */}
      <button
        className="ai-tutor-trigger"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with Byte, your AI Tutor!"
      >
        <img src="assets/images/ai-tutor.jpeg" alt="Byte the AI Robot" />
      </button>
    </div>
  );
};

window.AIFutureLabComponents.AITutorWidget = AITutorWidget;
