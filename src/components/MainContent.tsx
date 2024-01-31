import PlaylistCard from './PlaylistCard';
import SongCard from './Songs';

export default function MainContent() {
  return (
    <div className='flex flex-col justify-between h-screen items-start bg-gradient-to-b from-[#28b3726d] from-33% via-[#0b2f6eb9] via-70% to-black to-100% p-6'>
      <h1 className='text-4xl font-bold'>Welcome back!</h1>
      <PlaylistCard />
      <SongCard />
    </div>
  );
}
