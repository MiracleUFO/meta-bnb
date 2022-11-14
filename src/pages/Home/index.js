import Banner from '../../components/Banner';
import PlacesGrid from '../../containers/PlacesGrid';
import styles from './styles.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <section>
      </section>

      <Banner />
      <section>
        <h1>Inspiration for your next adventure</h1>
        <PlacesGrid rows={2} />
      </section>
    </main>
  )
};

export default Home;