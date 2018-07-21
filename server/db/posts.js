const conn = require('./connection')

function addPost(post) {
  return conn('posts')
    .insert(post)
}

function getPosts() {
  return conn('posts')
    .then(posts => {
      console.log(posts)
    })
}

function getPostsWithUsers() {
  return conn('users')
    .join('posts', 'users.id', 'posts.user_id')
    .select('posts.id as post_id', 'users.id as user_id', 'users.user_name as Username', 'posts.title as Title' )
}

module.exports = {
  addPost,
  getPosts,
  getPostsWithUsers
}