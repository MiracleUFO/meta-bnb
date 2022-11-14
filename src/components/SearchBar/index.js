import styles from './styles.module.css';

const SearchBar = () => (
  <div className={styles.container}>
    <input placeholder="Search for location" />
    <button>Search</button>
  </div>
);

export default SearchBar;