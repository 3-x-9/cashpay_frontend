import React from 'react';
import Section from './Section';

const Ecosystem: React.FC = () => {
    const ecosystemCompanies = [
        { name: "Europeum", logo: "/assets/europeum-logo.jpg", desc: "More than 30 years of experience in bank and retail automation" },
        { name: "CashPay", logo: "/assets/cashpay.png", desc: "Cooperation with world leaders in the field of banking and retail technologies" },
        { name: "ATT", logo: "/assets/att.png", desc: "6000+ pcs of ATMs in operation" },
        { name: "Europeum Electronics Mechanics", logo: "/assets/eem.png", desc: "R&D & production capacities" },
        { name: "Atmosphere", logo: "/assets/atmosphere.jpg", desc: "Multifunction banking terminal" },
    ];

    const experience = [
        { experience: "More than 30 years of experience in bank and retail automation" },
        { experience: "Cooperation with world leaders in the field of banking and retail technologies" },
        { experience: "6000+ pcs of ATMs in operation" },
        { experience: "R&D & production capacities" },
        { experience: "Multifunction banking terminal" },
    ];

    const ecosystemRoles = [
        "ATM development & design",
        "Production",
        "Service and maintenance",
        "Logistic",
        "ATM network operator"
    ];

    const partnerBenefits = [
        "Financial services",
        "ATM network operating",
        "ATM service and monitoring",
        "Outsourced HW/SW development / installation / production"
    ];

    const partners = [
        {
            name: "Cashway",
            logo: "/assets/cashway.png",
            description: "No 1. private owned producer of ATM/banking terminals in China providing a full range of products, technologies and services related to cash & cashless payments. Traded on the Shanghai Stock Exchange since 2017."
        },
        {
            name: "Gunnebo",
            logo: "/assets/gunnebo-logo.png",
            description: "Global leader in security solutions offering innovative products and services to control and to protect valuables from burglary, fire or explosion."
        },
        {
            name: "Nexi",
            logo: "/assets/nexi.png",
            description: "Biggest European PayTech with scale, capabilities and proximity to providing fast and safe payment solutions to banks, institutions and public administrations."
        }
    ];

    const potentialUsers = [
        { name: "Colonnade", logo: "/assets/colonade.png" },
        { name: "Western Union", logo: "/assets/westernunion.png" },
        { name: "BNP Paribas", logo: "/assets/bnp.jpg" },
        { name: "Revolut", logo: "/assets/revolut.png" },
        { name: "Alipay", logo: "/assets/alipay.png" },
        { name: "UniCredit", logo: "/assets/unicredit.png" },
        { name: "Intesa Sanpaolo", logo: "/assets/intesa.png" }
    ];

    return (
        <Section id="ecosystem" className="ecosystem-section">

            <div style={{
                textAlign: 'center',
                marginBottom: '4rem',
                padding: '4rem',
                backgroundColor: 'var(--atmosphere-blue)',
                borderRadius: '32px',
                color: 'white'
            }}>
                <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Partner's Benefits</h2>
                <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Everything partners need to operate a successful ATM deployment.
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem'
                }}>
                    {partnerBenefits.map((benefit, index) => (
                        <div key={index} style={{
                            padding: '2rem 1.5rem',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '16px',
                            backdropFilter: 'blur(4px)',
                            transition: 'var(--transition-smooth)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                backgroundColor: 'var(--atmosphere-green)',
                                margin: '0 auto 1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    backgroundColor: 'white'
                                }}></div>
                            </div>
                            <p style={{ fontWeight: 600, fontSize: '1rem' }}>{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                        marginBottom: '1rem'
                    }}>
                        About Us
                    </span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Ecosystem Details</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                        Development, production, service/maintenance, software support, monitoring and network operation.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr 1.5fr',
                    gap: '2rem',
                    alignItems: 'stretch'
                }}>
                    <div style={{
                        backgroundColor: 'var(--atmosphere-blue)',
                        borderRadius: '24px',
                        padding: '2.4rem',
                        color: 'white',
                        height: '100%'
                    }}>
                        <h3 style={{ color: 'var(--atmosphere-green)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                            Ecosystem Roles
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {ecosystemRoles.map((role, index) => (
                                <div key={index} style={{
                                    padding: '0.8rem 0',
                                    borderBottom: index < ecosystemRoles.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none'
                                }}>
                                    <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700, textAlign: 'center' }}>
                            Partners
                        </h3>
                        {ecosystemCompanies.map((company, index) => (
                            <div key={index} style={{
                                padding: '1.2rem',
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'var(--transition-smooth)',
                                flex: 1
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    style={{ height: '35px', maxWidth: '100%', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700, textAlign: 'center' }}>
                            Experience
                        </h3>
                        {experience.map((item, index) => (
                            <div key={index} style={{
                                padding: '1.2rem',
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'var(--transition-smooth)',
                                flex: 1
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <p style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                                    {item.experience}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                        marginBottom: '1rem'
                    }}>
                        Partners
                    </span>
                    <h2 style={{ fontSize: '2.5rem' }}>Trusted Technology Partners</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem'
                }}>
                    {partners.map((partner, index) => (
                        <div key={index} style={{
                            padding: '2.5rem 2rem',
                            backgroundColor: 'white',
                            borderRadius: '24px',
                            border: '1px solid #e2e8f0',
                            transition: 'var(--transition-smooth)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)';
                                e.currentTarget.style.transform = 'translateY(-6px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                style={{ height: '40px', objectFit: 'contain', marginBottom: '1.5rem' }}
                            />
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                lineHeight: 1.7
                            }}>
                                {partner.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                        marginBottom: '1rem'
                    }}>
                        Potential Users
                    </span>
                    <h2 style={{ fontSize: '2.5rem' }}>Industry-Leading Clients</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem',
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    border: '1px solid #e2e8f0'
                }}>
                    {potentialUsers.map((user, index) => (
                        <div key={index} style={{
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '16px',
                            transition: 'var(--transition-smooth)',
                            backgroundColor: '#FAFAFA'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--atmosphere-light-blue)';
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#FAFAFA';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <img
                                src={user.logo}
                                alt={user.name}
                                style={{ height: '40px', objectFit: 'contain', maxWidth: '160px' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div style={{
                backgroundColor: 'white',
                borderRadius: '32px',
                padding: '4rem',
                border: '1px solid #e2e8f0'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <span style={{
                        backgroundColor: '#FEF3C7',
                        color: '#92400E',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'inline-block',
                        marginBottom: '1rem'
                    }}>
                        IAP Business Case Example
                    </span>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '300px 1fr',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <img
                            src="/assets/euronet-logo.jpg"
                            alt="Euronet"
                            style={{ height: '40px', objectFit: 'contain', marginBottom: '2rem' }}
                        />
                        <div style={{
                            backgroundColor: 'var(--atmosphere-blue)',
                            borderRadius: '20px',
                            padding: '2rem',
                            color: 'white'
                        }}>
                            <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.5rem' }}>EURONET COMPANY</h4>
                            <p style={{ fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.4 }}>
                                No.1 global Independent ATM provider
                            </p>
                        </div>
                    </div>

                    <div>
                        <p style={{
                            fontSize: '1.05rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                            marginBottom: '1.5rem'
                        }}>
                            Euronet Worldwide is an American-headquartered worldwide provider of electronic payment services. It operates the largest independent ATM network in Europe and owns a total of almost <strong style={{ color: 'var(--atmosphere-blue)' }}>52,000 ATMs around the world</strong>.
                        </p>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1rem',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{
                                padding: '1.5rem',
                                backgroundColor: 'var(--atmosphere-bg)',
                                borderRadius: '16px',
                                textAlign: 'center'
                            }}>
                                <h4 style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>$1.1B</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                    Q3 2024 consolidated revenue (+9% YoY)
                                </p>
                            </div>
                            <div style={{
                                padding: '1.5rem',
                                backgroundColor: 'var(--atmosphere-bg)',
                                borderRadius: '16px',
                                textAlign: 'center'
                            }}>
                                <h4 style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>$4.21B</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                    Market Capitalization (Feb 2025)
                                </p>
                            </div>
                        </div>
                        <p style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            fontStyle: 'italic',
                            padding: '1rem 1.5rem',
                            backgroundColor: '#FEF3C7',
                            borderRadius: '12px',
                            borderLeft: '4px solid #F59E0B'
                        }}>
                            Euronet is using cash-out ATMs only. Atmosphere's multifunction terminals unlock significantly more revenue streams.
                        </p>
                    </div>
                </div>
            </div>

        </Section >
    );
};
export default Ecosystem;
