'use client'
import { useRouter } from 'next/navigation';
import Home from './_components/EmailConfirm';
import LoginForm from './auth/page';
import { useEffect, useState } from 'react';

const Page = () => {
  const [token, setToken] = useState<null|string>(null);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      router.push('/auth'); // Redirect to login page if accessToken is not present
    }
  }, [router]);

  return (
    <main>
      <Home />
    </main>
  );
};

export default Page;
