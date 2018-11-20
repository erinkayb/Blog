module.exports = {
  port: process.env.PORT || 8081,
  // corresponds to models/index.js
  db: {
    database: process.env.DB_NAME || 'blogapp', //name of database
    user: process.env.DB_USER || 'blogapp',
    password: process.env.DB_PASS || 'blogapp',
    options: {
        // tells what type of database connecting to
      dialect: process.env.DIALECT || 'sqlite',
       // location of database
      host: process.env.HOST || 'localhost',
      // where to store blogapp files
      storage: './blogapp.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
