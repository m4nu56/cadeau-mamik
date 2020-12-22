import { useState } from 'react'
import GiftButton from './GiftButton'
import { Transition } from '@tailwindui/react'

export function GiftContainer ({ giftHeader = '3 séances de', giftHeadline = 'couture' }) {
  const [isClicked, setClicked] = useState(false)

  return <div className='h-screen w-screen flex align-middle items-center justify-center bg-center bg-cover'
              style={{ backgroundImage: 'url(background.webp)' }}>
    {!isClicked && <GiftButton onClick={() => setClicked(true)}/>}

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
                         onClick={() =>  setTimeout(() => setClicked(false), 700)}>
        {giftHeader}<br/>
        <span className='text-red-700 inset-0 px-2 bg-gray-100 transform -skew-x-12 -z-10'>{giftHeadline}</span>
      </div>}
    </Transition>
  </div>
}
