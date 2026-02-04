
import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, decimals = 0 }: { value: number; decimals?: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    const displayValue = useTransform(springValue, (latest) =>
        latest.toFixed(decimals)
    );

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const SocialProof = () => {
    const stats = [
        { label: 'Deletions', value: 2, suffix: 'M+', decimals: 0 },
        { label: 'Success Rate', value: 94, suffix: '%', decimals: 0 },
        { label: 'Years Experience', value: 15, suffix: '+', decimals: 0 },
        { label: 'Client Rating', value: 4.9, suffix: '/5', decimals: 1 },
    ];

    return (
        <section style={{ padding: '5rem 0', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container">

                {/* Stats Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--color-primary)', display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
                                <Counter value={stat.value} decimals={stat.decimals} />
                                <span style={{ fontSize: '2rem', marginLeft: '2px' }}>{stat.suffix}</span>
                            </div>
                            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;

