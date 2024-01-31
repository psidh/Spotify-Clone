'use client'
import SideBar from '@/components/SideBar';

import Image from 'next/image'
import AudioPlayer from 'react-h5-audio-player';
import '@/components/audioStyles.css'

export default function Page() {
  return (
    <div>
      <div className='flex justify-between items-start'>
        <div className='w-[15%]'>
          <SideBar />
        </div>
        <div className='w-[85%]'>
          <div>
          <div className='bg-gradient-to-b from-[#9b5262] via-[#502730] to-black flex justify-start items-start'>
        <div className='px-6 mt-6  w-[30%]'>
          <a href="/home" className='px-8 py-2
           rounded-lg bg-white text-black hover:bg-black
            border hover:text-white transition duration-200
            '>Home</a>
        </div>
        <div className='flex flex-col justify-center items-center mt-12'>
          <div className='flex flex-col justify-center items-start'>
              <Image width={500} height={500} src='/playlists/vintage.jpg' alt='Spotify Logo' className='rounded-xl' />
              <h1 className='text-3xl font-semibold mt-6'>Song Name</h1>
              <h1 className='text-xl mb-6'>Artist Name</h1>
              <AudioPlayer
                autoPlay
                src="/songs/rapgod.mp3"
                onPlay={e => console.log("onPlay")}
                className='bg-black text-white'
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
