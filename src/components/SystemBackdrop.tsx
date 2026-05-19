const SystemBackdrop = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.18]" aria-hidden="true">
            <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 1600 2200" preserveAspectRatio="none">
                <g fill="none" stroke="hsl(var(--primary))" strokeWidth="2.6">
                    <path d="M92 260 H240 V360 H420 V230 H610 V330 H780" strokeDasharray="10 16"/>
                    <path d="M1120 190 H1310 V315 H1480" strokeDasharray="8 14"/>
                    <path d="M960 520 C1120 360 1270 610 1480 430" strokeDasharray="9 15"/>
                    <path d="M120 980 C290 810 465 1080 660 890 S1010 720 1290 940" strokeDasharray="10 16"/>
                    <path d="M1030 1260 H1190 V1375 H1400 V1295 H1510" strokeDasharray="8 14"/>
                    <path d="M180 1640 H365 V1740 H555 V1585 H780" strokeDasharray="10 16"/>
                    <path d="M820 1840 C980 1670 1150 1920 1420 1715" strokeDasharray="9 15"/>
                </g>

                <g fill="hsl(var(--primary))">
                    <circle cx="240" cy="360" r="12"/>
                    <circle cx="420" cy="230" r="12"/>
                    <circle cx="610" cy="330" r="12"/>
                    <circle cx="1310" cy="315" r="12"/>
                    <circle cx="465" cy="1080" r="12"/>
                    <circle cx="1010" cy="720" r="12"/>
                    <circle cx="1190" cy="1375" r="12"/>
                    <circle cx="555" cy="1585" r="12"/>
                    <circle cx="1150" cy="1920" r="12"/>
                </g>

                <g stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.85">
                    <rect x="96" y="210" width="72" height="48" rx="8"/>
                    <rect x="742" y="300" width="72" height="48" rx="8"/>
                    <rect x="1080" y="142" width="72" height="48" rx="8"/>
                    <rect x="1440" y="402" width="72" height="48" rx="8"/>
                    <rect x="132" y="1592" width="72" height="48" rx="8"/>
                    <rect x="742" y="1558" width="72" height="48" rx="8"/>
                    <rect x="1388" y="1688" width="72" height="48" rx="8"/>
                </g>
            </svg>
        </div>
    );
};

export default SystemBackdrop;
