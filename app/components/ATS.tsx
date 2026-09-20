import React from "react";

interface Suggestion {
    type: "good" | "improve";
    tip: string;
}

interface ATSProps {
    score: number;
    suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    const status =
        score >= 70
            ? "ATS Friendly"
            : score >= 50
            ? "Moderate Match"
            : "Needs Optimization";

    const scoreColor =
        score >= 70
            ? "text-emerald-600"
            : score >= 50
            ? "text-amber-600"
            : "text-red-500";

    const barColor =
        score >= 70
            ? "bg-emerald-500"
            : score >= 50
            ? "bg-amber-500"
            : "bg-red-500";

    const statusStyle =
        score >= 70
            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
            : score >= 50
            ? "bg-amber-50 text-amber-700 border-amber-200"
            : "bg-red-50 text-red-600 border-red-200";

    return (
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">

            <div className="p-6 border-b border-slate-100">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                            Applicant Tracking System
                        </p>

                        <h2 className="!text-2xl !text-slate-900 font-bold mt-1">
                            ATS Compatibility
                        </h2>

                        <p className="text-sm text-slate-500 mt-2">
                            See how effectively your resume can be read and
                            evaluated by Applicant Tracking Systems.
                        </p>
                    </div>

                    <div className="text-right shrink-0">
                        <div>
                            <span className={`text-3xl font-bold ${scoreColor}`}>
                                {score}
                            </span>

                            <span className="text-sm text-slate-400 font-medium">
                                /100
                            </span>
                        </div>

                        <span
                            className={`inline-flex mt-2 px-3 py-1 rounded-full border text-xs font-semibold ${statusStyle}`}
                        >
                            {status}
                        </span>
                    </div>
                </div>

                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-5">
                    <div
                        className={`h-full rounded-full ${barColor} transition-all duration-700`}
                        style={{
                            width: `${Math.min(100, Math.max(0, score))}%`,
                        }}
                    />
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">
                    ATS Insights
                </h3>

                <div className="flex flex-col gap-3">
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className={`
                                flex items-start gap-3
                                p-4 rounded-2xl border
                                ${
                                    suggestion.type === "good"
                                        ? "bg-emerald-50/60 border-emerald-100"
                                        : "bg-amber-50/60 border-amber-100"
                                }
                            `}
                        >
                            <div
                                className={`
                                    flex items-center justify-center
                                    w-7 h-7 rounded-full shrink-0
                                    ${
                                        suggestion.type === "good"
                                            ? "bg-emerald-100"
                                            : "bg-amber-100"
                                    }
                                `}
                            >
                                <img
                                    src={
                                        suggestion.type === "good"
                                            ? "/icons/check.svg"
                                            : "/icons/warning.svg"
                                    }
                                    alt={
                                        suggestion.type === "good"
                                            ? "Positive"
                                            : "Suggestion"
                                    }
                                    className="w-4 h-4"
                                />
                            </div>

                            <p
                                className={`text-sm leading-relaxed ${
                                    suggestion.type === "good"
                                        ? "text-emerald-800"
                                        : "text-amber-800"
                                }`}
                            >
                                {suggestion.tip}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-5 pt-5 border-t border-slate-100">
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Improve the highlighted areas to strengthen your resume's
                        compatibility with automated screening systems.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ATS;