'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuthGuard = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/auth'); // Si no hay un token de acceso, redirige a la página de inicio de sesión
    }
  }, [router]);

  return null; // O puede devolver cualquier otro elemento que desee mostrar mientras se verifica la autenticación
};
export default useAuthGuard;