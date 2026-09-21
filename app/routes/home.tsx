import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HireLens AI | AI Resume Analyzer" },
    {
      name: "description",
      content:
        "Analyze your resume with AI-powered insights and get actionable feedback for your next opportunity.",
    },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();

  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list("resume:*", true)) as KVItem[];

      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume
      );

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };

    loadResumes();
  }, []);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Make Your Resume Stand Out with AI</h1>

          {!loadingResumes && resumes?.length === 0 ? (
            <h2>
              Upload your resume and get instant AI-powered insights to improve
              your chances of landing your next opportunity.
            </h2>
          ) : (
            <h2>
              Review your resumes, track your scores, and discover personalized
              suggestions to improve your applications.
            </h2>
          )}
        </div>

        {/* Loading State */}
        {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/resume-scan-2.gif"
              className="w-[200px]"
              alt="Analyzing resumes"
            />
          </div>
        )}

        {/* Resume Cards */}
        {!loadingResumes && resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard
                key={resume.id}
                resume={resume}
                onDelete={(id) =>
                  setResumes((currentResumes) =>
                    currentResumes.filter(
                      (resume) => resume.id !== id
                    )
                  )
                }
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link
              to="/upload"
              className="primary-button w-fit text-xl font-semibold"
            >
              Analyze My Resume
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}