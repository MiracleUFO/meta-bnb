import PlacesGrid from '../../containers/PlacesGrid';
import styles from './styles.module.css';

const Home = () => {
  return (<main className={styles.main}><PlacesGrid rows={2} /></main>)
};

export default Home;