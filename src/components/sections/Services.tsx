
import Button from '../ui/Button';
import { Check } from 'lucide-react';

const Services = () => {
    const plans = [
        {
            name: "Standard",
            price: "$79",
            period: "/month",
            description: "Perfect for minor errors and basic disputes.",
            features: ["2 Bureau Disputes", "Score Tracker", "24/7 Portal Access", "No Contract"]
        },
        {
            name: "Premium",
            price: "$119",
            period: "/month",
            isPopular: true,
            description: "Aggressive challenge for optimal results.",
            features: ["3 Bureau Disputes", "Unlimited Challenges", "Goodwill Letters", "Cease & Desist Letters", "Priority Support"]
        },
        {
            name: "Elite",
            price: "$149",
            period: "/month",
            description: "Complete financial restoration package.",
            features: ["All Premium Features", "Identity Theft Protection", "Personal Finance Tools", "Attorney Review", "Same Day Processing"]
        }
    ];

    return (
        <section id="services" className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Choose Your Freedom Plan</h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>Transparent pricing. No hidden startup fees. Cancel anytime.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    alignItems: 'start'
                }}>
                    {plans.map((plan, index) => (
                        <div key={index} style={{
                            border: plan.isPopular ? '2px solid var(--color-secondary)' : '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '2rem',
                            position: 'relative',
                            background: plan.isPopular ? '#FFFDF5' : 'white',
                            transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
                            zIndex: plan.isPopular ? 2 : 1
                        }}>
                            {plan.isPopular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--color-secondary)',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600
                                }}>
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{plan.description}</p>

                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>{plan.price}</span>
                                <span style={{ color: 'var(--color-text-muted)' }}>{plan.period}</span>
                            </div>

                            <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
                                        <Check size={16} color="var(--color-success)" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.isPopular ? 'primary' : 'outline'}
                                style={{ width: '100%' }}
                            >
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
