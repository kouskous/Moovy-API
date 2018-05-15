module.exports = {
  development: {
    username: "postgres",
    password: "s034235984S",
    database: "moovy",
    host: "51.15.142.70",
    dialect: 'postgres',
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  }
};
