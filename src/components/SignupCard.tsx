'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import React from 'react';
import axios from 'axios';

export default function Page() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const signUpUser = async () => {
    try {
      toast.loading('Waiting...', {
        duration: 2000,
      });
      const response = await axios.post('/api/signup', user);
      console.log(response);
      toast.success('Sign up successful');
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <section className='bg-gradient-to-b from-[#212121] to-black'>
        <Toaster />
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='loginCard'>
            <h1 className='text-3xl font-semibold text-white mb-2'>Sign Up</h1>

            <div className='relative w-full my-2 mb-2'>
              <input
                type='email'
                title='email'
                id='email'
                className='loginInputs'
                placeholder='Email Address'
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className='relative w-full my-2 mb-2'>
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
              onClick={signUpUser}
              disabled={buttonDisabled}
            >
              Sign Up
            </button>

            <a href='/login' className='text-slate-500 my-4'>
              Already have an account?{' '}
              <span className='text-white text-lg hover:underline underline-offset-2'>
                Log In
              </span>
            </a>
            <a href='/' className='text-white mt-4'>
              Home
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
