// export whatever routes should be authenticated.
const {Post} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const posts = await Post.findAll({
        limit: 10
      })
      res.send(posts)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured fetching posts.'
      })
    }
  },
  async post (req, res) {
    try {
      const post = await Post.create(req.body)
      res.send(post)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured creating post.'
      })
    }
  }
}
