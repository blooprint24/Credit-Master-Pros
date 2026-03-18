import { Check } from 'lucide-react';

const ServicePackages = () => {
    return (
        <section id="service-packages" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* SECTION TITLE */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Select the Plan That Fits Your Goals
                    </h1>
                </div>

                {/* SERVICE CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 items-start">
                    
                    {/* Card 1: Credit Restoration Package */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-10 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                        <div className="mb-6">
                            <h3 className="text-3xl font-serif text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Credit Restoration
                            </h3>
                            <div className="text-[2.5rem] font-bold text-gray-900 font-sans tracking-tight mb-4">
                                $350
                            </div>
                            <p className="text-lg font-medium text-gray-800 mb-3 font-sans">
                                Clear the Path to Your Financial Goals.
                            </p>
                            <p className="text-gray-600 leading-relaxed font-sans">
                                Perfect for those held back by past mistakes or inaccuracies. We perform a deep-dive audit of your reports and aggressively challenge the negative items stopping your growth.
                            </p>
                        </div>

                        <div className="flex-grow">
                            <ul className="space-y-4 mb-8 font-sans">
                                {[
                                    "Comprehensive Triple-Bureau Audit",
                                    "Aggressive Dispute Management",
                                    "Inquiry Clean-Up Assistance",
                                    "Real-Time Progress Tracking"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <Check className="shrink-0 mt-1" size={20} color="#E32626" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-4 px-6 rounded-lg text-white font-semibold text-lg transition-colors hover:bg-red-700 font-sans" style={{ backgroundColor: '#E32626' }}>
                            Get Started
                        </button>
                    </div>

                    {/* Card 2: Credit Optimization Package */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 p-10 transition-all duration-300 hover:scale-[1.02] relative flex flex-col h-full ring-2 ring-[#E32626]/20">
                        {/* Highlights Banner */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
                            <span className="bg-[#E32626] text-white text-sm font-bold tracking-wider px-6 py-1.5 rounded-full uppercase shadow-md">
                                BEST VALUE / MOST POPULAR
                            </span>
                        </div>

                        <div className="mb-6 mt-2">
                            <h3 className="text-3xl font-serif text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Credit Optimization
                            </h3>
                            <div className="text-[2.5rem] font-bold text-gray-900 font-sans tracking-tight mb-4">
                                $500
                            </div>
                            <p className="text-lg font-medium text-gray-800 mb-3 font-sans">
                                Maximize Your Profile for High-Limit Funding.
                            </p>
                            <p className="text-gray-600 leading-relaxed font-sans">
                                Don't just fix your credit—master it. This package is designed for individuals looking to qualify for $50k+ in funding, lower mortgage rates, or high-limit credit cards within months.
                            </p>
                        </div>

                        <div className="flex-grow">
                            <ul className="space-y-4 mb-8 font-sans">
                                {[
                                    "Everything in Restoration",
                                    "Strategic Profile Building Guide",
                                    "Funding Readiness Strategy",
                                    "Direct Bank Relationship Guidance"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <Check className="shrink-0 mt-1" size={20} color="#E32626" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-4 px-6 rounded-lg text-white font-semibold text-lg transition-colors hover:bg-red-700 shadow-md font-sans" style={{ backgroundColor: '#E32626' }}>
                            Get Started
                        </button>
                    </div>

                </div>

                {/* SUB-SECTION: WHICH PLAN IS RIGHT FOR ME? */}
                <div className="mt-24 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-serif text-center text-gray-900 mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Which Plan Is Right For Me?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column */}
                        <div className="font-sans">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                Choose <span className="text-[#E32626]">Restoration</span> If:
                            </h2>
                            <ul className="space-y-5">
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed">
                                        You have many older negative items, such as large collections or charge-offs, you want removed.
                                    </p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed">
                                        Your goal is primarily to reach a score milestone for a specific purchase, like a new car.
                                    </p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed">
                                        You are frustrated by many small inaccuracies and multiple inquiries.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div className="font-sans">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                Choose <span className="text-[#E32626]">Optimization</span> If:
                            </h2>
                            <ul className="space-y-5">
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed">
                                        You need a comprehensive financial restart after complex issues like bankruptcy or evictions.
                                    </p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed">
                                        Your goal is to actively build credit to qualify for business loans, high-limit credit cards, or a lower mortgage rate.
                                    </p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed">
                                        You have income but want to optimize your debts to instantly spike your score.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicePackages;
