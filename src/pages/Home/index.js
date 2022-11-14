import Banner from '../../components/Banner';
import SearchBar from '../../components/SearchBar';
import PlacesGrid from '../../containers/PlacesGrid';
import styles from './styles.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <article>
          <h1 className={styles.hero_header}>
            Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the metaverse,&nbsp;
            get a chance to turn your imagination to reality at your comfort zone
          </p>
          <SearchBar />
        </article>
      </section>

      <Banner />
      <section className={styles.grid_section}>
        <h1>Inspiration for your next adventure</h1>
        <PlacesGrid rows={2} />
      </section>
    </main>
  )
};

export default Home;