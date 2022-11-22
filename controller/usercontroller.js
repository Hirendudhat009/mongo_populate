const { Post, User } = require('../models/usermodel')
exports.postUser = async (req, res, next) => {
    try {
        const user = new User({ username: "hiren", email: "hiren@gsd.com" })
        try {
            const post = new Post({
                title: 'book',
                body: 'good',
                user: user._id
            })
            // await user.posts.push(post.id)
            await post.save()
            await user.save()
            res.send(user)
        }
        catch (err) { console.log(err) }
    }
    catch (err) { console.log(err) }
}

exports.getUser = async (req, res, next) => {
    const user = await User.find({})
        .populate('posts')
        .exec()
    res.send(user);

}