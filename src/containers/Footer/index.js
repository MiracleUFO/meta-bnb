import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-white.svg';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.logo_container}>
        <Link to="/">
          <img src={Logo} alt="Metabnb logo, a white house and text of Metabnb" />
        </Link>

        <div className={styles.brands_container}>
          <div className={styles.brands}>
            <i className="fa fa-brands fa-facebook-f"></i>
            <i className="fa fa-brands fa-instagram"></i>
            <i class="fa fa-brands fa-twitter"></i>
          </div>
          <p>
            <i class="fa fa-regular fa-copyright"></i>&nbsp;
            2022 Metabnb
          </p>
        </div>
      </section>

      <section>
        <Link to="/community">
          <h1>Community</h1>
        </Link>
        <Link to="#">NFTs</Link>
        <Link to="#">Tokens</Link>
        <Link to="#">Landlords</Link>
        <Link to="#">Discord</Link>
      </section>

      <section>
        <Link to="/places">
          <h1>Places</h1>
        </Link>
        <Link to="#">Castle</Link>
        <Link to="#">Farms</Link>
        <Link to="#">Beach</Link>
        <Link to="#">Learn more</Link>
      </section>

      <section>
        <Link to="/about">
          <h1>About us</h1>
        </Link>
        <Link to="#">Road map</Link>
        <Link to="#">Creators</Link>
        <Link to="#">Career</Link>
        <Link to="#">Contact us</Link>
      </section>
    </footer>
  );
};

export default Footer;