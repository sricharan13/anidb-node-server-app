import * as dao from './follows-dao.js'

const FollowsController = (app) => {
    const followUser = async (req, res) => {
        const follow = req.body
        const currentUser = req.session['currentUser']
        follow.follower = currentUser._id
        const actualFollow = await dao.followUser(follow)
        res.json(actualFollow)
    }
    const findFollowers = async (req, res) => {
        const followers = await dao.findFollowers(req.params.userId)
        res.json(followers)
    }
    const findFollowing = async (req, res) => {
        const followed = await dao.findFollowing(req.params.follower)
        res.json(followed)
    }
    const findIfFollowing = async (req, res) => {
        const followed = req.params.followed
        const follower = req.session['currentUser']
        let ifFollowed = false
        if (follower) {
            const result = await dao.findIfFollowing(followed, follower._id)
            if (result.length) {
                ifFollowed = true
            }
        }
        res.json(ifFollowed)
    }

    app.post('/follows', followUser)
    app.get('/follows/:userId/followers', findFollowers)
    app.get('/follows/:follower/following', findFollowing)
    app.get('/follows/:followed/if-following', findIfFollowing)
}

export default FollowsController