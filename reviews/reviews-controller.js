import * as dao from "./reviews-dao.js"


export const ReviewsController = (app) => {

    const createReview = async (req, res) => {
        const review = req.body
        review.rid = (new Date()).getTime()+'';
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        const storedReview = await dao.createReview(review)
        res.json(storedReview)
    }

    const deleteReview = async (req,res) => {
        const reviewToDelete = req.params.rid
        const status = await dao.deleteReview(reviewToDelete)
        res.json(status)
    }

    const findReviewsByAnime = async (req, res) => {
        const reviews = await dao.findReviewsByAnime(req.params.animeId)
        res.json(reviews)
    }

    const findReviewsByAuthor = async (req, res) => {
        const reviews = await dao.findReviewsByAuthor(req.params.userId)
        res.json(reviews)
    }

    app.post('/api/reviews', createReview)
    app.get('/api/anime/:animeId/reviews', findReviewsByAnime)
    app.get('/api/users/:userId/reviews', findReviewsByAuthor)
    app.delete('/api/reviews/rid', deleteReview)
}