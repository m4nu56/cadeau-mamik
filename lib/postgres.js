const { Pool, Client } = require('pg')

export const databaseParameters = {
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  host: process.env.NEXT_PUBLIC_DB_HOST,
  port: process.env.NEXT_PUBLIC_DB_PORT,
  database: process.env.NEXT_PUBLIC_DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
}
