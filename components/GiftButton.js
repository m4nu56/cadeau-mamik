export default function GiftButton ({ setClicked, recipient }) {

  const animateButton = e => {
    e.preventDefault
    e.target.classList.remove('animate')
    e.target.classList.add('animate')
    setTimeout(() => setClicked(true), 700)
  }

  return (
    <button className='bubbly-button hover:shadow-2xl hover:bg-red-800'
            onClick={(e) => animateButton(e)}>
      Découvre ton cadeau {recipient}
    </button>
  )

}
