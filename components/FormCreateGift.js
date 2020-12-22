import { useState } from 'react'
import absoluteUrl from 'next-absolute-url'
import { FaSpinner } from 'react-icons/fa'

const FormCreateGift = ({origin, recipient, setRecipient, header, setHeader, headline, setHeadline}) => {
  const [id, setId] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    if (isLoading) {
      return
    }
    setError(null)
    setLoading(true)
    try {
      const response = await fetch('/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient, header, headline }),
      })
      const gift = await response.json()
      setId(gift.id)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error(e)
      setError(`Il y a eu une erreur lors de la sauvegarde de votre carte cadeau: ${e}`)
    }
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

      <div className='block flex align-middle justify-center'>
        <button type="submit" className='bg-red-700 rounded text-white p-1.5 flex'>
          {isLoading && <>
          <svg className="animate-spin h-5 w-5 mr-3">
            <FaSpinner size={20}/>
          </svg>
          Préparation de votre carte cadeau...
          </>}
          {!isLoading && <span>Sauvegarder</span>}
        </button>
      </div>

      {
        id && <div className='bg-green-700 rounded-xl shadow-2xl text-white p-2'>
          Votre carte cadeau est accessible à l'url suivante: <br/>
          <a className='font-bold' href={`${origin}/${id}`}>{`${origin}/${id}`}</a>
        </div>
      }

      {
        error && <div className='bg-red-700 rounded-xl shadow-2xl text-white p-2'>
          {error}
        </div>
      }


    </form>
  )
}

export default FormCreateGift
