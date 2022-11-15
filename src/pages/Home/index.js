import Banner from '../../components/Banner';
import SearchBar from '../../components/SearchBar';
import PlacesGrid from '../../containers/PlacesGrid';

import { images } from '../../containers/PlacesGrid/constants';
import GridImageOne from '../../assets/grid-img15-ortho.png';
import NftsGridImages from '../../assets/nfts-grid.svg';

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

      <section className={styles.nfts_section}>
        <div className={styles.nfts_text}>
          <h1>Metabnb NFTs</h1>
          <p>Discover our NFT gift cards collection.&nbsp;
            Loyal customers gets amazing gift cards which are traded as NFTs.&nbsp;
            These NFTs gives our customer access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>

        <img className={styles.nfts_grid} src={NftsGridImages} alt="Nfts images grid" />
      </section>
    </main>
  )
};

export default Home;