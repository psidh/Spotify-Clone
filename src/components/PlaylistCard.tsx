import Image from 'next/image';

export default function SongCard() {
  return (
    <div>
      <div className='rounded-lg flex justify-between items-center space-x-16'>
        <div className='my-8 rounded-lg flex justify-between items-center bg-gradient-to-r from-cyan-300 to-pink-600'>
          <Image
            src={'/posters/liked.webp'}
            width={120}
            height={120}
            alt='Playlist Cover'
            className='rounded-l-lg'
          />
          <h1 className='text-3xl font-semibold px-8'>Favourites</h1>
        </div>
        <div className='my-8 rounded-lg flex justify-between items-center bg-gradient-to-r from-teal-500 to-pink-500'>
          <Image
            src={'/posters/discover.jpg'}
            width={120}
            height={120}
            alt='Playlist Cover'
            className='rounded-l-lg'
          />
          <h1 className='text-3xl font-semibold px-8'>Discover Songs</h1>
        </div>
      </div>
    </div>
  );
}
