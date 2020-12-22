import { create } from '../../lib/giftDao'

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { recipient, header, headline } = req.body
      const gift = await create({ recipient, header, headline })
      res.status(200).json(gift)
      return
    }
    res.status(500).json({ error: 'Method not allowed' })
  } catch (e) {
    console.error(e)
    res.status(500)
  }
};
