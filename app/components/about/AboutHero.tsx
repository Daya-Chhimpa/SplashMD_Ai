'use client';

export default function AboutHero() {
    return (
        <div className="relative isolate overflow-hidden bg-slate-50 py-24 sm:py-32">
            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[80rem] rounded-full bg-gradient-to-tr from-indigo-100 to-violet-100 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                        We’re changing the way therapy is documented.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        SplashMD was founded with a simple mission: to help therapists focus on their patients, not their paperwork. By leveraging advanced AI, we automate specific documentation tasks without compromising privacy or quality.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-slate-900 sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a href="#" className="hover:text-indigo-600 transition-colors">
                            Open roles <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">
                            Internship program <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">
                            Our values <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">
                            Meet our leadership <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { label: 'Therapists Empowered', value: '500+' },
                            { label: 'Hours Saved Weekly', value: '2,000+' },
                            { label: 'Notes Generated', value: '50k+' },
                            { label: 'Support Response', value: '< 24h' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-slate-600">{stat.label}</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-indigo-900">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
