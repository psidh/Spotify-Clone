import Image from 'next/image';

export default function PlaylistCard() {
  return (
    <div>
      <div className='rounded-lg flex justify-between items-center'>
        <Image src={'/playlists/rap.jpg'} width={120} height={120} alt='Playlist Cover' />
        <div className='bg-[]'>
          <h1 className='text-3xl font-semibold'>Morning Sunshine</h1>
        </div>
      </div>
    </div>
  );
}
