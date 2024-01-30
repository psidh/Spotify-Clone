import SideBar from '@/components/SideBar';

import MainContent from '@/components/MainContent';
export default function Page() {
  return (
    <div>
      <div className='flex justify-between items-start'>
        <div className='w-[15%]'>
          <SideBar />
        </div>
        <div className='w-[85%]'>
          <MainContent />
        </div>
      </div>
    </div>
  );
}
