import { connect } from '@/dbConfig/dbConfig';
import Song from '@/models/songModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest) {
  try {
    const query: string = request.nextUrl.searchParams.get('query') ?? '';
    const regex = new RegExp(escapeRegExp(query), 'i');

    const data = await Song.find({
      $or: [
        { title: { $regex: regex } },
      ],
    });

    if(data){
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: "No results found" }, { status: 404 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Function to escape special characters for regex
function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
