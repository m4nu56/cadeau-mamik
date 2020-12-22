import Head from 'next/head'
import { GiftContainer } from '../components/GiftContainer'

// noinspection JSUnusedGlobalSymbols
export default function Home() {

  return (
    <div className='h-screen flex align-middle justify-center'>
      <Head>
        <title>Cadeau Mamik</title>
      </Head>

      <main>
        <GiftContainer giftHeader="3 séances de" giftHeadline="couture" />
      </main>
    </div>
  )
}
