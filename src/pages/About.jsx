import React from 'react';

const About = () => {
  return (
    <div style={{ 
      padding: '2rem 1rem', 
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      color: '#1e293b'
    }}>
      <h1 style={{ 
        fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
        marginBottom: '1rem',
        fontWeight: '700',
        background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        About Us
      </h1>
      <p style={{ 
        fontSize: 'clamp(1rem, 3vw, 1.3rem)', 
        color: '#64748b',
        maxWidth: '600px',
        margin: '0 auto 3rem',
        lineHeight: '1.6',
        padding: '0 1rem'
      }}>
        Learn more about our company and what we do.
      </p>

      <div style={{
        background: 'rgba(255, 255, 255, 0.6)',
        padding: 'clamp(2rem, 4vw, 3rem)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        <h2 style={{ 
          color: '#1e293b', 
          marginBottom: '1.5rem',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: '700'
        }}>
          Our Story
        </h2>
        <p style={{ 
          color: '#64748b', 
          lineHeight: '1.8', 
          marginBottom: '1.5rem',
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p style={{ 
          color: '#64748b', 
          lineHeight: '1.8',
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)'
        }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Projects Done' }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                color: '#64748b',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          marginBottom: '2rem',
          color: '#1e293b',
          fontWeight: '700'
        }}>
          Our Team
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {['John Doe', 'Jane Smith', 'Mike Johnson'].map((name, i) => (
            <div key={i} style={{
              background: 'rgba(255, 255, 255, 0.6)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                fontWeight: '700'
              }}>
                {name.charAt(0)}
              </div>
              <h3 style={{ 
                color: '#1e293b', 
                marginBottom: '0.5rem',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)'
              }}>
                {name}
              </h3>
              <p style={{ 
                color: '#64748b',
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
              }}>
                {i === 0 ? 'CEO & Founder' : i === 1 ? 'CTO' : 'Lead Designer'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;