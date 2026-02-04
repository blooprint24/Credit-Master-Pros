


const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-primary)', color: 'white', padding: '4rem 0 2rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand */}
                    <div>
                        <img src="/Credit Master Pros Logo.pdf.png" alt="Credit Master Pros" style={{ height: '120px', marginBottom: '1.5rem' }} />
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                            Empowering you to take control of your financial future through expert credit repair and education.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '1.5rem' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>Careers</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>Reviews</a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '1.5rem' }}>Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#contact" style={{ color: 'rgba(255,255,255,0.7)' }}>Consultation</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>FAQ</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '1.5rem' }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                            <a href="tel:+16562661573" style={{ color: 'inherit' }}>(656) 266-1573</a>
                            <p>support@creditmasterpros.com</p>
                            <p>123 Finance Way, Suite 100<br />New York, NY 10001</p>
                        </div>
                    </div>
                </div>

                {/* Disclaimer & Copyright */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Disclaimer: Credit Master Pros is not a law firm. We do not provide legal advice. Results are not guaranteed and may vary.
                        The information on this website is for educational purposes only.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Credit Master Pros. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
