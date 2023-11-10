import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        title: String,
        description: String,    
        image: String,
        skills: Array,
        liveUrl: String,
        gitUrl: String
    }, {
        timestamps: true,
    }
)

const Project = mongoose.models.Project2 || mongoose.model("Project2", projectSchema)

export default Project