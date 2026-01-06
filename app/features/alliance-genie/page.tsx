import Navbar from '../../components/shared/Navbar';
import GenieHero from '../../components/features/GenieHero';
import GenieFeatures from '../../components/features/GenieFeatures';
import GenieExplainer from '../../components/features/GenieExplainer';
import GenieStandout from '../../components/features/GenieStandout';
import SecuritySection from '../../components/features/SecuritySection';
import FaqSection from '../../components/features/FaqSection';

export default function AllianceGeniePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <GenieHero />

            {/* Trusted By Strip (Mock) */}
            <div className="border-y border-slate-100 bg-slate-50/50 py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
                    <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Trusted by Forward-Thinking Clinicians</p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-60">
                        {/* Simple text logos for now */}
                        <span className="font-bold text-xl text-slate-700">BetterHelp</span>
                        <span className="font-bold text-xl text-slate-700">Talkspace</span>
                        <span className="font-bold text-xl text-slate-700">Headway</span>
                        <span className="font-bold text-xl text-slate-700">Sondermind</span>
                        <span className="font-bold text-xl text-slate-700">Alma</span>
                    </div>
                </div>
            </div>

            <GenieFeatures />
            <GenieExplainer />
            <GenieStandout />

            {/* Reviews / Wall of Love Placeholder */}
            <div className="py-24 bg-white border-t border-slate-100 text-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">"It felt like having a Master Therapist in my ear."</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-2xl">
                                <div className="flex gap-1 text-amber-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 mb-6 text-sm">"Alliance Genie picked up on a rupture I completely missed. I was able to repair it in the next session, and the client opened up more than ever."</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">Dr. Emily R.</div>
                                        <div className="text-slate-500 text-xs">Clinical Psychologist</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing Section (Simple) */}
            <div className="py-24 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Simple, Transparent Pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Starter */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-slate-900">Starter</h3>
                            <div className="text-4xl font-black text-slate-900 mt-4 mb-2">$0</div>
                            <p className="text-slate-500 text-sm mb-6">Forever free</p>
                            <a href="#" className="block w-full py-2.5 rounded-lg border-2 border-slate-200 text-slate-700 font-bold hover:border-slate-300">Get Started</a>
                        </div>
                        {/* Pro */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-indigo-500 relative shadow-xl shadow-indigo-100">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
                            <h3 className="font-bold text-slate-900">Pro</h3>
                            <div className="text-4xl font-black text-slate-900 mt-4 mb-2">$29</div>
                            <p className="text-slate-500 text-sm mb-6">per month</p>
                            <ul className="mb-8 space-y-3 text-left">
                                <li className="flex gap-2 text-sm text-slate-600"><span className="text-indigo-600">✓</span> High-Res Audio Analysis</li>
                                <li className="flex gap-2 text-sm text-slate-600"><span className="text-indigo-600">✓</span> Unlimited Reports</li>
                            </ul>
                            <a href="#" className="block w-full py-2.5 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700">Start Free Trial</a>
                        </div>
                        {/* Team */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-slate-900">Clinic</h3>
                            <div className="text-4xl font-black text-slate-900 mt-4 mb-2">$99</div>
                            <p className="text-slate-500 text-sm mb-6">per seat / month</p>
                            <a href="#" className="block w-full py-2.5 rounded-lg border-2 border-slate-200 text-slate-700 font-bold hover:border-slate-300">Contact Sales</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <SecuritySection />
            </div>

            <FaqSection />

            {/* Footer CTA */}
            <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                        Strengthen your therapeutic alliance <br /> with clarity and confidence.
                    </h2>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="rounded-full bg-indigo-600 px-8 py-3.5 text-base font-bold text-white shadow-xl hover:bg-indigo-500 transition-all">
                            Get started for free
                        </a>
                    </div>
                    <p className="mt-4 text-slate-400 text-sm">No credit card required. Cancel anytime.</p>
                </div>
            </div>
        </main>
    )
}
