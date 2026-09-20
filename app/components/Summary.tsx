import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({
    title,
    score,
}: {
    title: string;
    score: number;
}) => {
    const textColor =
        score > 70
            ? "text-emerald-600"
            : score > 49
            ? "text-amber-600"
            : "text-red-600";

    return (
        <div className="px-5">
            <div
                className="
                    flex items-center justify-between
                    py-4 px-5
                    bg-slate-50
                    border border-slate-100
                    rounded-2xl
                    transition-all duration-200
                    hover:border-blue-200
                    hover:bg-blue-50/40
                "
            >
                <div className="flex items-center gap-3">
                    <p className="text-base sm:text-lg font-semibold text-slate-700">
                        {title}
                    </p>

                    <ScoreBadge score={score} />
                </div>

                <p className="text-lg sm:text-xl font-bold">
                    <span className={textColor}>{score}</span>
                    <span className="text-slate-400 text-sm font-medium">
                        /100
                    </span>
                </p>
            </div>
        </div>
    );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
    return (
        <div
            className="
                bg-white
                rounded-3xl
                border border-slate-200
                shadow-sm
                w-full
                overflow-hidden
            "
        >
            {/* Overall Score */}
            <div className="flex flex-row max-sm:flex-col items-center p-6 gap-6">
                <div className="shrink-0">
                    <ScoreGauge score={feedback.overallScore} />
                </div>

                <div className="flex flex-col gap-2 max-sm:text-center">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        Overall Performance
                    </p>

                    <h2 className="!text-2xl !text-slate-900 font-bold">
                        Your Resume Score
                    </h2>

                    <p className="text-sm text-slate-500 leading-relaxed">
                        Your score is based on content quality, structure,
                        skills, tone, and overall resume effectiveness.
                    </p>
                </div>
            </div>

            <div className="border-t border-slate-100" />

            {/* Score Categories */}
            <div className="flex flex-col gap-3 py-5">
                <Category
                    title="Tone & Style"
                    score={feedback.toneAndStyle.score}
                />

                <Category
                    title="Content"
                    score={feedback.content.score}
                />

                <Category
                    title="Structure"
                    score={feedback.structure.score}
                />

                <Category
                    title="Skills"
                    score={feedback.skills.score}
                />
            </div>
        </div>
    );
};

export default Summary;