import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Button from '../ui/Button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
    const score = useMotionValue(524);
    const roundedScore = useTransform(score, (latest) => Math.round(latest));

    // Transform score (524-720) to color (Red-Green)
    const barColor = useTransform(
        score,
        [524, 650, 720],
        ['#EF4444', '#F59E0B', '#10B981'] // Red -> Amber -> Green
    );

    useEffect(() => {
        const loop = () => {
            score.set(524);
            animate(score, 720, {
                duration: 3,
                ease: "easeOut",
                onComplete: () => {
                    setTimeout(loop, 2000); // Pause for 2 seconds before resetting
                }
            });
        };

        const timeout = setTimeout(loop, 1000); // Initial delay
        return () => clearTimeout(timeout);
    }, [score]);

    const initialBarHeights = [40, 45, 55, 60, 75, 80, 95];

    return (
        <section style={{
            paddingTop: 'calc(var(--header-height) + 2rem)',
            paddingBottom: '4rem',
            background: 'linear-gradient(135deg, var(--color-bg-light) 0%, #E2E8F0 100%)',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container">
                <div className="hero-grid">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'rgba(42, 42, 42, 0.05)',
                            padding: '0.5rem 1rem',
                            borderRadius: '2rem',
                            marginBottom: '1.5rem',
                            color: 'var(--color-primary)',
                            fontWeight: 600,
                            fontSize: '0.875rem'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-success)' }}></span>
                            Trusted by 11,000+ Families
                        </div>

                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                            Restore Your Credit.<br />
                            <span style={{ color: 'var(--color-secondary)' }}>Reclaim Your Life.</span>
                        </h1>

                        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '540px' }}>
                            Don't let errors and inaccuracies hold you back. We specialize in legally disputing negative items to help you qualify for the home, car, and rates you deserve.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#contact" style={{ display: 'contents' }}>
                                <Button variant="primary" size="lg" style={{ backgroundColor: 'var(--color-secondary)', borderColor: 'var(--color-secondary)' }}>
                                    Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                                </Button>
                            </a>
                            <Button variant="outline" size="lg">How It Works</Button>
                        </div>

                        <div style={{
                            marginTop: '3.5rem',
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            fontSize: '0.875rem',
                            color: 'var(--color-text-muted)'
                        }}>
                            {[
                                { icon: <CheckCircle size={16} color="var(--color-success)" />, text: "No Upfront Fees" },
                                { icon: <CheckCircle size={16} color="var(--color-success)" />, text: "Cancel Anytime" },
                                { icon: <CheckCircle size={16} color="var(--color-success)" />, text: "90-Day Guarantee" }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '2rem',
                                    border: '1px solid var(--color-border)',
                                    boxShadow: 'var(--shadow-sm)'
                                }}>
                                    {item.icon} {item.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            background: 'var(--color-white)',
                            padding: '2rem',
                            borderRadius: '1.5rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                            position: 'relative',
                            zIndex: 1,
                            border: '1px solid rgba(0, 0, 0, 0.05)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Current Score</div>
                                    <motion.div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                                        {roundedScore}
                                    </motion.div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Projected</div>
                                    <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-success)' }}>720+</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '200px' }}>
                                {initialBarHeights.map((h, i) => {
                                    // Make bars grow dynamically
                                    const heightScale = useTransform(score, [524, 720], [0.6 + (i * 0.05), 1]);
                                    const animatedHeight = `${h}%`;

                                    return (
                                        <motion.div
                                            key={i}
                                            style={{
                                                flex: 1,
                                                backgroundColor: i > 3 ? barColor : 'var(--color-border)',
                                                height: animatedHeight,
                                                borderRadius: '4px',
                                                scaleY: i > 3 ? heightScale : 1,
                                                originY: 1
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div style={{
                            position: 'absolute',
                            top: '-10%',
                            right: '-10%',
                            width: '300px',
                            height: '300px',
                            background: 'var(--color-secondary)',
                            opacity: 0.1,
                            borderRadius: '50%',
                            filter: 'blur(40px)',
                            zIndex: 0
                        }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

