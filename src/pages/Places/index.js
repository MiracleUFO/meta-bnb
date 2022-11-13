import { useState } from 'react';
import PlacesGrid from '../../containers/PlacesGrid';
import FilterIcon from '../../assets/filter-icon.svg';
import styles from './styles.module.css';

const Places = () => {
  const [showTextContainer, setShowTextContainer] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.filter_container}>
        <div className={`${styles.text_container} ${showTextContainer ? styles.show : ''}`}>
          <p>Resturant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>fantasy city</p>
          <p>beach</p>
          <p>Cabins</p>
          <p>Off-grid</p>
          <p>Farm</p>
        </div>
        <button className={styles.filter_icon} onClick={() => setShowTextContainer(!showTextContainer)}>
          <p>Location</p>
          <img src={FilterIcon} alt="Filter icon" />
        </button>
      </div>
      <PlacesGrid />
    </main>
  );
};

export default Places;