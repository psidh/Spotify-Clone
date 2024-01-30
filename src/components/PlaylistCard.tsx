import Image from 'next/image';

export default function PlaylistCard() {
  return (
    <div>
      <div className='rounded-lg flex justify-between items-center space-x-16'>
        <div className='my-8 rounded-lg flex justify-between items-center bg-gradient-to-r from-yellow-300 to-amber-600'>
          <Image src={'/playlists/sunshine.jpg'} width={120} height={120} alt='Playlist Cover' className='rounded-l-lg' />
          <h1 className='text-3xl font-semibold px-8'>Morning Sunshine</h1>
        </div>
        <div className='my-8 rounded-lg flex justify-between items-center bg-gradient-to-r from-blue-300 to-fuchsia-500'>
          <Image src={'/playlists/discover.jpg'} width={160} height={160} alt='Playlist Cover' className='rounded-l-lg' />
          <h1 className='text-3xl font-semibold px-8'>Discover Songs</h1>
        </div>
      </div>
    </div>
  );
}
