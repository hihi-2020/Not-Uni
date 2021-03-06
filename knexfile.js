// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './server/db/migrations/'
    },
    seeds: {
      directory: './server/db/seeds/'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/db/migrations/'

    },
    seeds: {
      directory: './server/db/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    pool: { 
      min: 2, 
      max: 10 
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/db/migrations/'
    },
    seeds: {
      directory: './server/db/seeds/'
    }
  }

};
