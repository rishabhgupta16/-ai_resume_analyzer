# 🚀 HireLens AI — AI-Powered Resume Analyzer

<div align="center">

### Analyze. Improve. Apply with Confidence.

**HireLens AI** is an AI-powered resume analysis web application that evaluates resumes against job descriptions, estimates ATS compatibility, calculates job-match scores, identifies matched and missing keywords, and provides actionable improvement suggestions.

Built with **React, TypeScript, Tailwind CSS, React Router, Puter.js, PDF.js, Zustand, and Vite**.

### 🌐 Live Application

[🚀 View Live Demo](https://hirelens-ai-lyart.vercel.app/)

</div>

---

## 📌 About the Project

Job seekers often use the same resume for multiple roles without knowing how closely it matches a specific job description or how effectively it may perform with an Applicant Tracking System (ATS).

**HireLens AI** helps users evaluate their resume for a specific opportunity.

Users can provide:

- Company Name
- Job Title
- Job Description
- Resume in PDF format

HireLens AI then processes the resume and generates structured AI-powered feedback to help users understand their resume's strengths, weaknesses, ATS compatibility, and relevance to the target role.

---

## ✨ Key Features

### 🤖 AI-Powered Resume Analysis

Analyzes an uploaded resume and generates structured feedback based on the job description provided by the user.

### 📊 Overall Resume Score

Generates an overall resume score based on factors including:

- Content
- Structure
- Skills
- Tone & Style

### 🎯 ATS Compatibility Analysis

Provides an AI-generated ATS compatibility score along with suggestions for improving resume readability and compatibility.

> **Note:** ATS scores are AI-generated estimates and do not represent the scoring system of every employer or ATS platform.

### 💼 Job Match Score

Compares the resume with the provided job description and generates a **Job Match percentage**.

This helps users understand how closely their current resume aligns with the target role.

### ✅ Matched Keywords

Identifies relevant skills and keywords from the job description that are already represented in the resume.

### ⚠️ Missing Keywords

Highlights important job-related keywords or skills that may be missing from the resume.

Users should only add suggested skills when they genuinely reflect their experience.

### 🧠 AI Match Summary

Provides a concise AI-generated explanation of the resume's overall compatibility with the target job.

### 📋 Detailed Resume Breakdown

Provides category-specific analysis for:

- Tone & Style
- Content
- Structure
- Skills

Each category includes strengths and practical improvement suggestions.

### 📄 PDF Resume Upload

Supports direct PDF resume uploads of up to **20 MB**.

### 🖼️ Resume Preview

The original resume is converted into a visual preview and displayed alongside the AI analysis.

Users can also open the original PDF directly from the results page.

### 🗂️ Resume Dashboard

Previously analyzed resumes are displayed on the dashboard.

Users can:

- View previous analyses
- See resume scores
- Open detailed results
- Analyze another resume
- Delete previous resume analyses

### 🔄 Analyze Another Resume

Users can quickly start another resume analysis directly from the result page.

### 🗑️ Delete Resume

Users can remove previously analyzed resumes from their dashboard.

### 🔐 Authentication

Authentication is handled using **Puter.js**.

### 💾 Resume & Analysis Storage

Puter services are used for:

- Authentication
- File storage
- Key-value storage
- AI-powered analysis

### 📱 Responsive Interface

The interface is designed to work across desktop and smaller screen sizes.

---

## ⚙️ How It Works

```text
Upload Resume (PDF)
        ↓
Enter Company & Job Details
        ↓
Upload & Store Resume
        ↓
Convert PDF to Preview Image
        ↓
AI Analyzes Resume + Job Description
        ↓
Overall Resume Score
        ↓
Job Match Score
        ↓
Matched & Missing Keywords
        ↓
ATS Compatibility Analysis
        ↓
Category-Wise Resume Feedback
        ↓
Actionable Improvement Suggestions
```

The generated analysis is stored so users can revisit previous results from their dashboard.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| React | Component-based user interface |
| TypeScript | Static typing and safer development |
| React Router | Routing and application framework |
| Tailwind CSS | Styling and responsive UI |
| Puter.js | Authentication, storage, KV data and AI services |
| Zustand | Application state management |
| PDF.js | PDF processing and preview generation |
| React Dropzone | Drag-and-drop resume uploads |
| Vite | Development and production build tooling |
| Vercel | Production deployment |

---

## 🧩 Application Flow

### 1. Authentication

Users sign in before accessing their resume dashboard.

### 2. Dashboard

The dashboard displays previously analyzed resumes.

Users can view an existing analysis, delete a resume, or start a new analysis.

### 3. Resume Upload

The user provides:

```text
Company Name
Job Title
Job Description
Resume (PDF)
```

PDF files up to **20 MB** are supported.

### 4. PDF Processing

After upload, the application:

1. Uploads the original PDF.
2. Converts the PDF into an image.
3. Stores the generated preview.
4. Stores resume metadata.

### 5. AI Analysis

The resume is analyzed against the supplied job description.

The application generates:

```text
Overall Resume Score
        │
        ├── Tone & Style
        ├── Content
        ├── Structure
        └── Skills

Job Compatibility
        │
        ├── Job Match Score
        ├── AI Match Summary
        ├── Matched Keywords
        └── Missing Keywords

ATS Compatibility
        │
        └── ATS Insights & Suggestions
```

### 6. Results

The analysis page combines the resume preview with detailed AI feedback so users can review their resume and recommendations together.

---

## 📂 Project Structure

```text
ai-resume-analyzer/
│
├── app/
│   ├── components/
│   │   ├── Accordion.tsx
│   │   ├── ATS.tsx
│   │   ├── Details.tsx
│   │   ├── FileUploader.tsx
│   │   ├── JobMatch.tsx
│   │   ├── Navbar.tsx
│   │   ├── ResumeCard.tsx
│   │   ├── ScoreBadge.tsx
│   │   ├── ScoreCircle.tsx
│   │   ├── ScoreGauge.tsx
│   │   └── Summary.tsx
│   │
│   ├── lib/
│   │   ├── pdf2img.ts
│   │   ├── puter.ts
│   │   └── utils.ts
│   │
│   ├── routes/
│   │   ├── auth.tsx
│   │   ├── home.tsx
│   │   ├── resume.tsx
│   │   └── upload.tsx
│   │
│   ├── app.css
│   ├── root.tsx
│   └── routes.ts
│
├── constants/
├── public/
│   ├── icons/
│   ├── images/
│   ├── favicon.ico
│   └── pdf.worker.min.mjs
│
├── types/
├── package.json
├── react-router.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Git
- Node.js
- npm

Check your installation:

```bash
node --version
npm --version
git --version
```

---

## 📥 Clone the Repository

```bash
git clone https://github.com/rishabhgupta16/-ai_resume_analyzer.git
```

Move into the cloned project directory:

```bash
cd -ai_resume_analyzer
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## ▶️ Run the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

It will usually look similar to:

```text
http://localhost:5173
```

The port may be different if `5173` is already being used.

---

## 🏗️ Production Build

Create a production build using:

```bash
npm run build
```

---

## 🌐 Deployment

HireLens AI is deployed using **Vercel**.

### Live Demo

**https://hirelens-ai-lyart.vercel.app/**

---

## 🧪 Using HireLens AI

1. Sign in to HireLens AI.
2. Select **Analyze Resume**.
3. Enter the company name.
4. Enter the target job title.
5. Paste the job description.
6. Upload your resume in PDF format.
7. Click **Analyze Resume**.
8. Wait for the AI analysis.
9. Review your overall resume score.
10. Check your Job Match percentage.
11. Review matched and missing keywords.
12. Check ATS compatibility.
13. Explore category-wise feedback.
14. Use relevant recommendations to improve your resume.

---

## 📊 Analysis Categories

### Tone & Style

Evaluates clarity, professionalism, and presentation.

### Content

Reviews the quality and relevance of the resume's information.

### Structure

Evaluates organization, sections, readability, and overall layout.

### Skills

Reviews how effectively relevant skills are represented for the target role.

### Job Match

Estimates how closely the resume aligns with the supplied job description.

### ATS Compatibility

Provides an AI-generated assessment of potential ATS compatibility and highlights possible improvements.

---

## 🎨 HireLens AI Customization

The project has been customized and extended with a distinct **HireLens AI** identity and user experience.

Major additions and improvements include:

- HireLens AI branding
- Redesigned dashboard
- Updated authentication interface
- Redesigned resume upload experience
- Improved resume-card layout
- Resume deletion functionality
- Job Match scoring
- AI Match Summary
- Matched keyword detection
- Missing keyword detection
- Analyze Another Resume functionality
- Redesigned analysis interface
- Resume preview alongside analysis
- Updated ATS visualization
- Improved detailed feedback presentation
- Responsive UI improvements
- Consistent blue/teal visual language
- Production deployment on Vercel

---

## 🔒 Privacy & Data Considerations

HireLens AI uses Puter.js services for functionality such as authentication, file storage, key-value storage, and AI interactions.

Because resumes can contain personal information, users should review applicable service policies before uploading sensitive documents.

HireLens AI should be treated as a resume-assistance tool rather than a replacement for professional recruiting or career advice.

---

## ⚠️ Disclaimer

HireLens AI provides **AI-generated resume feedback**.

Resume scores, job-match percentages, ATS insights, keyword suggestions, and other recommendations are estimates.

They may not represent how a specific recruiter, employer, hiring process, or Applicant Tracking System will evaluate a resume.

Users should review AI-generated recommendations before making changes to professional documents.

---

## 🌱 Future Improvements

Potential future enhancements include:

- Resume comparison
- Resume version tracking
- Downloadable analysis reports
- Advanced skill-gap analysis
- Dashboard search and filtering
- Dark mode
- More detailed role-specific recommendations
- Additional AI-powered career insights

---

## 🙏 Acknowledgements

This project was initially developed as a learning project based on the **AI Resume Analyzer tutorial by JavaScript Mastery**.

The tutorial provided the foundation for concepts including the React application structure, Puter.js integration, resume processing, and AI-powered feedback workflow.

The project was subsequently customized and extended under the **HireLens AI** identity with additional functionality and UI improvements, including Job Match analysis, matched and missing keyword insights, resume deletion, redesigned interfaces, improved result presentation, and production deployment.

**Original educational resource:**  
JavaScript Mastery — AI Resume Analyzer Tutorial

This repository is maintained as a learning and portfolio project.

---

## 👨‍💻 Developer

**Rishabh Gupta**

B.Tech — Information Technology  
Raj Kumar Goel Institute of Technology

### Areas of Interest

- Web Development
- JavaScript
- React
- AI-Powered Applications
- Full-Stack Development

---

<div align="center">

## 🚀 HireLens AI

### Smarter Resume Insights. Better Applications.

[**🌐 Try HireLens AI Live**](https://hirelens-ai-lyart.vercel.app/)

Built as a learning and portfolio project.

</div>
