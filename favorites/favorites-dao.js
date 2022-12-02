import favoritesModel from "./favorites-model.js";

export const addToFavorites = (favorite) => favoritesModel.create(favorite)

export const findFavoritesByUser = (authorId) => favoritesModel.find({authorId})