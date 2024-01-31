import SideBar from '@/components/SideBar';

import ArtistContent from '@/components/ArtistContent';
export default function Page() {
  return (
    <div>
      <div className='flex justify-between items-start'>
        <div className='w-[15%]'>
          <SideBar />
        </div>
        <div className='w-[85%]'>
          <ArtistContent />
        </div>
      </div>
    </div>
  );
}
