import * as dao from './ratings-dao.js'

export const RatingsController = (app) => {

    const createRating = async (req, res) => {
        const rating = req.body
        const currentUser = req.session['currentUser']
        rating.user = currentUser._id
        const storedRating = await dao.createRating(rating)
        res.json(storedRating)
    }

    const findRatingForAnime = async (req, res) => {
        const result = await dao.findRatingForAnime(req.params.animeId, req.session['currentUser']._id)
        // console.log(result)
        res.send(result)
    }

    const findRatingsByUser = async (req, res) => {
        const ratings = await dao.findRatingsByUser(req.params.userId)
        res.json(ratings)
    }

    app.post('/api/ratings', createRating)
    app.get('/api/anime/:animeId/ratings', findRatingForAnime)
    app.get('/api/users/:userId/ratings', findRatingsByUser)

}