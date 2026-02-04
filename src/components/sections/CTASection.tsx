
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                    Stop letting bad credit define you.
                </h2>
                <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem' }}>
                    Take the first step towards financial freedom today. Our experts are ready to build your custom plan.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button variant="secondary" size="lg">
                        Start Your Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </Button>
                    <a href="tel:+16562661573">
                        <Button variant="outline" size="lg" style={{ borderColor: 'white', color: 'white' }}>
                            (656) 266-1573
                        </Button>
                    </a>
                </div>
                <p style={{ marginTop: '2rem', fontSize: '0.875rem', opacity: 0.6 }}>
                    No credit card required for consultation.
                </p>
            </div>
        </section>
    );
};

export default CTASection;
