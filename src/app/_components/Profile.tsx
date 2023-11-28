'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

type IUserData ={
    username : string;
    full_name:string
    email:string;

}
const UserDataDisplay = () => {
  const [userData, setUserData] = useState<null|IUserData>(null);
  const [error, setError] = useState<null|string>(null);

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
    <div className=" p-20 h-screen w-screen border-2 rounded">
      {userData ? (
        <div className="space-y-4 flex flex-col text-xl font-semibold">
          <h2>User Information</h2>
          <p>Username: {userData.username}</p>
          <p>Full Name: {userData.full_name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default UserDataDisplay;
