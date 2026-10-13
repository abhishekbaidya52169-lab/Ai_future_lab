# AI Future Lab — K-12 AI Learning & Project Platform

> **"Learn AI. Build Projects. Create the Future."**
> A comprehensive multi-page frontend and UI platform built with **React, CSS, and JavaScript** for school students in Grades 3 to 12.

---

## 🚀 Quick Start (How to Run)

The application is completely self-contained and ready to run with **zero install and zero build required**!

### Option 1: Double-click or open directly
Double-click [`AI-FUTURE-LAB/index.html`](file:///c:/Users/abhis/Downloads/ai%20future%20lab%20anti/AI-FUTURE-LAB/index.html) in your browser (Google Chrome, Microsoft Edge, Firefox, or Safari).

### Option 2: Run with 1-click script
Double-click `start_website.bat` or run in PowerShell:
```powershell
.\start_website.ps1
```
This serves the application on `http://localhost:3000` and opens it in your default browser.

### Option 3: Python Web Server
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

For the landing-page background video, place your MP4 file at `video.mp4` in the project root, next to `index.html`.

---

## 🎨 Theme & Visual Design
- **Theme**: Futuristic deep indigo/navy blue (`#0c0926`, `#14103d`) hero and headers with glowing neon cyan (`#00f0ff`), electric blue (`#3b82f6`), and purple (`#8b5cf6`) accents.
- **Content Cards**: Ultra-clean white and soft slate backgrounds with rounded corners (`16px` to `24px`), border glows, glassmorphism overlays, and vibrant category pills matching the reference design.
- **Images Used**: Powered by all **36 high-resolution 3D cartoon illustrations** generated specifically for AI Future Lab.

---

## 📱 Multi-Page Architecture & Included Modules

| Page / Route | Key Features & Implementation |
|---|---|
| **Home Page** (`#home`) | Hero section with `home-hero.png`, 6 Learning Categories (`ai-fundamentals.png`, `machine-learning.png`, etc.), 3 Grade Pathways (Grade 3–5, 6–8, 9–12), "Build with AI" flow, and 12-Month roadmap preview. |
| **Learn AI** (`#learn`) | Complete course catalog with domain filters, grade-level pathway toggles, curriculum topics syllabus, and lesson launchers. |
| **Projects Hub** (`#projects`) | Filterable project showcase (All, Beginner, Intermediate, Advanced), Search bar, 10 Featured school projects with Problem/Solution/Tech breakdowns, and **Live Interactive Simulators** (Chatbot, Image Classifier, Story Generator). |
| **Tutorials** (`#tutorials`) | Step-by-step learning journey following *Learn → Watch → Try → Build → Quiz*, featuring video player (`tutorial-ai-intro.png`), interactive AI/Non-AI classifier widget, and Mini Challenge. |
| **Challenge Arena** (`#challenges`) | Monthly Championship with live countdown timer, 3D Trophy showcase (`challenge-arena.png`), submission modal, and 100-mark evaluation rubric rings. |
| **AI Quiz** (`#quiz`) | Interactive knowledge assessment with multiple-choice questions, instant score calculation, explanations, celebratory results screen (`ai-quiz-result.png`), and points/badges matrix. |
| **Student Dashboard** (`#dashboard`) | Student profile (Rahul Sharma, Roll: 12345, avatar: `student-dashboard-avatar.png`), CGPA/SGPA stats, 12-day streak 🔥, XP points, progress bars for all courses, continue learning card, and active projects list. |
| **Teacher Portal** (`#teachers`) | Educator hub with Ms. Priya Sharma (`teacher-portal.png`), 5 KPI cards (Classes, Students, Assignments, Evaluations, Avg Quiz), class schedule, and real-time student activity grading table. |
| **School Admin Dashboard** (`#schools`) | Campus-wide analytics with `school-dashboard.png`, 6-month student participation bar chart, cohort breakdown, top-performing student leaderboard, and B2B school partnership inquiry form. |
| **Certificates** (`#certificates`) | Official Certificate of Completion with customizable student name input, gold seal decoration (`certificate-decoration.png`), verification code (`AIFL-2026-88942`), and print/download & share buttons. |
| **Responsible AI** (`#responsible-ai`) | Ethics & Safety curriculum (`responsible-ai.png`) covering AI mistakes, data bias, privacy, copyright, deepfakes, and an interactive **Ethical AI Student Pledge**. |
| **12-Month Roadmap** (`#roadmap`) | Year-long progressive curriculum timeline (`learning-roadmap.png`) mapping months 1 to 12 with targeted hands-on projects. |
| **AI Tutor ("Byte")** | Floating mascot widget (`ai-robot-mascot.png`) available on every page for instant Q&A, prompt chips, and friendly guidance. |

---

## 📂 Project Directory Structure
```
AI-FUTURE-LAB/
├── assets/
│   └── images/                       # All 36 Generated 3D & Vector Assets
│       ├── home-hero.png
│       ├── ai-robot-mascot.png
│       ├── ai-fundamentals.png
│       ├── machine-learning.png
│       ├── generative-ai.png
│       ├── computer-vision.png
│       ├── coding-with-ai.png
│       ├── ai-real-world.png
│       ├── grade-3-5-explorer.png
│       ├── grade-6-8-creator.png
│       ├── grade-9-12-innovator.png
│       ├── tutorial-ai-intro.png
│       ├── tutorial-experiment.png
│       ├── project-quiz-generator.png
│       ├── project-story-generator.png
│       ├── project-study-assistant.png
│       ├── project-image-classifier.png
│       ├── project-school-faq.png
│       ├── project-weather-assistant.png
│       ├── project-homework-helper.png
│       ├── project-plant-identifier.png
│       ├── project-waste-classifier.png
│       ├── project-career-assistant.png
│       ├── challenge-arena.png
│       ├── project-presentation.png
│       ├── student-dashboard-avatar.png
│       ├── teacher-portal.png
│       ├── school-dashboard.png
│       ├── parent-dashboard.png
│       ├── ai-tutor.png
│       ├── ai-quiz-result.png
│       ├── certificate-decoration.png
│       ├── career-explorer.png
│       ├── responsible-ai.png
│       ├── learning-roadmap.png
│       └── build-with-ai-banner.png
├── dist/
│   └── app.bundle.js                 # Compiled Production Application Bundle
├── src/
│   ├── components/                   # Navbar, Footer, Icons, AITutorWidget
│   ├── data/                         # Courses, Projects, Tutorials, Quizzes
│   ├── pages/                        # Multi-page Views (Home, Learn, Projects, etc.)
│   └── App.jsx                       # Master React Router Component
├── styles/
│   └── theme.css                     # Master CSS Design System
├── vendor/                           # Standalone React & ReactDOM dependencies
├── build.cjs                         # Bundler script for fast offline deployment
├── index.html                        # Application entry point
├── start_website.bat                 # 1-click Windows batch launcher
├── start_website.ps1                 # 1-click PowerShell launcher
└── README.md
```
