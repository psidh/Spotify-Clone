import Image from 'next/image'

export default function Songs() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image src={'/playlists/rap.jpg'} width={120} height={120} alt='Song Cover' className='rounded-sm' />
      <h1 className='text-xl text-white '>Song Name</h1>
      <h2 className='text-md text-[#cecece]'>Artist Name</h2>
    </div>
  )
}
