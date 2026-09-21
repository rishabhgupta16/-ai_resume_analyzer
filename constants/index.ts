export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "2",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "3",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "4",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "5",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "6",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
];

export const AIResponseFormat = `
interface Feedback {
    overallScore: number;

    jobMatch: {
        score: number;
        summary: string;
        matchedKeywords: string[];
        missingKeywords: string[];
    };

    ATS: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
        }[];
    };

    toneAndStyle: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
            explanation: string;
        }[];
    };

    content: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
            explanation: string;
        }[];
    };

    structure: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
            explanation: string;
        }[];
    };

    skills: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
            explanation: string;
        }[];
    };
}`;

export const prepareInstructions = ({
    jobTitle,
    jobDescription,
}: {
    jobTitle: string;
    jobDescription: string;
}) =>
    `You are an expert in ATS (Applicant Tracking System), resume analysis, and job-resume matching.

Analyze the uploaded resume carefully and provide practical feedback that helps the candidate improve their resume.

The job title is:
${jobTitle}

The job description is:
${jobDescription}

Evaluate the resume using the following rules:

1. Give an overall resume score from 0 to 100.

2. Evaluate ATS compatibility and provide useful ATS suggestions.

3. Evaluate:
   - Tone and style
   - Content quality
   - Resume structure
   - Skills

4. Compare the resume directly with the provided job description.

5. Calculate a jobMatch score from 0 to 100 based on how closely the resume matches the requirements of the provided job description.

6. Add a short and useful jobMatch summary explaining the candidate's overall match with the role.

7. Identify important skills and job-related keywords from the job description that are already present in the resume.
Return these inside matchedKeywords.

8. Identify important skills and keywords that are required or clearly relevant in the job description but are missing from the resume.
Return these inside missingKeywords.

9. Do not invent experience, qualifications, technologies, certifications, projects, or skills that are not present in the resume or job description.

10. Only include genuinely relevant terms in missingKeywords.
Do not encourage keyword stuffing.

11. Keep matchedKeywords and missingKeywords concise.
Prefer important technical skills, tools, technologies, qualifications, and role-specific keywords.

12. Be realistic when scoring the resume.
If there are significant weaknesses or the resume does not match the job description well, it is acceptable to give a low score.

If the job description is empty or does not contain enough information for meaningful job matching:

- Set jobMatch.score to 0.
- Set jobMatch.matchedKeywords to [].
- Set jobMatch.missingKeywords to [].
- Set jobMatch.summary to "Add a job description to get a personalized job match analysis."

Provide the feedback using exactly the following structure:

${AIResponseFormat}

Return ONLY a valid JSON object.
Do not include markdown.
Do not include backticks.
Do not include comments or explanations outside the JSON object.`;