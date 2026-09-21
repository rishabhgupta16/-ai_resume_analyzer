import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

interface ResumeCardProps {
    resume: Resume;
    onDelete: (id: string) => void;
}

const ResumeCard = ({
    resume: {
        id,
        companyName,
        jobTitle,
        feedback,
        imagePath,
        resumePath,
    },
    onDelete,
}: ResumeCardProps) => {
    const { fs, kv } = usePuterStore();

    const [resumeUrl, setResumeUrl] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let url = "";

        const loadResume = async () => {
            const blob = await fs.read(imagePath);

            if (!blob) return;

            url = URL.createObjectURL(blob);
            setResumeUrl(url);
        };

        loadResume();

        return () => {
            if (url) {
                URL.revokeObjectURL(url);
            }
        };
    }, [imagePath]);

    const handleDelete = async () => {
    const confirmed = window.confirm(
        "Are you sure you want to delete this resume analysis? This action cannot be undone."
    );

    if (!confirmed) return;

    try {
        setIsDeleting(true);

        // Try deleting original PDF
        if (resumePath) {
            try {
                await fs.delete(resumePath);
            } catch (error) {
                console.warn(
                    "Original resume file was already missing:",
                    error
                );
            }
        }

        // Try deleting preview image
        if (imagePath) {
            try {
                await fs.delete(imagePath);
            } catch (error) {
                console.warn(
                    "Resume preview image was already missing:",
                    error
                );
            }
        }

        // Delete the saved resume analysis
        await kv.delete(`resume:${id}`);

        // Remove card from dashboard
        onDelete(id);

    } catch (error) {
        console.error("Failed to delete resume analysis:", error);

        alert(
            "Something went wrong while deleting the resume. Please try again."
        );

        setIsDeleting(false);
    }
};

    return (
        <div className="resume-card animate-in fade-in duration-1000 relative">

            {/* Resume Header */}
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    {companyName && (
                        <h2 className="!text-black font-bold break-words">
                            {companyName}
                        </h2>
                    )}

                    {jobTitle && (
                        <h3 className="text-lg break-words text-gray-500">
                            {jobTitle}
                        </h3>
                    )}

                    {!companyName && !jobTitle && (
                        <h2 className="!text-black font-bold">
                            Resume
                        </h2>
                    )}
                </div>

                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>

            {/* Resume Preview */}
            <Link
                to={`/resume/${id}`}
                className="block"
            >
                {resumeUrl && (
                    <div className="gradient-border animate-in fade-in duration-1000">
                        <div className="w-full h-full">
                            <img
                                src={resumeUrl}
                                alt="resume"
                                className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                            />
                        </div>
                    </div>
                )}
            </Link>

            {/* Card Actions */}
            <div className="flex items-center gap-3 mt-auto">

                <Link
                    to={`/resume/${id}`}
                    className="
                        flex-1
                        text-center
                        py-2.5
                        px-4
                        rounded-xl
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        font-semibold
                        transition
                    "
                >
                    View Analysis
                </Link>

                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="
                        py-2.5
                        px-4
                        rounded-xl
                        border
                        border-red-200
                        text-red-600
                        hover:bg-red-50
                        font-semibold
                        transition
                        cursor-pointer
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                    "
                >
                    {isDeleting ? "Deleting..." : "Delete"}
                </button>

            </div>
        </div>
    );
};

export default ResumeCard;