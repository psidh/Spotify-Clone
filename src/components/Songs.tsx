import Image from 'next/image'
import songs from "@/data/data";


export default function Songs() {
  const data = songs;
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='grid grid-cols-8 gap-4'>
      {data && data.map((song)=>{
        return(
        <div key={song.title}>
        <Image src={song.poster} width={120} height={120} alt='Song Cover' className='rounded-sm' />
        <h1 className='text-lg mt-2 text-white '>Song Name</h1>
        <h2 className='text-sm mt-1 text-[#cecece]'>Artist Name</h2>
        </div>)
      })}
      </div>
    </div>

  )
}
