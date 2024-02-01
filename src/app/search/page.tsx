'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import SongsInterface from '@/interfaces/songsInterface';
import SideBar from '@/components/SideBar';

export default function SearchResultsPage({
  params,
}: {
  params: { name: string };
}) {
  const [searchResults, setSearchResults] = useState<SongsInterface[]>([]);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?query=${searchTerm}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('Server error:', response);
        console.error('Failed to fetch data from the server');
        return;
      }

      const data = await response.json();

      setSearchResults(data);
    } catch (error) {
      console.error('Client error:', error);
    }
  };

  const handlePush = (result: SongsInterface) => {
    router.push(`/home/${result._id}`);
    return;
  };

  return (
    <section className='bg-black h-screen text-white'>
      <div className='flex justify-between items-start bg-black'>
        <div className='hidden md:flex'>
          <SideBar />
        </div>
        <div className='w-[85%] m-8'>
          <h1 className='text-4xl mt-6'>Search Songs</h1>
          <div className='flex md:justify-start justify-between items-center'>
            <input
              type='text'
              title='search'
              className='focus:outline-none border-b my-4 bg-black border-white py-3 w-[55%] md:w-[60%]'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className='py-2 px-8 ml-4 bg-green-600 hover:bg-green-700 rounded-lg'
            >
              Search
            </button>
          </div>
          {searchResults.length > 0 &&
            searchResults.map((result) => (
              <div
                onClick={() => handlePush(result)}
                key={result._id}
                className='flex items-start space-x-8 border border-[#525252] p-4 rounded-3xl cursor-pointer'
              >
                <img
                  src={result.poster}
                  alt='Movie'
                  className='rounded-xl object-cover w-32 h-32 md:h-48 md:w-48'
                />
                <div className='flex flex-col justify-between sm:justify-start items-start'>
                  <h1 className='text-xl md:text-2xl lg:text-4xl'>
                    {result.title}
                  </h1>
                  <h2 className='text-lg md:text-xl md:my-2 text-[#666666]'>
                    {result.album}
                  </h2>
                  <h3 className='text-md md:text-lg md:my-2 my-3 text-[#b8b8b8]'>
                    Release Year: {result.artist}
                  </h3>
                  <h4 className='text-md md:text-lg  md:mt-2 text-[#b8b8b8]'>
                    Genre: {result.genre}
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
