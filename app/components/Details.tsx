import { cn } from "~/lib/utils";
import {
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionItem,
} from "./Accordion";

const ScoreBadge = ({ score }: { score: number }) => {
    return (
        <div
            className={cn(
                "flex items-center gap-1.5 px-3 py-1 rounded-full border",
                score >= 70
                    ? "bg-emerald-50 border-emerald-200"
                    : score >= 50
                    ? "bg-amber-50 border-amber-200"
                    : "bg-red-50 border-red-200"
            )}
        >
            <div
                className={cn(
                    "w-2 h-2 rounded-full",
                    score >= 70
                        ? "bg-emerald-500"
                        : score >= 50
                        ? "bg-amber-500"
                        : "bg-red-500"
                )}
            />

            <p
                className={cn(
                    "text-xs font-bold",
                    score >= 70
                        ? "text-emerald-700"
                        : score >= 50
                        ? "text-amber-700"
                        : "text-red-600"
                )}
            >
                {score}/100
            </p>
        </div>
    );
};

const CategoryHeader = ({
    title,
    categoryScore,
}: {
    title: string;
    categoryScore: number;
}) => {
    return (
        <div className="flex flex-row gap-3 items-center py-2">
            <p className="text-xl font-bold text-slate-800">
                {title}
            </p>

            <ScoreBadge score={categoryScore} />
        </div>
    );
};

const CategoryContent = ({
    tips,
}: {
    tips: {
        type: "good" | "improve";
        tip: string;
        explanation: string;
    }[];
}) => {
    return (
        <div className="flex flex-col gap-5 w-full pb-2">

            <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Quick Overview
                </p>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                    {tips.map((tip, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex gap-3 items-start p-3 rounded-xl border",
                                tip.type === "good"
                                    ? "bg-emerald-50/50 border-emerald-100"
                                    : "bg-amber-50/50 border-amber-100"
                            )}
                        >
                            <img
                                src={
                                    tip.type === "good"
                                        ? "/icons/check.svg"
                                        : "/icons/warning.svg"
                                }
                                alt={
                                    tip.type === "good"
                                        ? "Positive"
                                        : "Improve"
                                }
                                className="size-4 mt-0.5 shrink-0"
                            />

                            <p className="text-sm font-medium text-slate-700 leading-relaxed">
                                {tip.tip}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Detailed Feedback
                </p>

                <div className="flex flex-col gap-3">
                    {tips.map((tip, index) => (
                        <div
                            key={index + tip.tip}
                            className={cn(
                                "flex flex-col gap-2 rounded-2xl p-4 border",
                                tip.type === "good"
                                    ? "bg-emerald-50/50 border-emerald-100"
                                    : "bg-amber-50/50 border-amber-100"
                            )}
                        >
                            <div className="flex gap-2 items-center">
                                <img
                                    src={
                                        tip.type === "good"
                                            ? "/icons/check.svg"
                                            : "/icons/warning.svg"
                                    }
                                    alt={
                                        tip.type === "good"
                                            ? "Positive"
                                            : "Improve"
                                    }
                                    className="size-4 shrink-0"
                                />

                                <p
                                    className={cn(
                                        "text-base font-bold",
                                        tip.type === "good"
                                            ? "text-emerald-800"
                                            : "text-amber-800"
                                    )}
                                >
                                    {tip.tip}
                                </p>
                            </div>

                            <p className="text-sm text-slate-600 leading-relaxed pl-6">
                                {tip.explanation}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden w-full">

            <div className="p-6 border-b border-slate-100">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Detailed Analysis
                </p>

                <h2 className="!text-2xl !text-slate-900 font-bold mt-1">
                    Resume Breakdown
                </h2>

                <p className="text-sm text-slate-500 mt-2">
                    Explore each category to understand what's working and
                    where your resume can improve.
                </p>
            </div>

            <div className="px-6">
                <Accordion>
                    <AccordionItem id="tone-style">
                        <AccordionHeader itemId="tone-style">
                            <CategoryHeader
                                title="Tone & Style"
                                categoryScore={feedback.toneAndStyle.score}
                            />
                        </AccordionHeader>

                        <AccordionContent itemId="tone-style">
                            <CategoryContent
                                tips={feedback.toneAndStyle.tips}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem id="content">
                        <AccordionHeader itemId="content">
                            <CategoryHeader
                                title="Content"
                                categoryScore={feedback.content.score}
                            />
                        </AccordionHeader>

                        <AccordionContent itemId="content">
                            <CategoryContent
                                tips={feedback.content.tips}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem id="structure">
                        <AccordionHeader itemId="structure">
                            <CategoryHeader
                                title="Structure"
                                categoryScore={feedback.structure.score}
                            />
                        </AccordionHeader>

                        <AccordionContent itemId="structure">
                            <CategoryContent
                                tips={feedback.structure.tips}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem id="skills">
                        <AccordionHeader itemId="skills">
                            <CategoryHeader
                                title="Skills"
                                categoryScore={feedback.skills.score}
                            />
                        </AccordionHeader>

                        <AccordionContent itemId="skills">
                            <CategoryContent
                                tips={feedback.skills.tips}
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Details;