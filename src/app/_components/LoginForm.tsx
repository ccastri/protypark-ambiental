'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
// LoginForm.js (or any suitable name)
import { useState } from 'react';

const LoginForm = () => {
    const router=useRouter()
    const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
              const form_data = new URLSearchParams({
        username: username,
        password: password,
      });

      console.log('Request Body:', form_data.toString()); 
  const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
const response = await axios.post(`https://cyc-backend.onrender.com/auth/token`, formData);

      if (response.status === 200) {
        const data = await response.data;
        // Store token in localStorage or sessionStorage
        localStorage.setItem('accessToken', data.access_token);
        router.push('/')
        // Redirect or perform other actions for logged-in users
      } else {
        // Handle login failure
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return  (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Iniciar Sesion</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Usuario/Correo Electrónico</label>
            <div className="relative">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
              {/* <MailIcon className="absolute h-5 w-5 text-gray-500 top-1/2 transform -translate-y-1/2 right-4" /> */}
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Contraseña</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
              {/* <LockClosedIcon className="absolute h-5 w-5 text-gray-500 top-1/2 transform -translate-y-1/2 right-4" /> */}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
         {` Don't have an account? `} <a href="#" className="text-blue-500 hover:underline">Registrarse</a>
        </p>
        <div className="mt-6 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-500">© 2023 C&C Accion Legal SASS. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
