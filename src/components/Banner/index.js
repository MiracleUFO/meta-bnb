import MbTokenIcon from '../../assets/mbtoken-logo.svg';
import MetaMaskIcon from '../../assets/metamask-logo-white-full.svg';
import OpenseaIcon from '../../assets/opensea-logo.svg';
import styles from './styles.module.css';

const Banner = () => (
  <div className={styles.container}>
    <div>
      <img src={MbTokenIcon} alt="mbtoken logo" />
    </div>
    <div>
      <img src={MetaMaskIcon} alt="white metamask logo: Fox head and Metamask text on the right" />
    </div>
    <div>
      <img src={OpenseaIcon} alt="Opensea icon" />
      <span>OpenSea</span>
    </div>
  </div>
);

export default Banner;