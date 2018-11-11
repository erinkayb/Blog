module.exports = (sequelize, DataTypes) =>
  // using sequelize to define a new model called user.
  // this model is used to store user info.
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      // cannot use the same email to make new account
      unique: true
    },
    password: DataTypes.STRING
  })
