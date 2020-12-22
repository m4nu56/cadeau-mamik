import { GiftContainer } from '../components/GiftContainer'

// noinspection JSUnusedGlobalSymbols
const Home = ({ recipient = 'Mamik', header = '3 séances de', headline = 'couture' }) =>
  <GiftContainer recipient={recipient} header={header} headline={headline}/>

Home.getInitialProps = ({ query }) => query

export default Home
