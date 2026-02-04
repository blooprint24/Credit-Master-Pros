
import { Search, Scale, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Search size={40} />,
            title: "1. We Audit Your Report",
            description: "We analyze your credit reports from all three bureaus (TransUnion, Equifax, Experian) to identify inaccurate, unverifiable, or unfair negative items."
        },
        {
            icon: <Scale size={40} />,
            title: "2. We Challenge Creditors",
            description: "Our legal experts draft custom dispute letters and challenge creditors and bureaus to prove the validity of their claims against you."
        },
        {
            icon: <BadgeCheck size={40} />,
            title: "3. You See Results",
            description: "Errors are corrected or removed. You receive updated credit reports and can watch your score improve in real-time through our portal."
        }
    ];

    return (
        <section id="how-it-works" className="section-padding" style={{ background: 'var(--color-bg-light)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Path to Better Credit</h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        We've simplified the complex legal process of credit repair into three transparent steps.
                    </p>
                </div>

                <div className="how-it-works-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-sm)',
                                textAlign: 'center',
                                position: 'relative',
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--color-bg-light)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto',
                                color: 'var(--color-secondary)'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
