const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch(error.details[0].context.key){
        case 'email':
          res.status(400).send({
            error: 'Valid email is required'
          })
          break
        case 'password':
        res.status(400).send({
          error: 'Password must contain between 8 and 32 characters and only use letters and numbers.'
        })
          break
        default:
          res.status(400).send({
            error: 'Invalid input.'
          })
      }
    } else {
    next()
  }
  }
}
