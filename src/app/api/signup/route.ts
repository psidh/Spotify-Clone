import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import User from '@/models/userModel';
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password, tier} = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: 'User already exists please login' },
        { status: 400 }
      );
    }


    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      tier,
    });

    console.log(newUser);
    

    const savedUser = await newUser.save();
       return NextResponse.json({
      message: 'User created successfully',
      success: true,
      savedUser,
    });
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
