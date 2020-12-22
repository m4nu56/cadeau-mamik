import { databaseParameters } from '../../lib/postgres'
const {  Client } = require('pg')

export default async (req, res) => {
  try {

    if (req.method === 'POST') {
      const { recipient, header, headline } = req.body

      const client = await new Client(databaseParameters)
      client.connect()

      const text = 'INSERT INTO gifts(recipient, header, headline) VALUES($1, $2, $3) RETURNING *'
      const values = [recipient, header, headline]

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
    return

  } catch (e) {
    console.error(e)
    res.status(500)
  }
};
