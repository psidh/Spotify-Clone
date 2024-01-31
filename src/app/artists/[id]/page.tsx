
'use client';
import SideBar from '@/components/SideBar';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ArtistInterface from '@/interfaces/artistInterface';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps): JSX.Element {
  const [artist, setArtist] = useState<ArtistInterface | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getArtist = async () => {
      try {
        const response = await fetch(`/api/artists/getArtist?id=${params.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data: ArtistInterface = await response.json();
        setArtist(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    getArtist();
  }, [params.id]);

  return (
    <div>
      <div className='flex justify-between items-start'>
        <div className='w-[15%]'>
          <SideBar />
        </div>
        <div className='w-[85%]'>
          <div>
            <div className='bg-gradient-to-b from-[#195111] via-[#0b3200] to-black flex justify-start items-start pl-16'>
              <div className='flex flex-col justify-center items-center mt-12'>
                {artist && (
                  <div className='flex flex-col justify-center items-start'>
                    <img
                      src={artist.poster}
                      alt='artist Cover'
                      className='rounded-md object-cover w-60 h-60'
                    />
                    <h1 className='text-3xl font-semibold mt-6'>{artist.name}</h1>
                    <h2 className='text-xl mb-6'>{artist.description}</h2>
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
