import Navbar from '../../components/shared/Navbar';
import AiNoteTaker from '../../components/features/AiNoteTaker';
import BenefitsSection from '../../components/features/BenefitsSection';
import SecuritySection from '../../components/features/SecuritySection';
import FaqSection from '../../components/features/FaqSection';

export default function AiNoteTakerPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="border-b border-slate-200 bg-slate-50/50 py-24 text-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                        AI Note Taker
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
                        Focus on your patient, not your screen.
                    </p>
                </div>
            </div>

            <AiNoteTaker />
            <BenefitsSection />
            <SecuritySection />
            <FaqSection />

            {/* Simple CTA Footer for this page */}
            <div className="bg-slate-900 py-16 text-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                        Ready to transform your practice?
                    </h2>
                    <p className="mx-auto max-w-xl text-lg leading-8 text-slate-300 mb-10">
                        Join thousands of clinicians who are saving hours every week with SplashMD.
                    </p>
                    <div className="flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Get started for free
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-indigo-300">
                            Book a demo <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
