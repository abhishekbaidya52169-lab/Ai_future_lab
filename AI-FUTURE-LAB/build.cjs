const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('🚀 Building AI Future Lab production bundle...');

// Ensure dist/ exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Load Babel Standalone
const babelCode = fs.readFileSync(path.join(__dirname, 'vendor', 'babel.min.js'), 'utf8');
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);
vm.runInContext(babelCode, sandbox);
const Babel = sandbox.Babel;

// Source files in correct dependency order
const files = [
  'src/data/coursesData.js',
  'src/data/projectsData.js',
  'src/data/tutorialsData.js',
  'src/data/quizData.js',
  'src/components/Icons.jsx',
  'src/components/Navbar.jsx',
  'src/components/Footer.jsx',
  'src/components/AITutorWidget.jsx',
  'src/pages/HomePage.jsx',
  'src/pages/LearnAIPage.jsx',
  'src/pages/ProjectsPage.jsx',
  'src/pages/TutorialsPage.jsx',
  'src/pages/ChallengesPage.jsx',
  'src/pages/QuizPage.jsx',
  'src/pages/DashboardPage.jsx',
  'src/pages/TeachersPage.jsx',
  'src/pages/SchoolsPage.jsx',
  'src/pages/CertificatesPage.jsx',
  'src/pages/ResponsibleAIPage.jsx',
  'src/pages/RoadmapPage.jsx',
  'src/App.jsx'
];

let compiledChunks = [];

for (const relPath of files) {
  const fullPath = path.join(__dirname, relPath);
  console.log(`Compiling: ${relPath}`);
  const src = fs.readFileSync(fullPath, 'utf8');

  try {
    const transformed = Babel.transform(src, {
      presets: ['react'],
      filename: path.basename(relPath)
    });
    compiledChunks.push(`\n/* --- ${relPath} --- */\n` + transformed.code);
  } catch (err) {
    console.error(`Error compiling ${relPath}:`, err);
    process.exit(1);
  }
}

// Bundle output with top-level window bindings
const bundlePath = path.join(distDir, 'app.bundle.js');
const banner = `var React = window.React || (typeof globalThis !== 'undefined' ? globalThis.React : null);\nvar ReactDOM = window.ReactDOM || (typeof globalThis !== 'undefined' ? globalThis.ReactDOM : null);\n`;
fs.writeFileSync(bundlePath, banner + compiledChunks.join('\n;\n'), 'utf8');
console.log(`✅ Successfully built ${bundlePath} (${(fs.statSync(bundlePath).size / 1024).toFixed(1)} KB)`);
