import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Artist from '@/models/artistModel';

connect();

export async function GET(request: NextRequest) {
  try {
    const data = await Artist.find({})
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
