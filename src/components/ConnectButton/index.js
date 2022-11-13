import { useState } from 'react';
import Modal from '../../containers/Modal';
import styles from './styles.module.css';

const ConnectButton = ({ small }) => {
  const [showWallet, setShowWallet] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    setShowWallet(true);
  }

  return (
    <>
      <button className={`${styles.button} ${small ? styles.small : ''}`} onClick={handleClick}>
        Connect wallet
      </button>
      <Modal show={showWallet} setShow={setShowWallet} />
    </>
  );
};
export default ConnectButton;