import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Artist from '@/models/artistModel';

connect();

export async function GET(request: NextRequest){
  try {
    const id = await request.nextUrl.searchParams.get('id');
    const response = await Artist.findOne({_id : id});
    return NextResponse.json(response, { status: 200 });
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
    
  }
}