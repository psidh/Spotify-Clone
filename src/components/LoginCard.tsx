'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function Login() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  async function loginUser() {
    try {
      console.log('clicking');

      toast.loading('Waiting...', {
        duration: 2000,
      });
      console.log(user);

      const response = await axios.post('/api/login', user);
      toast.success('Login successful', {
        duration: 2000,
      });
      console.log(response);
      console.log('button clicked');

      router.push('/home');
    } catch (error) {
      toast.error('Email or Password seems to be incorrect. Please try again');
      console.log(error);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <section className='bg-gradient-to-b from-[#212121] to-black'>
      <Toaster />
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='loginCard'>
          <h1 className='text-3xl font-semibold text-white mb-2'>Sign In</h1>

          <div className={`relative w-full my-2 mb-2'}`}>
            <input
              type='email'
              title='email'
              id='email'
              className='loginInputs'
              placeholder='Email Address'
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className={`relative w-full my-2 mb-2`}>
            <input
              type='password'
              title='password'
              id='password'
              className='loginInputs'
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder='Password'
            />
          </div>
          <button
            className='signin'
            onClick={loginUser}
            disabled={buttonDisabled}
          >
            Sign In
          </button>

          <a href='/signup' className='text-slate-500 my-4'>
            Already on Spotify?{' '}
            <span className='text-white text-lg hover:underline underline-offset-2'>
              SignUp now
            </span>
          </a>
          <a href='/' className='text-white mt-4'>
            Home
          </a>
        </div>
      </div>
    </section>
  );
}
