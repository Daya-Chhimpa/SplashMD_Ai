'use client';

import Navbar from '../components/shared/Navbar';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutTeam from '../components/about/AboutTeam';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <AboutHero />
            <AboutStory />
            <AboutTeam />
        </main>
    );
}
