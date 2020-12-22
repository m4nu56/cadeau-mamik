import { databaseParameters } from '../../lib/postgres'
const {  Client } = require('pg')

export default async (req, res) => {
  try {

    if (req.method === 'GET') {
      const { id } = req.query

      const client = await new Client(databaseParameters)
      client.connect()

      const text = 'SELECT * FROM gifts WHERE ID = $1'
      const values = [id]

      try {
        const result = await client.query(text, values)
        console.log(result.rows[0])
        res.status(200).json(result.rows[0])
      } catch (err) {
        console.log(err.stack)
      } finally {
        client.end()
      }
      return
    }
    res.status(500).json({ error: 'Method not allowed' })

  } catch (e) {
    console.error(e)
    res.status(500)
  }
};
