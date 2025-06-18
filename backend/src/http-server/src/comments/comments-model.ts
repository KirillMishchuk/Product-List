import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    name: String,
    email: String,
    text: String,
    date: Date,
});

export default mongoose.model("Comment", commentSchema);
