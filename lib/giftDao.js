const { Client } = require('pg')

const databaseParameters = {
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  host: process.env.NEXT_PUBLIC_DB_HOST,
  port: process.env.NEXT_PUBLIC_DB_PORT,
  database: process.env.NEXT_PUBLIC_DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
}

/**
 * Read a gift card from database by its id
 * @param id
 * @returns {Promise<*>}
 */
export const findById = async id => {
  console.log(databaseParameters)
  const client = await new Client(databaseParameters)
  client.connect()

  const text = 'SELECT * FROM gifts WHERE ID = $1'
  const values = [id]

  try {
    const result = await client.query(text, values)
    console.log(result.rows[0])
    return result.rows[0]
  } catch (err) {
    console.log(err.stack)
  } finally {
    client.end()
  }
}

/**
 * Insert a gift in database
 * @param recipient
 * @param header
 * @param headline
 * @returns {Promise<*>}
 */
export const create = async ({ recipient, header, headline }) => {
  const client = await new Client(databaseParameters)
  client.connect()

  const text = 'INSERT INTO gifts(recipient, header, headline) VALUES($1, $2, $3) RETURNING *'
  const values = [recipient, header, headline]

  try {
    const result = await client.query(text, values)
    console.log(result.rows[0])
    return result.rows[0]
  } catch (err) {
    console.log(err.stack)
  } finally {
    client.end()
  }
}

