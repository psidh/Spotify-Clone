import Image from 'next/image';

export default function Navbar() {
  return (
    <div>
      <div className='flex justify-between items-center p-6'>
        <Image width={120} height={120} src='/spotifylogo.png' alt='' />
        <h1 className='text-2xl'>   </h1>
      </div>
    </div>
  );
}
