
import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Artist from '@/models/artistModel';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const savedArtists = await Promise.all(
      reqBody.map(async (songData: any) => {
        const { name, description, poster, songs } = songData;

        const newArtist = new Artist({
          poster,
          description,
          name,
          songs,
        });
        console.log(newArtist);

        return await newArtist.save();
      })
    );

    return NextResponse.json({
      message: 'Songs uploaded successfully',
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
