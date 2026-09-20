import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const meta = () => [
    { title: "HireLens AI | Sign In" },
    {
        name: "description",
        content: "Sign in to HireLens AI and continue your resume analysis.",
    },
];

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const navigate = useNavigate();

    const next =
        new URLSearchParams(location.search).get("next") || "/";

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate(next);
        }
    }, [auth.isAuthenticated, next]);

    return (
        <main
            className="
                min-h-screen
                flex
                items-center
                justify-center
                px-5
                bg-[url('/images/bg-auth.svg')]
                bg-cover
                bg-center
            "
        >
            <div className="w-full max-w-[620px]">

                {/* Brand */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                        <div
                            className="
                                w-10 h-10
                                rounded-xl
                                primary-gradient
                                flex items-center justify-center
                                text-white
                                font-bold
                                text-lg
                                shadow-md
                            "
                        >
                            H
                        </div>

                        <span className="text-2xl font-bold text-gradient">
                            HireLens AI
                        </span>
                    </div>
                </div>

                {/* Login Card */}
                <section
                    className="
                        flex
                        flex-col
                        gap-8
                        bg-white
                        rounded-3xl
                        p-10
                        max-sm:p-7
                        border
                        border-slate-200
                        shadow-xl
                    "
                >
                    <div className="flex flex-col items-center gap-4 text-center">

                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                            AI-Powered Resume Intelligence
                        </p>

                        <h1 className="!text-5xl max-sm:!text-4xl">
                            Welcome to HireLens
                        </h1>

                        <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                            Sign in to analyze your resume, check ATS compatibility,
                            and receive personalized AI-powered feedback.
                        </p>

                    </div>

                    <div className="w-full">

                        {isLoading ? (
                            <button
                                className="auth-button animate-pulse"
                                disabled
                            >
                                <p>Signing you in...</p>
                            </button>
                        ) : auth.isAuthenticated ? (
                            <button
                                className="auth-button"
                                onClick={auth.signOut}
                            >
                                <p>Sign Out</p>
                            </button>
                        ) : (
                            <button
                                className="auth-button"
                                onClick={auth.signIn}
                            >
                                <p>Continue to HireLens AI</p>
                            </button>
                        )}

                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-4 h-4"
                        >
                            <rect
                                width="14"
                                height="11"
                                x="5"
                                y="10"
                                rx="2"
                            />
                            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                        </svg>

                        <span>
                            Secure authentication powered by Puter
                        </span>
                    </div>

                </section>

                <p className="text-center text-sm text-slate-400 mt-6">
                    Analyze • Improve • Apply with confidence
                </p>

            </div>
        </main>
    );
};

export default Auth;