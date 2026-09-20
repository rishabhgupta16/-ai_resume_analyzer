import { type FormEvent, useState } from "react";
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { convertPdfToImage } from "~/lib/pdf2img";
import { generateUUID } from "~/lib/utils";
import { prepareInstructions } from "../../constants";

const Upload = () => {
    const { auth, isLoading, fs, ai, kv } = usePuterStore();
    const navigate = useNavigate();

    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect = (file: File | null) => {
        setFile(file);
    };

    const handleAnalyze = async ({
        companyName,
        jobTitle,
        jobDescription,
        file,
    }: {
        companyName: string;
        jobTitle: string;
        jobDescription: string;
        file: File;
    }) => {
        setIsProcessing(true);

        setStatusText("Uploading your resume...");
        const uploadedFile = await fs.upload([file]);

        if (!uploadedFile)
            return setStatusText("Error: Failed to upload file");

        setStatusText("Preparing your resume for analysis...");
        const imageFile = await convertPdfToImage(file);

        if (!imageFile.file)
            return setStatusText("Error: Failed to convert PDF to image");

        const uploadedImage = await fs.upload([imageFile.file]);

        if (!uploadedImage)
            return setStatusText("Error: Failed to upload image");

        setStatusText("Preparing AI analysis...");

        const uuid = generateUUID();

        const data = {
            id: uuid,
            resumePath: uploadedFile.path,
            imagePath: uploadedImage.path,
            companyName,
            jobTitle,
            jobDescription,
            feedback: "",
        };

        await kv.set(`resume:${uuid}`, JSON.stringify(data));

        setStatusText("AI is analyzing your resume...");

        const feedback = await ai.feedback(
            uploadedFile.path,
            prepareInstructions({ jobTitle, jobDescription })
        );

        if (!feedback)
            return setStatusText("Error: Failed to analyze resume");

        const feedbackText =
            typeof feedback.message.content === "string"
                ? feedback.message.content
                : feedback.message.content[0].text;

        data.feedback = JSON.parse(feedbackText);

        await kv.set(`resume:${uuid}`, JSON.stringify(data));

        setStatusText("Analysis complete! Preparing your results...");

        console.log(data);

        navigate(`/resume/${uuid}`);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget.closest("form");

        if (!form) return;

        const formData = new FormData(form);

        const companyName = formData.get("company-name") as string;
        const jobTitle = formData.get("job-title") as string;
        const jobDescription = formData.get("job-description") as string;

        if (!file) return;

        handleAnalyze({
            companyName,
            jobTitle,
            jobDescription,
            file,
        });
    };

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />

            <section className="main-section">
                <div className="page-heading py-16">

                    <div className="flex flex-col items-center gap-4">
                        <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                            AI-Powered Resume Analysis
                        </p>

                        <h1>
                            Optimize Your Resume.
                            <br />
                            Land Better Opportunities.
                        </h1>

                        {!isProcessing && (
                            <h2>
                                Get an ATS score, AI-powered feedback, and
                                personalized suggestions tailored to your target job.
                            </h2>
                        )}
                    </div>

                    {isProcessing ? (
                        <div className="flex flex-col items-center gap-6 w-full mt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>

                                <p className="text-xl font-semibold text-slate-700">
                                    {statusText}
                                </p>
                            </div>

                            <img
                                src="/images/resume-scan.gif"
                                className="w-full max-w-[650px]"
                                alt="HireLens AI analyzing resume"
                            />

                            <p className="text-slate-500 text-sm">
                                Please keep this page open while HireLens AI reviews
                                your resume.
                            </p>
                        </div>
                    ) : (
                        <form
                            id="upload-form"
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 mt-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-lg"
                        >
                            <div className="form-div">
                                <label
                                    htmlFor="company-name"
                                    className="font-semibold"
                                >
                                    Target Company
                                </label>

                                <input
                                    type="text"
                                    name="company-name"
                                    placeholder="e.g. Google, Microsoft, TCS"
                                    id="company-name"
                                />
                            </div>

                            <div className="form-div">
                                <label
                                    htmlFor="job-title"
                                    className="font-semibold"
                                >
                                    Target Job Role
                                </label>

                                <input
                                    type="text"
                                    name="job-title"
                                    placeholder="e.g. Frontend Developer"
                                    id="job-title"
                                />
                            </div>

                            <div className="form-div">
                                <label
                                    htmlFor="job-description"
                                    className="font-semibold"
                                >
                                    Job Description
                                </label>

                                <textarea
                                    rows={5}
                                    name="job-description"
                                    placeholder="Paste the job description here so HireLens AI can evaluate how well your resume matches the role."
                                    id="job-description"
                                />
                            </div>

                            <div className="form-div">
                                <label
                                    htmlFor="uploader"
                                    className="font-semibold"
                                >
                                    Upload Your Resume
                                </label>

                                <FileUploader
                                    onFileSelect={handleFileSelect}
                                />

                                <p className="text-sm text-slate-500 mt-1">
                                    Upload your resume in PDF format for analysis.
                                </p>
                            </div>

                            <button
                                className="primary-button text-lg py-3 mt-2"
                                type="submit"
                            >
                                Analyze My Resume
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Upload;