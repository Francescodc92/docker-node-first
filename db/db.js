import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://root:password@db:27017/');
        console.log("mongodb connected")
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;