'use client';

import Navbar from '../components/shared/Navbar';
import PricingTable from '../components/pricing/PricingTable';

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <PricingTable />
        </main>
    );
}
