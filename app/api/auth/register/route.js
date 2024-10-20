import { dbConnect } from '@/database/dbConnect';
import usersModel from '@/database/users/users.model';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const maxDuration = 300;

export const POST = async (request) => {

    const { fname, lname, email, password } = await request.json();
    await dbConnect();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {
        name: `${fname} ${lname}`,
        email,
        password: hashedPassword
    }


    try {
        await usersModel.create(newUser);
        return new NextResponse("User created successfully", {
            status: 201,
        })

    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        })
    }

}