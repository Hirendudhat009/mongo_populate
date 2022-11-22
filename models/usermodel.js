const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
});
// userSchema.virtual('posts', {
//     ref: 'User',
//     localField: 'posts',
//     foreignField: 'user'
// })
const postSchema = new Schema({
    title: String,
    body: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports.Post = model('Post', postSchema);
module.exports.User = model('User', userSchema);
