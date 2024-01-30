import PlaylistCard from './PlaylistCard';
import Songcard from './Songs';

export default function MainContent() {
  return (
    <div className='flex flex-col justify-between items-start bg-gradient-to-b from-[#3f3f3f] to-black p-8'>
      <h1 className=''>Welcome back!</h1>
      <PlaylistCard />
      <Songcard />
    </div>
  );
}
