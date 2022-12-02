import * as dao from './favorites-dao.js'

export const FavoritesController = (app) => {

    const addToFavorites = async (req, res) => {
        const favorite = req.body
        const currentUser = req.session['currentUser']
        favorite.author = currentUser._id
        console.log(favorite)
        const storedFavorite = await dao.addToFavorites(favorite)
        console.log(storedFavorite)
        res.json(storedFavorite)
    }

    app.post('/api/favorites', addToFavorites)
}
