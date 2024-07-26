import React, { useState } from 'react';
import { loginUser } from '../../api/api';
import { useUser } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await loginUser(email, password);
      console.log(response);
      if (response.status === 'success') {
        setUser(response.user);
        navigate('/');
      } else {
        setErrorMessage(response.data.error || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('../../../src/assets/images/bg_image.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative flex flex-col items-center justify-center h-full z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-4xl tracking-tight text-white">Sign in to your account</h2>
        </div>
        <div className="flex justify-center w-full max-w-md px-4">
          <form className="w-full bg-white bg-opacity-10 backdrop-blur-xl rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="Email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white bg-opacity-20 text-gray-200 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="Password">
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white bg-opacity-20 text-gray-200 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label htmlFor="remember" className="flex items-center">
                <input type="checkbox" className="mr-1 bg-white shadow" />
                <span className="text-sm text-gray-300">Remember Me</span>
              </label>
              <a href="#" className="text-blue-500 text-sm">
                Forgot your password?
              </a>
            </div>
            {errorMessage && <div className="mb-6 text-red-500 text-sm">{errorMessage}</div>}
            <div>
              <button
                className={`appearance-none block w-full bg-blue-600 text-gray-100 font-bold rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none ${
                  loading && 'cursor-not-allowed opacity-50'
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
