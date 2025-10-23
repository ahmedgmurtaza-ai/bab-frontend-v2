import React, { useState } from 'react';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const LoginPage: React.FC = () => {
  const [mobile, setMobile] = useState('');
  const [crNumber, setCrNumber] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [error, setError] = useState('');

  const handleRefreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Basic validation
    if (!mobile.match(/^\d{8,15}$/)) {
      setError('Please enter a valid mobile number.');
      return;
    }
    if (!crNumber.match(/^\d{5,15}$/)) {
      setError('Please enter a valid CR number.');
      return;
    }
    if (captchaInput !== captcha) {
      setError('Captcha does not match.');
      return;
    }
    // TODO: Connect to API
    alert('Login successful!');
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Mobile Number</label>
          <input
            type="text"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>CR Number</label>
          <input
            type="text"
            value={crNumber}
            onChange={e => setCrNumber(e.target.value)}
            placeholder="Enter CR number"
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Captcha</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 'bold', fontSize: 18, letterSpacing: 2 }}>{captcha}</span>
            <button type="button" onClick={handleRefreshCaptcha}>Refresh</button>
          </div>
          <input
            type="text"
            value={captchaInput}
            onChange={e => setCaptchaInput(e.target.value)}
            placeholder="Enter captcha"
            style={{ width: '100%', padding: 8, marginTop: 8 }}
            required
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
        <button type="submit" style={{ width: '100%', padding: 10, background: '#1677ff', color: '#fff', border: 'none', borderRadius: 4 }}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
