import Head from 'next/head'
import GiftButton from './GiftButton'
import { useState } from 'react'
import { Transition } from '@tailwindui/react'

export default function Home() {

  const [isClicked, setClicked] = useState(false)

  return (
    <div className='h-screen flex align-middle justify-center'>
      <Head>
        <title>Cadeau Mamik</title>
      </Head>

      <main className='w-screen flex align-middle items-center justify-center bg-center bg-cover' style={{ backgroundImage: 'url(background.jpg)' }}>

          {!isClicked && <GiftButton onClick={() => {
            console.log('isClicked'); setClicked(true);
          }} />}

        <Transition
          show={isClicked}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {isClicked && <div className='leading-loose text-5xl uppercase text-center text-white font-bold'
                             onClick={() => setClicked(false)}>
            3 séances<br/>
            de<br/>
            <span className='text-red-700 inset-0 px-2 bg-gray-100 transform -skew-x-12 -z-10'>couture</span>
          </div>}
        </Transition>


      </main>
    </div>
  )
}
