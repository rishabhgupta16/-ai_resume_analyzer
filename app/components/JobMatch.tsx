interface JobMatchProps {
    jobMatch?: {
        score: number;
        summary: string;
        matchedKeywords: string[];
        missingKeywords: string[];
    };
}

const JobMatch = ({ jobMatch }: JobMatchProps) => {
    if (!jobMatch) return null;

    const {
        score = 0,
        summary = "",
        matchedKeywords = [],
        missingKeywords = [],
    } = jobMatch;

    const getScoreStyle = () => {
        if (score >= 80) {
            return {
                text: "text-emerald-600",
                background: "bg-emerald-50",
                border: "border-emerald-200",
                bar: "bg-emerald-500",
                label: "Strong Match",
            };
        }

        if (score >= 60) {
            return {
                text: "text-blue-600",
                background: "bg-blue-50",
                border: "border-blue-200",
                bar: "bg-blue-500",
                label: "Good Match",
            };
        }

        if (score >= 40) {
            return {
                text: "text-amber-600",
                background: "bg-amber-50",
                border: "border-amber-200",
                bar: "bg-amber-500",
                label: "Moderate Match",
            };
        }

        return {
            text: "text-red-600",
            background: "bg-red-50",
            border: "border-red-200",
            bar: "bg-red-500",
            label: "Needs Improvement",
        };
    };

    const scoreStyle = getScoreStyle();

    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-start justify-between gap-6 max-sm:flex-col">
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                            Job Compatibility
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-1">
                            Job Match
                        </h3>
                    </div>

                    <p className="text-slate-500 text-sm max-w-[600px] leading-6">
                        See how closely your resume matches the skills and
                        requirements in the job description.
                    </p>
                </div>

                <div
                    className={`
                        flex
                        flex-col
                        items-center
                        justify-center
                        min-w-[115px]
                        px-5
                        py-4
                        rounded-2xl
                        border
                        ${scoreStyle.background}
                        ${scoreStyle.border}
                    `}
                >
                    <span
                        className={`
                            text-3xl
                            font-bold
                            ${scoreStyle.text}
                        `}
                    >
                        {score}%
                    </span>

                    <span
                        className={`
                            text-xs
                            font-semibold
                            mt-1
                            ${scoreStyle.text}
                        `}
                    >
                        {scoreStyle.label}
                    </span>
                </div>
            </div>

            <div className="mt-6">
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-700 ${scoreStyle.bar}`}
                        style={{
                            width: `${Math.min(Math.max(score, 0), 100)}%`,
                        }}
                    />
                </div>
            </div>

            {summary && (
                <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <p className="text-sm font-semibold text-slate-800 mb-1">
                        AI Match Summary
                    </p>

                    <p className="text-sm text-slate-600 leading-6">
                        {summary}
                    </p>
                </div>
            )}

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-6">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-emerald-600 font-bold">
                                ✓
                            </span>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900">
                                Matched Keywords
                            </h4>

                            <p className="text-xs text-slate-500">
                                Already present in your resume
                            </p>
                        </div>
                    </div>

                    {matchedKeywords.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {matchedKeywords.map((keyword, index) => (
                                <span
                                    key={`${keyword}-${index}`}
                                    className="
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-white
                                        border
                                        border-emerald-200
                                        text-emerald-700
                                        text-xs
                                        font-semibold
                                    "
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-slate-500">
                            No matched keywords identified.
                        </p>
                    )}
                </div>

                <div className="rounded-2xl border border-red-100 bg-red-50/50 p-5">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                            <span className="text-red-600 font-bold">
                                !
                            </span>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900">
                                Missing Keywords
                            </h4>

                            <p className="text-xs text-slate-500">
                                Consider adding these if they reflect your skills
                            </p>
                        </div>
                    </div>

                    {missingKeywords.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {missingKeywords.map((keyword, index) => (
                                <span
                                    key={`${keyword}-${index}`}
                                    className="
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-white
                                        border
                                        border-red-200
                                        text-red-700
                                        text-xs
                                        font-semibold
                                    "
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-slate-500">
                            No important missing keywords identified.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobMatch;