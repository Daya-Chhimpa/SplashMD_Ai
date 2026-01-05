export default function TrustSection() {
    return (
        <section className="py-12 border-y border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">Trusted by 25,000+ Clinicians & Organizations</p>
                <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 opacity-60 grayscale transition-all hover:grayscale-0">
                    {/* Placeholders for logos, using text for now or simple SVGs to represent generic medical orgs */}
                    {[
                        { name: "HealthPlus", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                        { name: "MediCare", icon: "M19 14c1.49-1.28 3.6-2.34 4.93-2.756l-11.838-.002V8.95L8.4 11.248l-1.921-.497L9.9 5.86l.63.159V3.41H8.08V1.662H15.92v1.748h-2.45v2.61l.63-.16 3.42 4.89-1.92.498 2.302 2.298V14z" },
                        { name: "ClinicSoft", icon: "M3 21h18v-8H3v8zm6-4h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 11h18V3H3v8zm6-4h2v2H9V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7z" },
                        { name: "TherapyNow", icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" },
                        { name: "DocAssist", icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" },
                    ].map((logo, i) => (
                        <div key={i} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center gap-2">
                            <svg className="h-8 w-8 text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d={logo.icon} /></svg>
                            <span className="font-bold text-slate-700 text-lg">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
