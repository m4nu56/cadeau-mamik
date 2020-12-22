export function GiftContent ({ setClicked, header = '3 séances de', headline = 'couture' }) {
  return <div className='leading-loose text-5xl uppercase text-center text-white font-bold'
              onClick={() => setTimeout(() => setClicked(false), 700)}>

    {header}
    <br/>
    <span className='text-red-700 inset-0 px-2 bg-gray-100 transform -skew-x-12 -z-10'>
      {headline}
    </span>

  </div>
}
