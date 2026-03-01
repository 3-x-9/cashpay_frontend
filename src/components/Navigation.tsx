import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();

    const linkStyle = (path: string) => ({
        textDecoration: 'none',
        color: location.pathname === path ? 'var(--atmosphere-blue)' : 'var(--text-primary)',
        fontWeight: location.pathname === path ? 700 : 500,
        transition: 'color 0.3s ease',
        borderBottom: location.pathname === path ? '2px solid var(--atmosphere-blue)' : '2px solid transparent',
        paddingBottom: '4px'
    });

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            padding: '1rem 0',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src="/assets/atmosphere.jpg" alt="Atmosphere" style={{ height: '32px' }} />
                </Link>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/" style={linkStyle('/')}>Home</Link>
                    <Link to="/trends" style={linkStyle('/trends')}>Trends</Link>
                    <Link to="/terminal-showcase" style={linkStyle('/terminal-showcase')}>Terminal</Link>
                    <Link to="/business-model" style={linkStyle('/business-model')}>Business</Link>
                    <Link to="/ecosystem" style={linkStyle('/ecosystem')}>Ecosystem</Link>
                </div>
            </div>
        </nav>
    );
};
export default Navigation;
