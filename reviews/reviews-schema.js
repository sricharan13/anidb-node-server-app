import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
    {
        review: String,
        animeId: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UsersModel'
        }
    }, {collection: 'reviews'}
)

export default reviewsSchema