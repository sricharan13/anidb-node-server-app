import reviewsModel from "./reviews-model.js";

export const deleteReview = (review) => reviewsModel.deleteOne({rid: review})

export const createReview = (review) => reviewsModel.create(review)

export const findReviewById = (rid) => reviewsModel.findById(rid)

export const findReviewsByAnime = (animeId) => reviewsModel.find({animeId}).populate('author').exec()

export const findReviewsByAuthor = (author) => reviewsModel.find({author})
