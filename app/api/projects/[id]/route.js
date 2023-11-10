import connectMongoDB from '../../../../libs/mongodb'
import Project from '../../../../models/project'
import { NextResponse } from 'next/server'

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description, newImage: image, newSkills: skills, newLiveUrl: liveUrl, newGitUrl: gitUrl } = await request.json()
    await connectMongoDB()
    await Project.findByIdAndUpdate(id, {title, description, image, skills, liveUrl, gitUrl})
    return NextResponse.json({ message: "Topic updated" }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = params 
    await connectMongoDB()
    const topic = await Project.findOne({ _id: id })
    return NextResponse.json({ topic }, { status: 200 })
} 