'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Changed from 'next/navigation'
import SongsInterface from '@/interfaces/songsInterface';

interface SongCardProps {}

export default function SongCard(props: SongCardProps): JSX.Element {
  const router = useRouter();
  const [data, setData] = useState<SongsInterface[]>([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await fetch('/api/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data: SongsInterface[] = await response.json();
        setData(data);
        console.log(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getAll();
  }, []);

  const handlePush = (id: string) => {
    router.push(`/home/${id}`);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='grid grid-cols-5 gap-x-6 gap-y-6'>
        {data.map((song) => (
          <div key={song._id} className='rounded-md bg-black bg-opacity-20 cursor-pointer' onClick={() => handlePush(song._id)}>
            <Image
              src={song.poster}
              width={220}
              height={220}
              alt='Song Cover'
              className='rounded-t-md'
            />
            <div className='px-4 mt-4 mb-1'>
              <h1 className='text-lg text-white'>{song.title}</h1>
              <h2 className='text-sm text-[#cecece]'>{song.artist}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
