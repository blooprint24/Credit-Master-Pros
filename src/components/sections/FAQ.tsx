import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid var(--color-border)' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.5rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left'
                }}
            >
                <span style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--color-primary)' }}>{question}</span>
                {isOpen ? <Minus size={20} color="var(--color-secondary)" /> : <Plus size={20} color="var(--color-secondary)" />}
            </button>
            {isOpen && (
                <div style={{ paddingBottom: '1.5rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Is credit repair legal?",
            answer: "Absolutely. You have the legal right under the Fair Credit Reporting Act (FCRA) to dispute inaccurate, unverifiable, or incomplete items on your credit report. We exercise these rights on your behalf to ensure your credit profile is accurate."
        },
        {
            question: "How long does it take to see results?",
            answer: "While every case is unique, clients typically see their first results within 30 to 45 days. The full process can take 3-6 months depending on the complexity of your credit report."
        },
        {
            question: "Do you guarantee a higher score?",
            answer: "No reputable company can guarantee a specific score increase, as it depends on many factors. However, we do offer a 90-day money-back guarantee if we are unable to remove any questionable items from your report."
        },
        {
            question: "Can I do this myself?",
            answer: "Yes, you can. However, the process is time-consuming and requires knowledge of consumer protection laws. Our service handles the disputes, follow-ups, and legal pressure for you, saving you time and increasing the likelihood of success."
        }
    ];

    return (
        <section id="faq" className="section-padding" style={{ background: 'var(--color-bg-light)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Common Questions</h2>
                <div>
                    {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
