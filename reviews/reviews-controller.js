
export const ReviewsController = (app) => {

    const createReview = (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        res.json(review)
    }

    app.post('/api/reviews', createReview)
}