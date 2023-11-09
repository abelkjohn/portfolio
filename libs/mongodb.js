import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to Mongo')
    } catch (error) {
        console.log('shit')
    }
}

export default connectMongoDB