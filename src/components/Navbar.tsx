'use client';
import { useState } from 'react';
import { BsMenuButton } from 'react-icons/bs';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Navbar() {
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

  const [nav, setNav] = useState<Boolean>(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className='flex justify-between items-center p-6'>
        <Image width={120} height={120} src='/spotifylogo.png' alt='' />
        <h1 className='text-2xl'>   </h1>
        <BsMenuButton onClick={toggleNav} className='text-xl flex md:hidden' />
      </div>
      {nav ? (
        <div>
          <div className='invisible md:visible flex flex-col items-center justify-start p-4  h-screen'>
            <Image
              width={120}
              height={120}
              src='/spotifylogo.png'
              alt='Spotify Logo'
              className='my-8'
            />
            <a href='/' className='text-xl my-4'>
               Home 
            </a>
            <a href='/search' className='text-xl my-4'>
              Search
            </a>
            <a href='/artists' className='text-xl my-4'>
              Artists
            </a>
            <a href='/favorites' className='text-xl my-4'>
              Favorites
            </a>
            <button onClick={logout} className='logout'>
              {' '}
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
