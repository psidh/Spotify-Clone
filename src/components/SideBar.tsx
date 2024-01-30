'use client';
import React from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SideBar() {
  const router = useRouter();
  async function logout() {
    const response = await fetch('/api/logout');
    if (response.ok) {
      toast.success('Logout successful');
      router.push('/login');
      console.log('logout successful');
    } else {
      console.log('Error logging out');
    }
  }
  return (
    
      <div className='flex flex-col items-start justify-between p-4'>
        <Image width={120} height={120} src='/spotifylogo.png' alt='Spotify Logo' className='my-8' />
        <button onClick={logout} className='logout'> Logout</button>
        Sidebar
      </div>
  );
}
