const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const PostsController = require('./controllers/PostsController')

// express middleware
module.exports = (app) => {
  app.post('/register',
    AuthControllerPolicy.register, //validate before hitting controller
    AuthController.register)
  app.post('/login',
    AuthController.login)
  app.get('/posts',
    PostsController.index)
  app.post('/posts',
    PostsController.post)
}
