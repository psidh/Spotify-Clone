'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Changed from 'next/navigation'
import ArtistInterface from '@/interfaces/artistInterface';

interface SongCardProps {}

export default function SongCard(props: SongCardProps): JSX.Element {
  const router = useRouter();
  const [data, setData] = useState<ArtistInterface[]>([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await fetch('/api/artists', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data: ArtistInterface[] = await response.json();
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
    <div className='flex flex-col items-center justify-center mt-16'>
      <div className='grid grid-cols-4 gap-4'>
        {data.map((artist) => (
          <div key={artist._id} className=' flex flex-col items-center justify-center
          rounded-md bg-black bg-opacity-20 cursor-pointer' onClick={() => handlePush(artist._id)}>
            <Image
              src={artist.poster}
              width={240}
              height={240}
              alt='artist Cover'
              className='rounded-t-md w-52 h-48'
            />
            <div className='px-4 my-2'>
              <h1 className='text-lg text-white'>{artist.name}</h1>
              <h2 className='text-sm text-[#cecece]'>{artist.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
