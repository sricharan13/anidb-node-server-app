import reviewsModel from "./reviews-model.js";

export const deleteReview = (rid) => reviewsModel.deleteOne(rid)

export const createReview = (review) => reviewsModel.create(review)

export const findReviewById = (rid) => reviewsModel.findById(rid)

export const findReviewsByAnime = (animeId) => reviewsModel.find({animeId}).populate('author').exec()

export const findReviewsByAuthor = (author) => reviewsModel.find({author})
