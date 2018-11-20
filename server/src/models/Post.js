module.exports = (sequelize, DataTypes) => {
  // using sequelize to define a new model called user.
  // this model is used to store user info.
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    body: DataTypes.TEXT, //text because string has a limited char num
    image: DataTypes.STRING,
  })

  return Post
}
