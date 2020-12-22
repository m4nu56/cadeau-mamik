import { useState } from 'react'
import GiftButton from './GiftButton'
import { Transition } from '@tailwindui/react'
import { GiftContent } from './GiftContent'

export const GiftContainer = props => {
  const [isClicked, setClicked] = useState(false)

  return <main className='h-screen flex align-middle justify-center'>
    <div className='h-screen w-screen flex align-middle items-center justify-center bg-center bg-cover'
         style={{ backgroundImage: 'url(background.webp)' }}>

      {!isClicked && <GiftButton setClicked={setClicked} recipient={props.recipient}/>}

      <Transition
        show={isClicked}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {isClicked && <GiftContent {...props} setClicked={setClicked}/>}
      </Transition>
    </div>
  </main>
}
