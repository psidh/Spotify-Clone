'use client';
import SideBar from '@/components/SideBar';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
import AudioPlayer from 'react-h5-audio-player';
import './styles.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SongsInterface from '@/interfaces/songsInterface';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps): JSX.Element {
  const [song, setSong] = useState<SongsInterface | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getSong = async () => {
      try {
        const response = await fetch(`/api/get/getSong?id=${params.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data: SongsInterface = await response.json();
        setSong(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSong();
  }, [params.id]);


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
                <a
                  href='/home'
                  className='px-8 py-2 rounded-lg bg-white text-black hover:bg-black border hover:text-white transition duration-200'
                >
                  Home
                </a>
              </div>
              <div className='flex flex-col justify-center items-center mt-12'>
                {song && (
                  <div className='flex flex-col justify-center items-start'>
                    <Image
                      width={500}
                      height={500}
                      src={song.poster}
                      alt='Spotify Logo'
                      className='rounded-xl'
                    />
                    <h1 className='text-3xl font-semibold mt-6'>
                      {song.title}
                    </h1>
                    <h1 className='text-xl mb-6'>{song.artist}</h1>
                    <h1 className='text-xl mb-6'>{song.album}</h1>
                    <AudioPlayer
                      autoPlay
                      src={song.songUrl}
                      onPlay={(e) => console.log('onPlay')}
                      className='bg-black text-white'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
