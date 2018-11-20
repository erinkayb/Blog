const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options){
   const SALT_FACTOR = 8

   if(!user.changed('password')){
     return
   }

   return bcrypt
   .genSaltAsync(SALT_FACTOR)
   .then(salt => bcrypt.hashAsync(user.password, salt, null))
   .then(hash => {
     // save hashed password
     user.setDataValue('password', hash)
   })
}

module.exports = (sequelize, DataTypes) => {
  // using sequelize to define a new model called user.
  // this model is used to store user info.
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      // cannot use the same email to make new account
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: hashPassword
    }
  })
  User.prototype.comparePassword = function(password) {
    // compare password to models password
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}
