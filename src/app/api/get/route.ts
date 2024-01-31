import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Song from '@/models/songModel';

connect();

export async function GET(request: NextRequest) {
  try {
    const data = await Song.find({})
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
