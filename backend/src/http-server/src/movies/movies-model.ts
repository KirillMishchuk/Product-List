import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    plot: String,
    genres: {
        type: [String],
        required: true,
        default: [],
    },
    cast: {
        type: [String],
        required: true,
        default: [],
    },
    runtime: Number,
    num_mflix_comments: Number,
    poster: String,
    title: String,
    fullplot: String,
    countries: {
        type: [String],
        required: true,
        default: [],
    },
    released: Date,
    directors: {
        type: [String],
        required: true,
        default: [],
    },
    writers: {
        type: [String],
        required: true,
        default: [],
    },
    awards: Object,
    lastupdated: Date,
    year: Number,
    imdb: Object,
    type: String,
    tomatoes: Object,
});

export default mongoose.model("Movie", movieSchema);
