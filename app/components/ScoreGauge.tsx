import { useEffect, useRef, useState } from "react";

const ScoreGauge = ({ score = 75 }: { score: number }) => {
    const [pathLength, setPathLength] = useState(0);
    const pathRef = useRef<SVGPathElement>(null);

    const safeScore = Math.min(100, Math.max(0, score));
    const percentage = safeScore / 100;

    useEffect(() => {
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength());
        }
    }, []);

    const gradientStart =
        safeScore >= 70
            ? "#2563EB"
            : safeScore >= 50
            ? "#F59E0B"
            : "#EF4444";

    const gradientEnd =
        safeScore >= 70
            ? "#06B6D4"
            : safeScore >= 50
            ? "#FBBF24"
            : "#FB7185";

    const scoreText =
        safeScore >= 70
            ? "Strong"
            : safeScore >= 50
            ? "Fair"
            : "Needs Work";

    const textColor =
        safeScore >= 70
            ? "text-blue-600"
            : safeScore >= 50
            ? "text-amber-600"
            : "text-red-500";

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-44 h-24">
                <svg viewBox="0 0 100 55" className="w-full h-full">
                    <defs>
                        <linearGradient
                            id="hirelensGaugeGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor={gradientStart} />
                            <stop offset="100%" stopColor={gradientEnd} />
                        </linearGradient>
                    </defs>

                    <path
                        d="M10,50 A40,40 0 0,1 90,50"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="9"
                        strokeLinecap="round"
                    />

                    <path
                        ref={pathRef}
                        d="M10,50 A40,40 0 0,1 90,50"
                        fill="none"
                        stroke="url(#hirelensGaugeGradient)"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeDasharray={pathLength}
                        strokeDashoffset={pathLength * (1 - percentage)}
                        style={{
                            transition: "stroke-dashoffset 1s ease-out",
                        }}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                    <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-slate-900">
                            {safeScore}
                        </span>
                        <span className="text-sm font-semibold text-slate-400">
                            /100
                        </span>
                    </div>
                </div>
            </div>

            <span
                className={`text-xs font-semibold uppercase tracking-wider ${textColor}`}
            >
                {scoreText}
            </span>
        </div>
    );
};

export default ScoreGauge;