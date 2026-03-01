import React from 'react';
import Section from './Section';

const Trends: React.FC = () => {
    const trendsList = [
        "AI, digitalization & automation",
        "ATM is physical extension of banking applications",
        "Competition between digital and physical banking",
        "Negative profitability of ATM networks owned by many banks",
        "Cost optimization"
    ];

    return (
        <Section id="trends" className="trends-section">
            <div style={{
                backgroundColor: 'var(--atmosphere-blue)',
                color: 'white',
                padding: '6rem 4rem',
                borderRadius: '32px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '4rem'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50%',
                    zIndex: 0
                }}></div>

                <div style={{ flex: 1, zIndex: 1 }}>
                    <span style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '2rem',
                        display: 'inline-block'
                    }}>
                        Trends
                    </span>
                    <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '2rem' }}>
                        The evolving landscape of banking.
                    </h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {trendsList.map((trend, index) => (
                            <li key={index} style={{
                                fontSize: '1.25rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <span style={{
                                    minWidth: '12px',
                                    height: '12px',
                                    backgroundColor: 'var(--atmosphere-green)',
                                    borderRadius: '50%'
                                }}></span>
                                {trend}
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ flex: 1, height: '400px', borderRadius: '24px', overflow: 'hidden', zIndex: 1 }}>
                    <img
                        src="/assets/visual_1.jpg"
                        alt="Market Trends"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                    />
                </div>
            </div>
        </Section>
    );
};
export default Trends;
