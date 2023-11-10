import connectMongoDB from '../../../libs/mongodb'
import Project from '../../../models/project'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const { title, description, image } = await request.json();
    await connectMongoDB();
    await Project.create({ title, description, image });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB()
    const projects = await Project.find()
    return NextResponse.json({projects}) 
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Project.findByIdAndDelete(id)
    return NextResponse.json({ message: "Topic Deleted"}, { status: 200 }) 
}