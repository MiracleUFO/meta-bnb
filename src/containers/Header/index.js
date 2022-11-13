import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import styles from './styles.module.css';
import { useState } from 'react';
import ConnectButton from '../../components/ConnectButton';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = (e) => {
    e.stopPropagation()
    if (e.target !== document.getElementById('menu-floating'))
      setShowMenu(!showMenu);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav_mobile}>
        <Link to="/" className={styles.homeLink}><img src={Logo} alt="Metabnb logo" /></Link>
        <nav onClick={handleShowMenu}>
          <i className={`${styles.fa_bars} fa fa-solid fa-bars`}></i>
          {showMenu ? (
            <nav id="menu-floating" className={styles.menu_floating}>
              <Link to="/">Home</Link>
              <Link to="/places">Place to Stay</Link>
              <Link to="/nfts">NFTs</Link>
              <Link to="/community">Community</Link>
              <ConnectButton small />
            </nav>)
          : null}
        </nav>
      </nav>

      <nav className={styles.nav}>
        <Link to="/" className={styles.homeLink}><img src={Logo} alt="Metabnb logo" /></Link>
        <nav className={styles.menu}>
          <Link to="/">Home</Link>
          <Link to="/places">Place to Stay</Link>
          <Link to="/nfts">NFTs</Link>
          <Link to="/community">Community</Link>
        </nav>
        <ConnectButton />
      </nav>
    </header>
  );
};

export default Header;