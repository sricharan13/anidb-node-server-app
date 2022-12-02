import mongoose from "mongoose";

const favoritesSchema = mongoose.Schema(
    {
        animeId: {
            type: String
        },
        title: String,
        image: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UsersModel'
        }
    }, {collection: 'favorites'}
)

export default favoritesSchema