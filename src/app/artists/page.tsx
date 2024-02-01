import SideBar from '@/components/SideBar';

import ArtistContent from '@/components/ArtistContent';
export default function Page() {
  return (
    <div className=''>
      <div className='flex justify-between items-start'>
        <div className='hidden md:flex'>
          <SideBar />
        </div>
        <div className='w-[85%] bg-gradient-to-b bg-black'>
          <ArtistContent />
        </div>
      </div>
    </div>
  );
}
