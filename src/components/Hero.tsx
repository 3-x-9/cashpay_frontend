import Section from './Section';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <Section id="hero" className="hero-section">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '80vh',
                gap: '4rem',
                paddingTop: '4rem'
            }}>
                <div style={{ flex: 1 }}>
                    <img src="/assets/atmosphere.jpg" alt="Atmosphere" style={{ height: '60px', marginBottom: '1.5rem' }} />
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--atmosphere-blue)' }}>
                        Banking Terminal Network
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontWeight: 400, lineHeight: 1.7 }}>
                        Creation of fintech network of high-tech ATMs in EU using the advantages of cost effective hardware and software.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/terminal-showcase" style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            backgroundColor: 'var(--atmosphere-blue)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            transition: 'var(--transition-smooth)',
                            textDecoration: 'none'
                        }}>
                            Explore Terminal
                        </Link>
                        <Link to="/trends" style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            backgroundColor: 'transparent',
                            color: 'var(--atmosphere-blue)',
                            border: '2px solid var(--atmosphere-blue)',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            transition: 'var(--transition-smooth)',
                            textDecoration: 'none'
                        }}>
                            Market Trends
                        </Link>
                    </div>
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        backgroundColor: 'var(--atmosphere-light-blue)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}>
                        <img
                            src="/assets/atm2.jpg"
                            alt="Atmosphere Terminal"
                            style={{ maxHeight: '100%', width: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
                        />
                    </div>
                </div>
            </div>

            <div style={{
                marginTop: '6rem',
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
                        Project Vision
                    </span>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem' }}>
                        Seizing the market opportunity
                    </h2>
                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '2rem'
                    }}>
                        Creation of a fintech network of high-tech ATMs in the EU, leveraging:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            padding: '1.5rem',
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div style={{
                                minWidth: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                backgroundColor: 'var(--atmosphere-light-blue)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem'
                            }}></div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Cost-Effective Technology</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    The advantages of cost effective hardware and software solutions that reduce deployment and operational costs.
                                </p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            padding: '1.5rem',
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div style={{
                                minWidth: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                backgroundColor: 'var(--atmosphere-light-blue)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem'
                            }}></div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Perfect Market Timing</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    Traditional banks are decreasing the number of ATMs, while neobanks have not established their ATM networks yet — creating a unique window of opportunity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    backgroundColor: 'var(--atmosphere-blue)',
                    borderRadius: '32px',
                    padding: '3rem',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '400px'
                }}>
                    <img
                        src="/assets/atm1.jpg"
                        alt="Atmosphere ATM Terminal"
                        style={{
                            maxHeight: '350px',
                            width: 'auto',
                            filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.3))',
                            borderRadius: '12px'
                        }}
                    />
                </div>
            </div>
        </Section>
    );
};
export default Hero;
