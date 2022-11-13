import {
  useMetamask,
  useWalletConnect,
  useAddress,
} from '@thirdweb-dev/react';
import MetamaskLogo from '../../assets/metamask-logo.png';
import WalletConnectLogo from '../../assets/walletconnect-logo.png';
import Chevron from '../../assets/chevron.png';
import styles from './styles.module.css';
import { useEffect } from 'react';

const Modal = ({show, setShow, setAddress}) => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();

  useEffect(() => {
    if (address)
      setAddress(address);
  }, [address, setAddress]);

  return (
    <>
      {show ? (
        <div className={styles.modal_container} id="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className={styles.modal_backdrop} id="modal-overlay" onClick={() => setShow(false)}></div>
          
          <div className={styles.modal}>
            <section className={styles.modal_header}>
              <h1>Connect Wallet</h1>
              <span onClick={() => setShow(false)}>x</span>
            </section>

            <section className={styles.button_section}>
              <p>Choose your preferred wallet:</p>

              <button
                className={styles.wallet_btn}
                onClick={connectWithMetamask}
              >
                <div>
                  <img src={MetamaskLogo} className={styles.logo} alt="Metamask Logo, orange fox head" />
                  <p>Metamask</p>
                </div>
                <img src={Chevron} className={styles.chevron} alt="greater than sign or right chevron" />
              </button>

              <button
                className={styles.wallet_btn}
                onClick={connectWithWalletConnect}
              >
                <div>
                  <img src={WalletConnectLogo} className={styles.logo} alt="WalletConnect Logo" />
                  <p>WalletConnect</p>
                </div>
                <img src={Chevron} className={styles.chevron} alt="greater than sign or right chevron" />
              </button>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;