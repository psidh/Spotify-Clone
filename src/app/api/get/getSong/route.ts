import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Song from '@/models/songModel';

connect();

export async function GET(request: NextRequest){
  try {
    const id = await request.nextUrl.searchParams.get('id');
    const response = await Song.findOne({_id : id});
    return NextResponse.json(response, { status: 200 });
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
    
  }
}