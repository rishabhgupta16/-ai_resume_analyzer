# HireLens AI — AI-Powered Resume Analyzer

<div align="center">

### Analyze. Improve. Apply with Confidence.

**HireLens AI** is an AI-powered resume analysis web application that evaluates resumes against job requirements and provides structured feedback, ATS compatibility insights, and actionable improvement suggestions.

Built with **React, TypeScript, Tailwind CSS, React Router, Puter.js, and AI-powered analysis**.

</div>

---

## 📌 About the Project

Job seekers often submit the same resume to multiple roles without knowing how well it matches a particular job description or how effectively it can be processed by an Applicant Tracking System (ATS).

**HireLens AI** helps solve this problem.

A user can upload a resume in PDF format, enter the target company, job title, and job description, and receive AI-generated feedback designed to highlight strengths and areas for improvement.

The application provides:

- Overall Resume Score
- ATS Compatibility Score
- Tone & Style Analysis
- Content Analysis
- Resume Structure Analysis
- Skills Analysis
- ATS-specific suggestions
- Detailed improvement recommendations
- Resume history and previous analysis results

---

## ⚙️ How It Works

```text
Upload Resume (PDF)
        ↓
Enter Company & Job Details
        ↓
Resume Upload & Storage
        ↓
PDF Converted to Preview Image
        ↓
AI Analyzes Resume Against Job Description
        ↓
Overall Resume Score
        ↓
ATS Compatibility Analysis
        ↓
Category-wise Feedback
        ↓
Actionable Improvement Suggestions
```

The generated analysis is stored so users can revisit previously analyzed resumes from the dashboard.

---

## ✨ Key Features

### 🤖 AI-Powered Resume Analysis

HireLens AI analyzes resume information and generates structured feedback based on the job description provided by the user.

### 📊 Overall Resume Score

The application generates an overall score based on important resume factors such as:

- Content
- Structure
- Skills
- Tone & Style

### 🎯 ATS Compatibility Analysis

The ATS section evaluates how well the resume may work with Applicant Tracking Systems and provides suggestions for improving compatibility.

> **Note:** The ATS score is an AI-generated estimate intended to provide guidance. It does not represent the scoring system of every employer or ATS platform.

### 🧠 Detailed Resume Breakdown

Users receive category-specific feedback for:

- **Tone & Style**
- **Content**
- **Structure**
- **Skills**

Each section includes strengths as well as areas that can be improved.

### 📄 PDF Resume Upload

Users can upload resumes directly in PDF format.

The application processes the PDF and generates a visual preview alongside the AI analysis.

### 🖼️ Resume Preview

The analysis page uses a split-screen interface:

```text
┌──────────────────────┬───────────────────────────────┐
│                      │                               │
│   Resume Preview     │      AI Resume Analysis       │
│                      │                               │
│       ~40%           │            ~60%               │
│                      │                               │
└──────────────────────┴───────────────────────────────┘
```

Users can also open the original uploaded PDF directly from the analysis page.

### 🔐 Authentication

Authentication is handled through Puter.js.

Users can sign in before accessing their resume dashboard and analysis history.

### 💾 Resume Storage

Uploaded resumes and their corresponding AI analysis results are stored using Puter's file storage and key-value storage functionality.

### 📱 Responsive Interface

The interface is designed to adapt across desktop and smaller screen sizes.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| React | User interface and component-based frontend |
| TypeScript | Static typing and safer application development |
| React Router | Routing and navigation |
| Tailwind CSS | Styling and responsive UI |
| Puter.js | Authentication, storage, key-value data and AI services |
| Zustand | Application state management |
| PDF.js | PDF processing |
| React Dropzone | Drag-and-drop resume upload |
| Vite | Development and build tooling |

---

## 🧩 Main Application Flow

### 1. Authentication

Users authenticate before accessing their resume dashboard.

### 2. Dashboard

The dashboard displays resumes that have previously been analyzed.

Users can:

- View previous resume analyses
- See resume scores
- Upload another resume
- Open an existing analysis

### 3. Resume Upload

The user provides:

```text
Company Name
Job Title
Job Description
Resume (PDF)
```

The PDF upload currently supports files up to **20 MB**.

### 4. PDF Processing

After upload, the application:

1. Uploads the original PDF.
2. Converts the PDF into an image for preview.
3. Uploads the generated preview.
4. Stores resume metadata.

### 5. AI Analysis

The uploaded resume and job description are sent for AI-powered analysis.

The generated feedback is then stored with the resume record.

### 6. Results

The analysis page displays:

```text
Overall Resume Performance
        │
        ├── Tone & Style
        ├── Content
        ├── Structure
        └── Skills

ATS Compatibility
        │
        └── ATS Insights & Suggestions

Detailed Resume Breakdown
        │
        └── Category-wise Recommendations
```

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
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run HireLens AI locally.

### Prerequisites

Make sure the following are installed:

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
git clone https://github.com/rishabhgupta16/ai-resume-analyzer.git
```

Move into the project directory:

```bash
cd ai-resume-analyzer
```

> If your GitHub repository name is different, use the folder name created by `git clone`.

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

Vite will display the local development URL in the terminal.

It will usually look similar to:

```text
http://localhost:5173
```

The exact port may be different if that port is already being used.

Open the displayed URL in your browser.

---

## 🧪 Using HireLens AI

After starting the application:

1. Sign in.
2. Open the **Analyze Resume** page.
3. Enter the company name.
4. Enter the target job title.
5. Paste the job description.
6. Upload your resume in PDF format.
7. Click **Analyze Resume**.
8. Wait while the resume is processed.
9. Review your resume score.
10. Check ATS compatibility.
11. Explore detailed category-wise feedback.
12. Use the suggestions to improve your resume.

---

## 📊 Analysis Categories

### Tone & Style

Evaluates the clarity and professional presentation of the resume.

### Content

Reviews the quality and relevance of the information included in the resume.

### Structure

Evaluates organization, sections, readability, and resume layout.

### Skills

Reviews how effectively relevant skills are represented for the target role.

### ATS Compatibility

Provides an AI-generated assessment of potential ATS compatibility and highlights possible improvements.

---

## 🎨 HireLens AI Customization

The project has been customized with a distinct **HireLens AI** identity and interface.

Key UI changes include:

- HireLens AI branding
- Redesigned dashboard presentation
- Updated resume upload interface
- Redesigned analysis dashboard
- 40/60 resume-preview and analysis layout
- Updated resume score presentation
- Redesigned ATS compatibility section
- Improved detailed-analysis layout
- Updated authentication interface
- Responsive UI improvements
- Consistent blue/teal visual language

---

## 🔒 Privacy & Data Considerations

HireLens AI uses Puter.js services for functionality such as authentication, file storage, key-value storage, and AI interactions.

Because resumes may contain personal information, users should review the applicable service policies before uploading sensitive documents.

The application should be treated as a resume-assistance tool rather than a replacement for professional recruiting or career advice.

---

## ⚠️ Disclaimer

HireLens AI provides AI-generated resume feedback.

Scores, ATS insights, and recommendations are estimates and may not represent how a specific employer, recruiter, or Applicant Tracking System will evaluate a resume.

Users should review AI-generated recommendations before making changes to professional documents.

---

## 🌱 Future Improvements

Potential future enhancements include:

- Resume-to-job keyword matching
- Missing keyword detection
- Improved ATS recommendations
- Resume comparison
- Resume version tracking
- Downloadable analysis reports
- More detailed skill-gap analysis
- Improved dashboard filtering
- Dark mode
- Additional AI-powered career insights

---

## 🙏 Acknowledgements

This project was initially developed as a learning project based on the **AI Resume Analyzer tutorial by JavaScript Mastery**.

The tutorial provided the foundation for concepts including the React application structure, Puter.js integration, resume processing, and AI-powered feedback workflow.

The project was subsequently customized and extended under the **HireLens AI** identity, including changes to branding, interface design, result presentation, ATS visualization, authentication UI, and overall user experience.

Original educational resource:

**JavaScript Mastery — AI Resume Analyzer Tutorial**

This repository is maintained as a learning and portfolio project.

---

## 👨‍💻 Developer

**Rishabh Gupta**

B.Tech — Information Technology  
Raj Kumar Goel Institute of Technology

Areas of interest:

- Web Development
- JavaScript
- React
- AI-powered Applications
- Full-Stack Development

---

<div align="center">

### HireLens AI

**Smarter Resume Insights. Better Applications.**

Built as a learning and portfolio project.

</div>