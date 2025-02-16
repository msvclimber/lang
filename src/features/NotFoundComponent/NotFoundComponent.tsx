import viteLogo from "/notfound.jpg";

import styles from "./styles.module.scss";

const NotFoundComponent = () => (
  <div className={styles.root}>
    <img src={viteLogo} alt="Vite logo" className={styles.notfound} />
  </div>
);

export default NotFoundComponent;
