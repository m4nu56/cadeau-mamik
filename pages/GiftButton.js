export default function GiftButton ({ onClick }) {

  const animateButton = function (e) {
    e.preventDefault
    e.target.classList.remove('animate')
    e.target.classList.add('animate')
    setTimeout(function () {
      e.target.classList.remove('animate')
      onClick();
    }, 700)
  }

  return (
    <button className='bubbly-button hover:shadow-2xl hover:bg-red-800'
            onClick={(e) => animateButton(e)}>Découvre ton cadeau</button>
  )

}
