import followsModel from "./follows-model.js";

export const followUser = (follow) => {
        return followsModel.create(follow)
}


export const findFollowers = (followed) => {
    return followsModel.find({followed}).populate('follower').exec()
}


export const findFollowing = (follower) => {
    return followsModel.find({follower}).populate('followed').exec()
}