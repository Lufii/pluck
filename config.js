var  config = {
  production: {
    database: {
      username: process.env.USERNAME,
      password: process.env.PASS,
    }
  }
}

module.exports = config;
