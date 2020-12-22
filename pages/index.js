import { GiftContainer } from '../components/GiftContainer'

// noinspection JSUnusedGlobalSymbols
const Home = ({ recipient = 'Mamik', header = '3 séances de', headline = 'couture' }) =>
  <>
    <a href="/create" className='absolute top-0 right-0 m-2 bg-red-700 text-white p-1.5 rounded-xl'>Créer votre propre carte cadeau</a>
    <GiftContainer recipient={recipient} header={header} headline={headline}/>
  </>

Home.getInitialProps = ({ query }) => query

export default Home
