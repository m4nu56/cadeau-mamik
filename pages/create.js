import { GiftContainer } from '../components/GiftContainer'
import FormCreateGift from '../components/FormCreateGift'
import { useState } from 'react'
import absoluteUrl from 'next-absolute-url'

const Create = ({ origin }) => {
  const [recipient, setRecipient] = useState('Mamik')
  const [header, setHeader] = useState('Bon pour un cadeau')
  const [headline, setHeadline] = useState('Voiture')

  return (
    <>
      <div className='grid gap-2 grid-cols-2'>
        <div className='h-screen flex flex-1 align-middle justify-center'>
          <FormCreateGift origin={origin} recipient={recipient} setRecipient={setRecipient}
                          header={header} setHeader={setHeader}
                          headline={headline} setHeadline={setHeadline}/>
        </div>

        <div className='h-screen bg-blue-500'>
          <GiftContainer recipient={recipient} header={header} headline={headline}/>
        </div>

      </div>
    </>
  )
}

Create.getInitialProps = async ({ req, res }) => {
  const { origin } = absoluteUrl(req, 'localhost:3000')
  console.log(origin)
  return { origin }
}

export default Create
