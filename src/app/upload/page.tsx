'use client'
import { useEffect } from 'react';
import artists from '@/data/data';

export default function Page() {
  useEffect(() => {
    const uploadSong = async () => {
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(artists), // Assuming songs is the array of songs
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        console.log('Songs uploaded successfully');
      } catch (error) {
        console.error(error);
      }
    };

    uploadSong(); // Call the function
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div className='flex flex-col justify-center items-center'>
      Uploading...
    </div>
  );
}
