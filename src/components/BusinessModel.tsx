import React from 'react';
import Section from './Section';

const BusinessModel: React.FC = () => {
    const calculations = [
        { label: "Standard ATM operation profit", value: "2,000 €/ATM/year" },
        { label: "Commission from retailer", value: "up to 1,000 €/ATM/year" },
        { label: "Insurance *", value: "up to 1,800 €/ATM/year" },
        { label: "Financial services **", value: "up to 1,000 €/ATM/year" },
        { label: "3rd party advertisement", value: "up to 500 €/ATM/year" }
    ];

    const iadOperations = [
        "Securing locations",
        "Procuring the machines",
        "Handling maintenance",
        "Working with payment processors to allow transactions from various financial institutions"
    ];

    const operationalSteps = [
        {
            step: "1",
            title: "Install",
            description: "Installing ATM in partners' outlets — retail stores, gas stations, and public spaces."
        },
        {
            step: "2",
            title: "Deposit Service",
            description: "Providing cash deposit function to the retailer without fee, creating immediate value for the partner."
        },
        {
            step: "3",
            title: "Generate Revenue",
            description: "Profit from ATM renting or withdrawals, sales of advertisement space, and other services (crypto-operations, insurance payments, etc.)."
        }
    ];

    return (
        <Section id="business" className="business-model">

            <div style={{
                marginBottom: '6rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <div>
                    <span style={{
                        backgroundColor: 'var(--atmosphere-light-blue)',
                        color: 'var(--atmosphere-blue)',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'inline-block',
                        marginBottom: '1.5rem'
                    }}>
                        Business Model
                    </span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>
                        Atmosphere ATM network operates like IAD.
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '2rem'
                    }}>
                        Independent ATM Deployer (IAD) is a non-bank entity that owns, manages, and places ATMs in various locations like partners' retail stores, gas stations and even public spaces, providing convenient cash access to consumers.
                    </p>
                </div>

                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    border: '1px solid #e2e8f0'
                }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>IADs operate these ATMs by:</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {iadOperations.map((op, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                padding: '1rem',
                                backgroundColor: 'var(--atmosphere-bg)',
                                borderRadius: '12px'
                            }}>
                                <div style={{
                                    minWidth: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    backgroundColor: 'var(--atmosphere-blue)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '0.9rem'
                                }}>{index + 1}</div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>{op}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{
                backgroundColor: 'var(--atmosphere-light-blue)',
                borderRadius: '32px',
                padding: '4rem',
                marginBottom: '6rem'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Operational Model</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        A simple three-step process that generates value for all stakeholders.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem'
                }}>
                    {operationalSteps.map((step, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: '24px',
                            padding: '2.5rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            border: '1px solid #e2e8f0',
                            transition: 'var(--transition-smooth)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 16px 40px rgba(45,88,167,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                backgroundColor: 'var(--atmosphere-blue)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                margin: '0 auto 1.5rem'
                            }}>
                                {step.step}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Profit Structure</h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Per-ATM annual revenue breakdown across multiple streams.
                    </p>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '24px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Estimated Profit per ATM</h3>
                        {calculations.map((calc, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '1rem 0',
                                borderBottom: index === calculations.length - 1 ? 'none' : '1px solid #cbd5e1'
                            }}>
                                <span style={{ fontWeight: 500 }}>{calc.label}</span>
                                <span style={{ fontWeight: 700, color: 'var(--atmosphere-blue)' }}>{calc.value}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{
                        marginTop: '1.5rem',
                        padding: '1.5rem',
                        backgroundColor: '#F1F5F9',
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                    }}>
                        <p style={{ marginBottom: '0.3rem' }}><strong>*</strong> Based on the insurance agent policy / data provided by Colonnade Insurance S.A.</p>
                        <p><strong>**</strong> Money transfer, bitcoin, e-shop payments, share trading, etc.</p>
                    </div>
                </div>

                <div style={{
                    backgroundColor: 'var(--atmosphere-blue)',
                    padding: '4rem',
                    borderRadius: '32px',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <span style={{
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'inline-block',
                        marginBottom: '2rem'
                    }}>
                        Retail ATM
                    </span>
                    <h2 style={{ color: 'white', fontSize: '4rem', marginBottom: '0.5rem' }}>45,000</h2>
                    <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem' }}>Mid-term target ATMs</p>
                    <div style={{
                        height: '4px',
                        backgroundColor: 'var(--atmosphere-green)',
                        width: '60px',
                        margin: '0 auto 2rem'
                    }}></div>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', lineHeight: 1.7 }}>
                        There are approximately <strong>4.5 million shops</strong> and <strong>440,000 ATMs</strong> in Europe.
                    </p>
                    <p style={{ fontSize: '1rem', opacity: 0.8, fontStyle: 'italic', lineHeight: 1.7 }}>
                        Atmosphere's middle term target is 1% of the retail network in Europe, meaning 45,000 ATMs.
                    </p>
                </div>
            </div>
        </Section>
    );
};
export default BusinessModel;
