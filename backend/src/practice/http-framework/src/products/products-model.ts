import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    available: Boolean,
    category: String,
});

export default mongoose.model("Product", productSchema);
