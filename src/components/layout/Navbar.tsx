import { useState, useEffect } from 'react';


/* ... imports ... */


import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Consultation', href: '#contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: isScrolled ? 'rgba(42, 42, 42, 0.95)' : 'var(--color-primary)',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
                transition: 'all 0.3s ease',
                height: 'var(--header-height)',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/Credit Master Pros Logo.pdf.png" alt="Credit Master Pros" style={{ height: '120px', objectFit: 'contain' }} />
                </a>

                {/* Desktop Nav - Uses class from index.css */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                color: 'white',
                                opacity: 0.9
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="tel:+18001234567" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--color-secondary)' }}>
                        <Phone size={18} />
                        (800) 555-0199
                    </a>
                    <Button variant="primary" size="sm" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>Client Login</Button>
                </div>

                {/* Mobile Toggle - Uses class from index.css */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X color="white" /> : <Menu color="white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: 'var(--header-height)',
                            left: 0,
                            right: 0,
                            backgroundColor: 'var(--color-primary)',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ fontSize: '1rem', fontWeight: 500, padding: '0.5rem 0', color: 'white' }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                        <a href="tel:+18001234567" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'white' }}>
                            <Phone size={18} />
                            (800) 555-0199
                        </a>
                        <Button variant="primary" style={{ width: '100%' }}>Client Login</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
