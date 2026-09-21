import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";
import Summary from "~/components/Summary";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import JobMatch from "~/components/JobMatch";

export const meta = () => [
    { title: "HireLens AI | Resume Analysis" },
    {
        name: "description",
        content:
            "AI-powered resume analysis, ATS score, job match insights, and improvement suggestions.",
    },
];

const Resume = () => {
    const { auth, isLoading, fs, kv } = usePuterStore();
    const { id } = useParams();

    const [imageUrl, setImageUrl] = useState("");
    const [resumeUrl, setResumeUrl] = useState("");
    const [feedback, setFeedback] = useState<Feedback | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !auth.isAuthenticated) {
            navigate(`/auth?next=/resume/${id}`);
        }
    }, [isLoading, auth.isAuthenticated, id, navigate]);

    useEffect(() => {
        const loadResume = async () => {
            const resume = await kv.get(`resume:${id}`);

            if (!resume) return;

            const data = JSON.parse(resume);

            const resumeBlob = await fs.read(data.resumePath);

            if (!resumeBlob) return;

            const pdfBlob = new Blob([resumeBlob], {
                type: "application/pdf",
            });

            const newResumeUrl = URL.createObjectURL(pdfBlob);

            setResumeUrl(newResumeUrl);

            const imageBlob = await fs.read(data.imagePath);

            if (!imageBlob) return;

            const newImageUrl = URL.createObjectURL(imageBlob);

            setImageUrl(newImageUrl);

            setFeedback(data.feedback);
        };

        loadResume();
    }, [id]);

    return (
        <main className="!pt-0 bg-[#f8fafc] min-h-screen">
            <nav className="resume-nav bg-white">
                <Link to="/" className="back-button">
                    <img
                        src="/icons/back.svg"
                        alt="Back"
                        className="w-2.5 h-2.5"
                    />

                    <span className="text-slate-700 text-sm font-semibold">
                        Back to Dashboard
                    </span>
                </Link>

                <div className="hidden sm:flex items-center gap-2">
                    <span className="text-xl font-bold text-gradient">
                        HireLens AI
                    </span>
                </div>
            </nav>

            <div className="flex flex-row w-full max-lg:flex-col-reverse">
                {/* Resume Preview */}
                <section
                    className="
                        flex flex-col
                        w-[40%]
                        max-lg:w-full
                        px-8
                        py-6
                        bg-[url('/images/bg-small.svg')]
                        bg-cover
                        h-[100vh]
                        sticky
                        top-0
                        items-center
                        justify-center
                        max-lg:h-auto
                        max-lg:relative
                    "
                >
                    {imageUrl && resumeUrl ? (
                        <div className="flex flex-col items-center gap-4 w-full">
                            <div className="flex items-center justify-between w-full max-w-[650px]">
                                <div>
                                    <p className="text-sm font-semibold text-slate-700">
                                        Resume Preview
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Click the preview to open the original PDF
                                    </p>
                                </div>

                                <a
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-sm
                                        font-semibold
                                        text-blue-600
                                        hover:text-blue-700
                                    "
                                >
                                    Open PDF ↗
                                </a>
                            </div>

                            <div
                                className="
                                    animate-in
                                    fade-in
                                    duration-1000
                                    bg-white
                                    border
                                    border-slate-200
                                    rounded-3xl
                                    p-3
                                    shadow-xl
                                    h-[85vh]
                                    max-lg:h-auto
                                    w-fit
                                "
                            >
                                <a
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={imageUrl}
                                        className="
                                            w-full
                                            h-full
                                            object-contain
                                            rounded-2xl
                                        "
                                        title="Resume Preview"
                                        alt="Resume preview"
                                    />
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-4">
                            <img
                                src="/images/resume-scan-2.gif"
                                className="w-[250px]"
                                alt="Loading resume"
                            />

                            <p className="text-slate-500">
                                Loading your resume...
                            </p>
                        </div>
                    )}
                </section>

                {/* AI Analysis */}
                <section
                    className="
                        flex
                        flex-col
                        gap-8
                        w-[60%]
                        max-lg:w-full
                        px-10
                        max-md:px-5
                        py-8
                        bg-white
                    "
                >
                    <div className="flex flex-col gap-4">
                        <p
                            className="
                                text-blue-600
                                font-semibold
                                text-sm
                                uppercase
                                tracking-wide
                            "
                        >
                            AI-Powered Analysis
                        </p>

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                gap-5
                                max-md:flex-col
                                max-md:items-start
                            "
                        >
                            <div className="flex flex-col gap-2">
                                <h2 className="text-4xl !text-slate-900 font-bold">
                                    Your Resume Review
                                </h2>

                                <p className="text-slate-500 max-w-[650px]">
                                    See how your resume performs and discover
                                    improvements that can strengthen your
                                    application.
                                </p>
                            </div>

                            <Link
                                to="/upload"
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    whitespace-nowrap
                                    px-5
                                    py-3
                                    rounded-xl
                                    bg-blue-600
                                    hover:bg-blue-700
                                    text-white
                                    font-semibold
                                    shadow-sm
                                    hover:shadow-md
                                    transition-all
                                    duration-200
                                "
                            >
                                + Analyze Another Resume
                            </Link>
                        </div>
                    </div>

                    {feedback ? (
                        <div
                            className="
                                flex
                                flex-col
                                gap-8
                                animate-in
                                fade-in
                                duration-1000
                            "
                        >
                            <Summary feedback={feedback} />

                            {/* Job Match + Missing Keywords */}
                            {feedback.jobMatch && (
                                <JobMatch
                                    jobMatch={feedback.jobMatch}
                                />
                            )}

                            <ATS
                                score={feedback.ATS.score || 0}
                                suggestions={feedback.ATS.tips || []}
                            />

                            <Details feedback={feedback} />
                        </div>
                    ) : (
                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                py-16
                                gap-4
                            "
                        >
                            <img
                                src="/images/resume-scan-2.gif"
                                className="w-[280px]"
                                alt="Analyzing resume"
                            />

                            <p className="text-slate-500 font-medium">
                                Preparing your AI feedback...
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
};

export default Resume;