/*import {
  useMetamask,
  useWalletConnect,
  useAddress,
} from '@thirdweb-dev/react';*/
import MetamaskLogo from '../../assets/metamask-logo.png';
import WalletConnectLogo from '../../assets/walletconnect-logo.png';
import Chevron from '../../assets/chevron.png';
import styles from './styles.module.css';

const Modal = ({show, setShow}) => {
  /*const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();*/

  return (
    <>
      {show ? (
        <div className={styles.modal_container} id="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className={styles.modal_backdrop} id="modal-overlay"></div>
          
          <div className={styles.modal}>
            <section className={styles.modal_header}>
              <h1>Connect Wallet</h1>
              <span onClick={() => setShow(false)}>x</span>
            </section>

            <section className={styles.button_section}>
              <p>Choose your preferred wallet:</p>

              <button
                className={styles.wallet_btn}
                onClick={() => console.log('hey')}
              >
                <div>
                  <img src={MetamaskLogo} className={styles.logo} alt="Metamask Logo, orange fox head" />
                  <p>Metamask</p>
                </div>
                <img src={Chevron} className={styles.chevron} alt="greater than sign or right chevron" />
              </button>

              <button
                className={styles.wallet_btn}
                onClick={() => console.log('hey')}
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