import { useState } from 'react';
import { useDisconnect } from '@thirdweb-dev/react';
import Modal from '../../containers/Modal';
import styles from './styles.module.css';

const ConnectButton = ({ small }) => {
  const [showWallet, setShowWallet] = useState(false);
  const [showDisconnect] = useState(false);

  const [address, setAddress] = useState('');
  const disconnect = useDisconnect();

  const handleShowWalletModal = (e) => {
    e.stopPropagation();
    setShowWallet(true);
  }

  const handleShowDisconnect = (e) => {
    e.stopPropagation();
    disconnect();
    window.location.reload();
  }

  if (address) 
    return (
      <div className={styles.disconnect_container}>
        <button className={`${styles.button} ${small ? styles.small : ''} ${styles.address_btn}`} onClick={handleShowDisconnect}>
          <span className={styles.truncate} title={address}>
            {address}
          </span>
          <i className="fa fa-solid fa-chevron-down"></i>
        </button>
        {showDisconnect ? (
          <div className={styles.disconnect_btn} onClick={handleShowDisconnect}>
            Disconnect
          </div>
        ) : null}
      </div>
    );
  else
    return (
    <>
      <button className={`${styles.button} ${small ? styles.small : ''}`} onClick={handleShowWalletModal}>
        Connect wallet
      </button>
      <Modal show={showWallet} setShow={setShowWallet} setAddress={setAddress} />
    </>
    );
};
export default ConnectButton;