import Image from 'next/image';

export default function SongCard() {
  return (
    <div>
      <div className='rounded-lg flex justify-between items-center space-x-16'>
        <div className='my-6 rounded-lg flex justify-between items-center bg-gradient-to-r from-green-300 to-blue-600'>
          <img
            src={'/posters/liked.webp'}
            alt='Playlist Cover'
            className='rounded-l-lg  w-12 h-12 md:w-24 md:h-24 md:object-cover'
          />
          <h1 className='text-xl md:text-2xl font-bold md:px-8'>Favourites</h1>
        </div>
        <div className='my-6 rounded-lg flex justify-between items-center bg-gradient-to-r from-teal-500 to-fuchsia-500'>
          <img
            src={'/posters/discover.jpg'}
            alt='Playlist Cover'
            className='rounded-l-lg  w-12 h-12 object-cover md:w-24 md:h-24 md:object-cover'
          />
          <h1 className='text-xl md:text-2xl font-bold md:px-8'>Discover</h1>
        </div>
      </div>
    </div>
  );
}
