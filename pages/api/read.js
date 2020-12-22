import { findById } from '../../lib/giftDao'

export default async (req, res) => {
  try {
    const { id } = req.query
    const gift = await findById(id)
    res.status(200).json(gift)
  } catch (e) {
    console.error(e)
    res.status(500)
  }
};
