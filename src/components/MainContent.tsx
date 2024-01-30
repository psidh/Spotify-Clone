import PlaylistCard from './PlaylistCard';
import Songcard from './Songs';

export default function MainContent() {
  return (
    <div className='flex flex-col justify-between items-start bg-gradient-to-b from-[#656565] from-33% via-[#212121] via-70% to-black to-100% p-8'> 
      <h1 className='text-4xl font-bold'>Welcome back!</h1>
      <PlaylistCard />
      <Songcard />
    </div>
  );
}
