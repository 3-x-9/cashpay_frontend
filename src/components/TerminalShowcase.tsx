import React from 'react';
import Section from './Section';

const TerminalShowcase: React.FC = () => {
    const features = [
        { title: "Cash Deposit", description: "Convenient and secure cash-in transactions for consumers and retailers.", icon: "" },
        { title: "Cash Withdrawal", description: "Fast, reliable cash-out services from any bank card.", icon: "" },
        { title: "Video Teller", description: "Remote assistant support for complex banking operations.", icon: "" },
        { title: "Card Dispenser", description: "On-the-spot card issuance and replacement.", icon: "" },
        { title: "Advertisement Terminal", description: "High-visibility digital marketing and brand exposure space.", icon: "" }
    ];

    const softwareCapabilities = [
        { name: "Standard ATM Operations", desc: "Cash withdrawal & deposit, balance inquiry, transfers" },
        { name: "Insurance", desc: "Purchase and manage insurance policies directly at the terminal" },
        { name: "Advertisement", desc: "Dynamic ad display and sponsored content on the multichannel screen" },
        { name: "Crypto Terminal", desc: "Buy, sell and manage cryptocurrency operations" },
        { name: "Retail Cash Depositor", desc: "Fee-free cash deposit service for retail partners" }
    ];

    const hardwareComponents = [
        "Receipt printer",
        "Barcode reader",
        "NFC reader",
        "Camera",
        "Card reader and dispenser",
        "Cash deposit & withdrawal",
        "Pin Pad keyboard",
        "Voice control",
        "Motion sensor",
        "Advertisement area"
    ];

    return (
        <Section id="terminal" className="terminal-showcase">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                    Hardware
                </span>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Multifunction Banking Terminal</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                    One machine, endless possibilities. Our next-gen IAD-ready terminals provide comprehensive banking and retail services in any location.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                <div style={{
                    backgroundColor: 'var(--atmosphere-light-blue)',
                    padding: '2rem',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img
                        src="/assets/atm2.jpg"
                        alt="Atmosphere Terminal"
                        style={{ maxHeight: '600px', width: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            padding: '1.5rem',
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            borderLeft: '4px solid var(--atmosphere-blue)',
                            transition: 'var(--transition-smooth)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem'
                        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                            <span style={{ fontSize: '1.8rem' }}>{feature.icon}</span>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{
                backgroundColor: 'var(--atmosphere-blue)',
                borderRadius: '32px',
                padding: '4rem',
                color: 'white',
                marginBottom: '6rem'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Multichannel Screen</h2>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        A unified interface combining banking, retail, advertising, and financial services on a single touchscreen display.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ color: 'var(--atmosphere-green)', fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                            Software Capabilities
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {softwareCapabilities.map((cap, index) => (
                                <div key={index} style={{
                                    padding: '1.2rem 1.5rem',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    backdropFilter: 'blur(4px)'
                                }}>
                                    <h4 style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.3rem' }}>{cap.name}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{cap.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img
                            src="/assets/atm1.jpg"
                            alt="Detailed Terminal View"
                            style={{
                                maxHeight: '550px',
                                width: 'auto',
                                filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.4))',
                                borderRadius: '12px'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Hardware Components</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        Every terminal is equipped with cutting-edge hardware for maximum versatility and security.
                    </p>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '1.5rem'
                }}>
                    {hardwareComponents.map((component, index) => (
                        <div key={index} style={{
                            padding: '1.5rem 1rem',
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            textAlign: 'center',
                            border: '1px solid #e2e8f0',
                            transition: 'var(--transition-smooth)',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--atmosphere-blue)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(45,88,167,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#e2e8f0';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                backgroundColor: 'var(--atmosphere-light-blue)',
                                margin: '0 auto 0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--atmosphere-blue)'
                                }}></div>
                            </div>
                            <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                                {component}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
export default TerminalShowcase;
