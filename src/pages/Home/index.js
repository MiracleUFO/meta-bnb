import Banner from '../../components/Banner';
import SearchBar from '../../components/SearchBar';
import PlacesGrid from '../../containers/PlacesGrid';

import { images } from '../../containers/PlacesGrid/constants';
import GridImageOne from '../../assets/grid-img15-ortho.png';

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

        <div className={styles.img_grid}>
          <div>
            <img src={GridImageOne} alt="House 1" />
            <img src={images[15]} alt="House 2" />
          </div>
          <div>
            <img src={images[8]} alt="House 3" />
            <img src={images[9]} alt="House 2" />
          </div>
        </div>
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