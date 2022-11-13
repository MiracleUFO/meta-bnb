import PlaceGridItem from '../../components/PlacesGridItem';
import { images } from './constants';
import styles from './styles.module.css';

const PlacesGrid = ({rows}) => {
  return (
    <section className={`${styles.rows_container} ${rows === 2 ? styles.reverse : ''}`}>
      <div className={styles.row}>
        {[...Array(4)].map((x, i) => 
          <PlaceGridItem src={images[i + 4]} />
        )}
      </div>
      <div className={styles.row}>
        {[...Array(4)].map((x, i) => 
          <PlaceGridItem src={images[i]} />
        )}
      </div>
      
      {rows !== 2 ? (
        <>
          <div className={styles.row}>
            {[...Array(4)].map((x, i) => 
              <PlaceGridItem src={images[i + 8]} />
            )}
          </div>
          <div className={styles.row}>
            {[...Array(4)].map((x, i) => 
              <PlaceGridItem src={images[i + 12]} />
            )}
          </div>
        </>
      ) : null}
    </section>
  );
};

export default PlacesGrid;