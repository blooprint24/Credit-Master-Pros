import { Check } from 'lucide-react';

const ServicePackages = () => {
    return (
        <section id="service-packages" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* SECTION TITLE */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Select the Plan That Fits Your Goals
                    </h1>
                    <div className="w-24 h-1.5 bg-[#E32626] mx-auto rounded-full"></div>
                </div>

                {/* SERVICE CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-24 items-stretch">
                    
                    {/* Card 1: Credit Restoration Package */}
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 lg:p-14 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative group">
                        <div className="mb-8">
                            <div className="text-sm font-bold tracking-widest text-[#E32626] uppercase mb-4">Foundation</div>
                            <h3 className="text-4xl font-serif text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Credit Restoration
                            </h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-black text-gray-900 font-sans tracking-tighter">$350</span>
                                <span className="text-gray-400 font-medium">/ package</span>
                            </div>
                            <p className="text-xl font-semibold text-gray-800 mb-4 font-sans leading-snug">
                                Clear the Path to Your Financial Goals.
                            </p>
                            <p className="text-gray-500 leading-relaxed font-sans text-lg">
                                Perfect for those held back by past mistakes or inaccuracies. We perform a deep-dive audit of your reports and aggressively challenge the negative items stopping your growth.
                            </p>
                        </div>

                        <div className="flex-grow">
                            <ul className="space-y-5 mb-10 font-sans">
                                {[
                                    "Comprehensive Triple-Bureau Audit",
                                    "Aggressive Dispute Management",
                                    "Inquiry Clean-Up Assistance",
                                    "Real-Time Progress Tracking"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-700 text-lg">
                                        <Check className="shrink-0 mt-1 text-red-600" size={24} strokeWidth={3} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-5 px-8 rounded-full text-white font-bold text-xl transition-all duration-300 hover:bg-black hover:shadow-lg transform active:scale-95 font-sans uppercase tracking-wide" style={{ backgroundColor: '#E32626' }}>
                            Get Started
                        </button>
                    </div>

                    {/* Card 2: Credit Optimization Package */}
                    <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#E32626] p-10 lg:p-14 transition-all duration-500 hover:-translate-y-2 relative flex flex-col h-full group">
                        {/* Floating Badge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <span className="bg-[#E32626] text-white text-sm font-black tracking-[0.2em] px-8 py-2.5 rounded-full uppercase shadow-xl whitespace-nowrap">
                                MOST POPULAR
                            </span>
                        </div>

                        <div className="mb-8 overflow-visible pt-4">
                            <div className="text-sm font-bold tracking-widest text-[#E32626] uppercase mb-4 text-center md:text-left">Elite Level</div>
                            <h3 className="text-4xl font-serif text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Credit Optimization
                            </h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-black text-gray-900 font-sans tracking-tighter">$500</span>
                                <span className="text-gray-400 font-medium">/ package</span>
                            </div>
                            <p className="text-xl font-semibold text-gray-800 mb-4 font-sans leading-snug text-[#E32626]">
                                Maximize Your Profile for High-Limit Funding.
                            </p>
                            <p className="text-gray-500 leading-relaxed font-sans text-lg">
                                Don't just fix your credit—master it. This package is designed for individuals looking to qualify for $50k+ in funding, lower mortgage rates, or high-limit credit cards within months.
                            </p>
                        </div>

                        <div className="flex-grow">
                            <ul className="space-y-5 mb-10 font-sans">
                                {[
                                    "Everything in Restoration",
                                    "Strategic Profile Building Guide",
                                    "Funding Readiness Strategy",
                                    "Direct Bank Relationship Guidance"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-700 text-lg">
                                        <Check className="shrink-0 mt-1 text-red-600" size={24} strokeWidth={3} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-5 px-8 rounded-full text-white font-bold text-xl transition-all duration-300 hover:bg-black hover:shadow-lg transform active:scale-95 font-sans uppercase tracking-wide" style={{ backgroundColor: '#E32626' }}>
                            Get Started
                        </button>
                    </div>

                </div>

                {/* SUB-SECTION: WHICH PLAN IS RIGHT FOR ME? */}
                <div className="bg-gray-50 rounded-3xl p-10 md:p-16 max-w-6xl mx-auto shadow-inner border border-gray-100">
                    <h2 className="text-4xl font-serif text-center text-gray-900 mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Which Plan Is Right For Me?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column */}
                        <div className="font-sans">
                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Choose <span className="text-[#E32626]">Restoration</span> If:
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        You have many older negative items, such as large collections or charge-offs, you want removed.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Your goal is primarily to reach a score milestone for a specific purchase, like a new car.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        You are frustrated by many small inaccuracies and multiple inquiries.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div className="font-sans">
                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Choose <span className="text-[#E32626]">Optimization</span> If:
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        You need a comprehensive financial restart after complex issues like bankruptcy or evictions.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Your goal is to actively build credit to qualify for business loans, high-limit credit cards, or a lower mortgage rate.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#E32626] shrink-0" />
                                    <p className="text-gray-600 leading-relaxed text-lg">
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
