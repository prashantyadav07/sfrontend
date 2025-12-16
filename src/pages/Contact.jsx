import React from 'react';

const Contact = () => {
  return (
    <div style={{ 
      padding: '2rem 1rem', 
      textAlign: 'center',
      maxWidth: '800px',
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
        Contact Us
      </h1>
      <p style={{ 
        fontSize: 'clamp(1rem, 3vw, 1.3rem)', 
        color: '#64748b',
        maxWidth: '600px',
        margin: '0 auto 3rem',
        lineHeight: '1.6',
        padding: '0 1rem'
      }}>
        Get in touch with us today!
      </p>

      <div style={{
        background: 'rgba(255, 255, 255, 0.6)',
        padding: 'clamp(2rem, 4vw, 3rem)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        textAlign: 'left'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            color: '#1e293b', 
            marginBottom: '0.5rem',
            fontWeight: '600',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            Name
          </label>
          <input 
            type="text" 
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: 'clamp(0.7rem, 2vw, 0.9rem)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#1e293b',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              outline: 'none',
              transition: 'border 0.3s ease, box-shadow 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.border = '1px solid #3b82f6';
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.border = '1px solid rgba(148, 163, 184, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            color: '#1e293b', 
            marginBottom: '0.5rem',
            fontWeight: '600',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            Email
          </label>
          <input 
            type="email" 
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: 'clamp(0.7rem, 2vw, 0.9rem)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#1e293b',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              outline: 'none',
              transition: 'border 0.3s ease, box-shadow 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.border = '1px solid #3b82f6';
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.border = '1px solid rgba(148, 163, 184, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            color: '#1e293b', 
            marginBottom: '0.5rem',
            fontWeight: '600',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            Message
          </label>
          <textarea 
            rows="5"
            placeholder="Your message..."
            style={{
              width: '100%',
              padding: 'clamp(0.7rem, 2vw, 0.9rem)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#1e293b',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              resize: 'vertical',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'border 0.3s ease, box-shadow 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.border = '1px solid #3b82f6';
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.border = '1px solid rgba(148, 163, 184, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <button style={{
          width: '100%',
          padding: 'clamp(0.9rem, 2vw, 1.1rem)',
          borderRadius: '0.75rem',
          border: 'none',
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          color: 'white',
          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.02)';
          e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
        }}>
          Send Message
        </button>
      </div>

      {/* Contact Info */}
      <div style={{
        marginTop: '3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem'
      }}>
        {[
          { icon: '📧', title: 'Email', info: 'hello@example.com' },
          { icon: '📱', title: 'Phone', info: '+1 234 567 8900' },
          { icon: '📍', title: 'Address', info: '123 Main St, City' }
        ].map((item, i) => (
          <div key={i} style={{
            background: 'rgba(255, 255, 255, 0.6)',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
            <h3 style={{ 
              color: '#1e293b', 
              marginBottom: '0.5rem',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              fontWeight: '600'
            }}>
              {item.title}
            </h3>
            <p style={{ 
              color: '#64748b',
              fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)'
            }}>
              {item.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;