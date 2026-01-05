import Navbar from '../../components/shared/Navbar';
import TrackerHero from '../../components/features/TrackerHero';
import TrackerWorkflow from '../../components/features/TrackerWorkflow';
import TrackerFeatures from '../../components/features/TrackerFeatures';
import TrackerFaq from '../../components/features/TrackerFaq';
import SecuritySection from '../../components/features/SecuritySection';

export default function AiProgressTrackerPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <TrackerHero />
            <TrackerWorkflow />
            <TrackerFeatures />
            <div className="bg-slate-50">
                <SecuritySection />
            </div>
            <TrackerFaq />

            {/* Simple CTA Footer */}
            <div className="border-t border-slate-200 bg-white py-20 text-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                        Data-driven care, human-centered delivery.
                    </h2>
                    <p className="mx-auto max-w-xl text-lg text-slate-600 mb-10">
                        Start tracking outcomes today and demonstrate the value of your care.
                    </p>
                    <div className="flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-full bg-slate-900 px-8 py-3.5 text-base font-bold text-white shadow-xl hover:bg-indigo-600 hover:shadow-indigo-200 transition-all">
                            Get started for free
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
