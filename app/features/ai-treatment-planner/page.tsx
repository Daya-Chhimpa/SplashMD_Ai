import Navbar from '../../components/shared/Navbar';
import TreatmentHero from '../../components/features/TreatmentHero';
import TreatmentWorkflow from '../../components/features/TreatmentWorkflow';
import TreatmentComparison from '../../components/features/TreatmentComparison';
import TreatmentFaq from '../../components/features/TreatmentFaq';
import SecuritySection from '../../components/features/SecuritySection';

export default function AiTreatmentPlannerPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <TreatmentHero />
            <TreatmentWorkflow />
            <TreatmentComparison />
            <div className="bg-slate-50">
                <SecuritySection />
            </div>
            <TreatmentFaq />

            {/* Simple CTA Footer */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                        Start saving 15+ minutes per client request.
                    </h2>
                    <p className="mx-auto max-w-xl text-lg leading-8 text-indigo-100 mb-10">
                        Generate your first comprehensive treatment plan today. No credit card required.
                    </p>
                    <div className="flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-indigo-900 shadow-xl hover:bg-indigo-50 hover:scale-105 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Get started for free
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
