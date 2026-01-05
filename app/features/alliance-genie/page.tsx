import Navbar from '../../components/shared/Navbar';
import GenieHero from '../../components/features/GenieHero';
import GenieFeatures from '../../components/features/GenieFeatures';
import GenieMetrics from '../../components/features/GenieMetrics';
import SecuritySection from '../../components/features/SecuritySection';
import FaqSection from '../../components/features/FaqSection';

export default function AllianceGeniePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <GenieHero />
            <GenieFeatures />
            <GenieMetrics />

            <div className="bg-slate-50 border-t border-slate-200">
                <SecuritySection />
            </div>

            <FaqSection />

            {/* Magical CTA Footer */}
            <div className="bg-gradient-to-r from-fuchsia-900 to-indigo-900 py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl mb-6 font-display">
                        Ready to see the invisible?
                    </h2>
                    <p className="mx-auto max-w-xl text-lg leading-8 text-fuchsia-100 mb-10">
                        Join the top 1% of therapists who use AI to master the art of connection.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#" className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-base font-bold text-fuchsia-900 shadow-xl shadow-fuchsia-900/20 hover:bg-fuchsia-50 hover:scale-105 transition-all">
                            Enable Alliance Genie Free
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-fuchsia-200 transition-colors">
                            Read the Whitepaper <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
