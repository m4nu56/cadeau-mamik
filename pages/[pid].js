import { findById } from '../lib/giftDao'
import { GiftContainer } from '../components/GiftContainer'

const GiftCard = ({ gift }) =>
  <>
    <a href="/create" className='absolute top-0 right-0 m-2 bg-red-700 text-white p-1.5 rounded-xl'>Créez votre propre carte cadeau</a>
    <GiftContainer recipient={gift.recipient} header={gift.header} headline={gift.headline}/>
  </>

export async function getServerSideProps ({ params: { pid } }) {
  const gift = await findById(pid)
  return {
    props: {
      gift,
    },
  }
}

export default GiftCard
