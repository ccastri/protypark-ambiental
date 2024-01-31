'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type IUserData ={
    username : string;
    full_name:string
    email:string;

}
const UserDataDisplay = () => {
  const [userData, setUserData] = useState<null|IUserData>(null);
  const [error, setError] = useState<null|string>(null);
  const router = useRouter()
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
          setError('No access token available');
          return;
        }

        const response = await axios.get('http://localhost:8000/users/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          setUserData(response.data);
        } else {
          setError('Failed to fetch user data');
        }
      } catch (error) {
        setError('Error occurred while fetching user data');
        console.log(error)
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className=" items-center justify-center h-screen w-screen border-2 flex border-2 border-black  m-auto text-center flex-col rounded">
      {userData ? (
        <div className="space-y-4 flex flex-col text-xl font-semibold">
          <h2>User Information</h2>
          <p>Username: {userData.username}</p>
          <p>Full Name: {userData.full_name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <div className='my-6  z-50 space-y-2'>
        <p className='py-4'>Loading...</p>
        <p 
        className='button-hovered hover:bg-green-600 border-2 w-28 transition-all transform hover:ease-in-out hover:scale-105 duration-200 px-4 py-3 rounded-full'
        onClick={() => router.push('/auth')}>Ir a login</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default UserDataDisplay;
