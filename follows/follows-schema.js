import mongoose from "mongoose";

const followsSchema = mongoose.Schema({
    followed: {type: mongoose.Schema.Types.ObjectId, ref: 'UsersModel'},
    follower: {type: mongoose.Schema.Types.ObjectId, ref: 'UsersModel'},
}, {collection: 'follows'})

followsSchema.index({followed: 1, follower: 1}, {unique: true});

export default followsSchema