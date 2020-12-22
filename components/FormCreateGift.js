import { useState } from 'react'

function PrettyPrint (props) {
  return <pre>{JSON.stringify(props.jsonObj, null, 2)}</pre>
}

const FormCreateGift = ({recipient, setRecipient, header, setHeader, headline, setHeadline}) => {

  const handleSubmit = e => {
    e.preventDefault()
    console.log('form submited')
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className='space-y-8 m-8 p-8 text-center rounded-xl shadow-2xl'>
      <div className='block flex align-middle justify-center'>
        <label htmlFor='recipient'>
          Nom du destinataire:
        </label>
        <input name='recipient' type="text"
               className='border-2'
               value={recipient}
               onChange={e => setRecipient(e.target.value)}/>
      </div>

      <div className='block flex align-middle justify-center'>
        <label htmlFor='header'>
          Description du cadeau:
        </label>
        <input name='header' className='border-2' type="text" value={header} onChange={e => setHeader(e.target.value)}/>
      </div>

      <div className='block flex align-middle justify-center'>
        <label htmlFor='headline'>
          Mot clé du cadeau:
        </label>
        <input name='headline' className='border-2' type="text" value={headline} onChange={e => setHeadline(e.target.value)}/>
      </div>

      <div className='block'>
        <input type="submit" value="Sauvegarder" className='bg-red-700 rounded text-white p-1.5'/>
      </div>

      <PrettyPrint jsonObj={{ recipient, header, headline }}/>
    </form>
  )

}

export default FormCreateGift
