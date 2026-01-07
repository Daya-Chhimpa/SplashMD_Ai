'use client';

const timeline = [
    {
        name: 'Founded by Clinicians',
        description:
            'SplashMD began as a side project by a group of therapists tired of spending their evenings writing notes instead of recharging.',
        date: 'Aug 2021',
        dateTime: '2021-08',
    },
    {
        name: 'First Beta Launch',
        description:
            'We launched our first beta to a small group of 50 local therapists. The feedback was overwhelming: "This changed my life."',
        date: 'Dec 2021',
        dateTime: '2021-12',
    },
    {
        name: 'Seed Funding',
        description:
            'Secured funding to expand our engineering team and build the proprietary AI models that power our accurate scribing today.',
        date: 'Feb 2022',
        dateTime: '2022-02',
    },
    {
        name: 'Global Expansion',
        description:
            'Expanded support for multiple languages and specialized therapy modalities, reaching clinicians across 15 countries.',
        date: 'Dec 2023',
        dateTime: '2023-12',
    },
];

export default function AboutStory() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <div>
                        <time dateTime={timeline[0].dateTime} className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
                            <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                <circle cx={2} cy={2} r={2} fill="currentColor" />
                            </svg>
                            {timeline[0].date}
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900">{timeline[0].name}</p>
                        <p className="mt-1 text-base leading-7 text-slate-600">{timeline[0].description}</p>
                    </div>
                    <div>
                        <time dateTime={timeline[1].dateTime} className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
                            <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                <circle cx={2} cy={2} r={2} fill="currentColor" />
                            </svg>
                            {timeline[1].date}
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900">{timeline[1].name}</p>
                        <p className="mt-1 text-base leading-7 text-slate-600">{timeline[1].description}</p>
                    </div>
                    <div>
                        <time dateTime={timeline[2].dateTime} className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
                            <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                <circle cx={2} cy={2} r={2} fill="currentColor" />
                            </svg>
                            {timeline[2].date}
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900">{timeline[2].name}</p>
                        <p className="mt-1 text-base leading-7 text-slate-600">{timeline[2].description}</p>
                    </div>
                    <div>
                        <time dateTime={timeline[3].dateTime} className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
                            <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                <circle cx={2} cy={2} r={2} fill="currentColor" />
                            </svg>
                            {timeline[3].date}
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900">{timeline[3].name}</p>
                        <p className="mt-1 text-base leading-7 text-slate-600">{timeline[3].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
