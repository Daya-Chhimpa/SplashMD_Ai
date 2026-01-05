import Navbar from "./components/shared/Navbar";
import AiDoctor from "./components/home/AiDoctor";
import NoteGenerator from "./components/home/NoteGenerator";
import TrustSection from "./components/home/TrustSection";
import HowItWorks from "./components/home/HowItWorks";
import FeaturesGrid from "./components/home/FeaturesGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-12 pb-20 lg:pt-16 lg:pb-24">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-50/50 via-white to-transparent pointer-events-none z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6">
              Your Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Medical Workspace</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Streamline your clinical documentation and get instant medical decision support with our advanced AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start mb-24">
            {/* Left: AI Chat */}
            <div className="w-full">
              <div className="mb-4 flex items-center justify-between px-2">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </span>
                  AI Consultation
                </h3>
              </div>
              <AiDoctor />
            </div>

            {/* Right: Note Generator */}
            <div className="w-full">
              <div className="mb-4 flex items-center justify-between px-2">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
                  </span>
                  Clinical Documentation
                </h3>
                <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-700">Beta</span>
              </div>
              <NoteGenerator />
            </div>
          </div>
        </div>
      </div>

      <TrustSection />
      <HowItWorks />
      <FeaturesGrid />

      {/* Footer Area (Simple) */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-slate-500">
          <p>&copy; 2026 SplashMD. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
