import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      localStorage.setItem('isAdmin', true);
      navigate('/dashboard');
    } else {
      setError('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 text-white">
    <Link className=' fixed top-0 left-0 bg-slate-700 rounded-md m-5 p-1 hover:bg-slate-500' to='/'>Back</Link>
      <form className="bg-slate-700 p-8 rounded-lg" onSubmit={handleSubmit}>
        <h1 className="text-2xl mb-6">Admin Login</h1>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
          className="block w-full p-2 mb-4 rounded-lg text-black"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          className="block w-full p-2 mb-4 rounded-lg text-black"
        />
        <button type="submit" className="w-full p-2 bg-blue-600 rounded-lg hover:bg-blue-700">Login</button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
