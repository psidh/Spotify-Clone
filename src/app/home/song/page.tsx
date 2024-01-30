
import SideBar from '@/components/SideBar';
import SongContent from '@/components/SongContent';
export default function Page() {
  return (
    <div>
      <div className='flex justify-between items-start'>
        <div className='w-[15%]'>
          <SideBar />
        </div>
        <div className='w-[85%]'>
          <SongContent />
        </div>
      </div>
    </div>
  );
}
