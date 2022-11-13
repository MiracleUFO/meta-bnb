import { useState } from 'react';
import Img from '../../assets/img.png';
import HeartIcon from '../../assets/heart.svg';
import StarIcon from '../../assets/star.svg';
import styles from './styles.module.css';

const PlaceGridItem = ({src, key}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={Img} alt={`House ${key}`} />
        <button onClick={() => setLiked(!liked)} className={styles.liked_container}>
          <img src={HeartIcon} alt="heart" className={liked ? styles.liked : ''} />
        </button>
      </div>

      <div className={styles.text_container}>
        <div>
          <p>Desert king</p>
          <p style={{fontWeight: 700}}>1MBT per night</p>
        </div>
        <div>
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        
        <div className={styles.stars_container}>
          {[...Array(5)].map((star, i) =>
            <img
              key={i}
              src={StarIcon}
              alt="star icon"
              className={styles.star}
              style={{marginLeft: i !== 0 ? '0.65em' : 0}}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceGridItem;