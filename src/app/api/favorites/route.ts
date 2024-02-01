import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import getDataFromToken from '@/helpers/getDataFromTokens';
import User from '@/models/userModel';
import Song from '@/models/songModel';

connect();

export async function POST(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);

    const songID = await request.nextUrl.searchParams.get('id');
    const user = await User.findOne({ _id: userID });
    const song = await Song.findOne({ _id: songID });
    if (user.favorites.findOne((track: any) =>!( track === song._id))) {
      console.log('exists'); 
    }else{
      console.log('not exists');
    }    
    return NextResponse.json({ message: 'loved' }, { status: 200 });



    if (user && song) {
      if (user.favorites.find((track: any) => track.song == song._id)) {
        return NextResponse.json({ message: 'exists' }, { status: 200 });
      }
      const track = {
        song: song._id,
      };
      user.favorites.push(track);
      await user.save();
      return NextResponse.json({ message: 'loved' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'error' }, { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
