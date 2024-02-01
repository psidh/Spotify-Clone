import Image from 'next/image';

export default function SongCard() {
  return (
    <div>
      <div className='rounded-lg flex justify-between items-center space-x-16'>
        <div className='my-6 rounded-lg flex justify-between items-center bg-gradient-to-r from-green-300 to-blue-600'>
          <Image
            src={'/posters/liked.webp'}
            width={80}
            height={80}
            alt='Playlist Cover'
            className='rounded-l-lg'
          />
          <h1 className='text-2xl font-bold px-8'>Favourites</h1>
        </div>
        <div className='my-6 rounded-lg flex justify-between items-center bg-gradient-to-r from-teal-500 to-amber-500'>
          <Image
            src={'/posters/discover.jpg'}
            width={80}
            height={80}
            alt='Playlist Cover'
            className='rounded-l-lg'
          />
          <h1 className='text-2xl font-bold px-8'>Discover Songs</h1>
        </div>
      </div>
    </div>
  );
}
