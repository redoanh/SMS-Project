import React, { useState } from 'react';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // api call korar jnno ei state rakci bro :)
    console.log("Student Data:", { email, password });
    alert(`Sending data to Laravel Backend: ${email}`);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3 style={{ textAlign: 'center' }}>Student Login</h3>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Student ID / Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <button type="submit" style={{ background: '#1e3a8a', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default StudentLogin;