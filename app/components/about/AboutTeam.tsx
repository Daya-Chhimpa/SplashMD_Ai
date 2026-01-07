'use client';

const people = [
    {
        name: 'Dr. Sarah Jensen',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Former Clinical Psychologist with 15+ years of experience. Sarah understands the burnout problem firsthand.',
    },
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'AI Researcher formerly at Google deep learning division. Passionate about applying AI to healthcare.',
    },
    {
        name: 'Dries Vincent',
        role: 'Head of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Product veteran ensuring our tools are intuitive, safe, and actually helpful in a clinical setting.',
    },
    {
        name: 'Lindsay Walton',
        role: 'Head of Customer Success',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Dedicated to ensuring every practice onboarding with SplashMD succeeds from day one.',
    },
];

export default function AboutTeam() {
    return (
        <div className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                    </p>
                </div>
                <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {people.map((person) => (
                        <li key={person.name}>
                            <img className="aspect-[3/3] w-full rounded-2xl object-cover shadow-lg" src={person.imageUrl} alt="" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900">{person.name}</h3>
                            <p className="text-base leading-7 text-indigo-600">{person.role}</p>
                            <p className="mt-4 text-sm leading-6 text-slate-600">{person.bio}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
