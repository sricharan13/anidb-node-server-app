import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
    {
        animeId: String,
        animeTitle: String,
        review: String,
        rid: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UsersModel'
        }
    }, {collection: 'reviews'}
)

export default reviewsSchema