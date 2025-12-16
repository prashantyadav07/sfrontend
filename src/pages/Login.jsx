import React from 'react';

const Login = () => {
  return (
    <div style={{ 
      padding: '2rem 1rem', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 150px)',
      color: '#1e293b'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.6)',
        padding: 'clamp(2rem, 4vw, 3rem)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        width: '100%',
        maxWidth: '450px'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
          marginBottom: '0.5rem',
          fontWeight: '700',
          textAlign: 'center',
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Login
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
          color: '#64748b',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Welcome back! Please login to your account.
        </p>

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
            Password
          </label>
          <input 
            type="password" 
            placeholder="Enter your password"
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

        <div style={{ 
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <label style={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: '#64748b', 
            cursor: 'pointer',
            fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)'
          }}>
            <input 
              type="checkbox" 
              style={{ 
                marginRight: '0.5rem',
                cursor: 'pointer',
                width: '16px',
                height: '16px'
              }}
            />
            Remember me
          </label>
          <a href="#" style={{ 
            color: '#3b82f6', 
            textDecoration: 'none',
            fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)',
            fontWeight: '500'
          }}>
            Forgot password?
          </a>
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
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          marginBottom: '1.5rem'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.02)';
          e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
        }}>
          Login
        </button>

        <div style={{
          textAlign: 'center',
          padding: '1rem 0',
          borderTop: '1px solid rgba(148, 163, 184, 0.2)',
          marginTop: '1rem'
        }}>
          <p style={{ 
            color: '#64748b', 
            fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
            marginBottom: '1rem'
          }}>
            Or continue with
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {['Google', 'Facebook', 'Apple'].map((provider) => (
              <button key={provider} style={{
                flex: '1',
                minWidth: '100px',
                padding: '0.75rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                background: 'rgba(255, 255, 255, 0.8)',
                color: '#1e293b',
                fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 1)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                {provider}
              </button>
            ))}
          </div>
        </div>

        <p style={{ 
          textAlign: 'center', 
          color: '#64748b', 
          fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
          marginTop: '1.5rem'
        }}>
          Don't have an account? {' '}
          <a href="#" style={{ 
            color: '#3b82f6', 
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;