'use client';

import { useState } from 'react';

const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const tiers = [
    {
        name: 'Starter',
        id: 'tier-starter',
        href: '#',
        price: { monthly: '$15', annually: '$144' },
        description: 'Everything necessary to get started.',
        features: ['5 Products', 'Up to 1,000 Subscribers', 'Basic Analytics', '48-hour Support Response'],
    },
    {
        name: 'Growth',
        id: 'tier-growth',
        href: '#',
        price: { monthly: '$30', annually: '$288' },
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            '25 Products',
            'Up to 10,000 Subscribers',
            'Advanced Analytics',
            '24-hour Support Response',
            'Marketing Automations',
        ],
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        price: { monthly: '$60', annually: '$576' },
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited Products',
            'Unlimited Subscribers',
            'Custom Reporting',
            '1-hour Support Response',
            'Marketing Automations',
            'Custom Integrations',
        ],
    },
];

const featureComparison = [
    {
        category: 'Content & Videos', features: [
            { name: 'Access to All Courses', starter: true, growth: true, enterprise: true },
            { name: 'Course Materials', starter: true, growth: true, enterprise: true },
            { name: 'Exclusive Content', starter: false, growth: true, enterprise: true },
            { name: '4K Video Quality', starter: false, growth: true, enterprise: true },
        ]
    },
    {
        category: 'Core Features', features: [
            { name: 'AI Note Taker', starter: 'Basic', growth: 'Advanced', enterprise: 'Premium' },
            { name: 'Sessions/Month', starter: '5', growth: '20', enterprise: 'Unlimited' },
            { name: 'Treatment Plans', starter: false, growth: true, enterprise: true },
            { name: 'Alliance Genie™', starter: false, growth: true, enterprise: true },
        ]
    },
    {
        category: 'Support', features: [
            { name: 'Email Support', starter: true, growth: true, enterprise: true },
            { name: 'Priority Support', starter: false, growth: true, enterprise: true },
            { name: 'Dedicated Account Manager', starter: false, growth: false, enterprise: true },
        ]
    },
];

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function XIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
        </svg>
    )
}

function MinusIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
        </svg>
    )
}


export default function PricingTable() {
    const [frequency, setFrequency] = useState(frequencies[0]);
    const [selectedTier, setSelectedTier] = useState<string>(tiers[1].id); // Default to Growth

    return (
        <div className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Pricing plans for teams of&nbsp;all&nbsp;sizes
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
                    Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
                </p>

                {/* Frequency Toggle */}
                <div className="mt-16 flex justify-center">
                    <div className="grid grid-cols-2 gap-x-1 rounded-full bg-white p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-slate-200">
                        {frequencies.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => setFrequency(option)}
                                className={`cursor-pointer rounded-full px-2.5 py-1 transition-all ${frequency.value === option.value
                                        ? 'bg-indigo-600 text-white shadow-sm'
                                        : 'text-slate-500 hover:bg-slate-50'
                                    }`}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => {
                        const isSelected = selectedTier === tier.id;
                        return (
                            <div
                                key={tier.id}
                                onClick={() => setSelectedTier(tier.id)}
                                className={`relative rounded-3xl p-8 transition-all duration-300 cursor-pointer ${isSelected
                                        ? 'bg-white ring-2 ring-indigo-600 shadow-xl scale-105 z-10'
                                        : 'bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md hover:scale-[1.02]'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={`text-lg font-semibold leading-8 ${isSelected ? 'text-indigo-600' : 'text-slate-900'
                                            }`}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.id === 'tier-growth' && (
                                        <p className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                                            Most popular
                                        </p>
                                    )}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-slate-600">{tier.description}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-slate-900">
                                        {tier.price[frequency.value as keyof typeof tier.price]}
                                    </span>
                                    <span className="text-sm font-semibold leading-6 text-slate-600">{frequency.priceSuffix}</span>
                                </p>
                                <a
                                    href={tier.href}
                                    aria-describedby={tier.id}
                                    className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${isSelected
                                            ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                                            : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 focus-visible:outline-indigo-600'
                                        }`}
                                >
                                    {isSelected ? 'Selected Plan' : 'Select Plan'}
                                </a>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Feature Comparison Table */}
                <div className="mt-24 flow-root">
                    <div className="isolate -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Compare Features</h3>
                            <table className="min-w-full divide-y divide-slate-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-0">
                                            Feature
                                        </th>
                                        {tiers.map((tier) => (
                                            <th key={tier.id} scope="col" className={`px-3 py-3.5 text-center text-sm font-semibold ${selectedTier === tier.id ? 'text-indigo-600' : 'text-slate-900'}`}>
                                                {tier.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white">
                                    {featureComparison.map((category) => (
                                        <>
                                            <tr key={category.category} className="bg-slate-50">
                                                <td colSpan={4} className="py-2.5 pl-4 pr-3 text-left text-sm font-bold text-slate-900 sm:pl-3">
                                                    {category.category}
                                                </td>
                                            </tr>
                                            {category.features.map((feature) => (
                                                <tr key={feature.name} className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-3">
                                                        {feature.name}
                                                    </td>
                                                    <td className={`whitespace-nowrap px-3 py-4 text-center text-sm ${selectedTier === 'tier-starter' ? 'bg-indigo-50/30' : ''}`}>
                                                        {typeof feature.starter === 'boolean' ? (
                                                            feature.starter ? <CheckIcon className="h-5 w-5 mx-auto text-indigo-600" /> : <MinusIcon className="h-5 w-5 mx-auto text-slate-300" />
                                                        ) : (
                                                            <span className="text-slate-700">{feature.starter}</span>
                                                        )}
                                                    </td>
                                                    <td className={`whitespace-nowrap px-3 py-4 text-center text-sm ${selectedTier === 'tier-growth' ? 'bg-indigo-50/30' : ''}`}>
                                                        {typeof feature.growth === 'boolean' ? (
                                                            feature.growth ? <CheckIcon className="h-5 w-5 mx-auto text-indigo-600" /> : <MinusIcon className="h-5 w-5 mx-auto text-slate-300" />
                                                        ) : (
                                                            <span className="text-slate-700 font-semibold">{feature.growth}</span>
                                                        )}
                                                    </td>
                                                    <td className={`whitespace-nowrap px-3 py-4 text-center text-sm ${selectedTier === 'tier-enterprise' ? 'bg-indigo-50/30' : ''}`}>
                                                        {typeof feature.enterprise === 'boolean' ? (
                                                            feature.enterprise ? <CheckIcon className="h-5 w-5 mx-auto text-indigo-600" /> : <MinusIcon className="h-5 w-5 mx-auto text-slate-300" />
                                                        ) : (
                                                            <span className="text-slate-700 font-semibold">{feature.enterprise}</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
