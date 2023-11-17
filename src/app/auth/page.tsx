// 'use client'
// // LoginForm.js (or any suitable name)
// import { useState } from 'react';

// const LoginForm = () => {
//   const [username, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e: any) => {
//     e.preventDefault();

//     try {
//               const form_data = new URLSearchParams({
//         username: username,
//         password: password,
//       });

//       console.log('Request Body:', form_data.toString()); 
//   const formData = new FormData();
//     formData.append('username', username);
//     formData.append('password', password);
//     const response = await fetch(`http://localhost:8000/auth/token`, {
//       method: 'POST',
//       body: formData
//     });

//       if (response.ok) {
//         const data = await response.json();
//         // Store token in localStorage or sessionStorage
//         localStorage.setItem('accessToken', data.access_token);
//         // Redirect or perform other actions for logged-in users
//       } else {
//         // Handle login failure
//       }
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;


'use client'
import React, {useEffect} from 'react'
import LoginForm from '../_components/LoginForm'
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter()
 useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      router.push('/'); // Redirect to login page if accessToken is not present
    }
  }, [router]);
  return (
    <div className="w-screen h-screen">
      <LoginForm/>
    </div>
  )
}

export default Page
