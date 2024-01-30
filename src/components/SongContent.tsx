'use client'
import Image from 'next/image'
import AudioPlayer from 'react-h5-audio-player';
import './audioStyles.css'

export default function SongContent() {
  return (
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
            <div>
              <Image width={500} height={500} src='/playlists/vintage.jpg' alt='Spotify Logo' className='rounded-xl' />
            </div>
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
  )
}
