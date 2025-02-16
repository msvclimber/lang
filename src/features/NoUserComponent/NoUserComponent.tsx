import nouser from "/nouser.jpg";

import styles from "./styles.module.scss";

const NoUserComponent = () => (
  <div className={styles.root}>
    <img src={nouser} alt="no user" className={styles.notfound} />
  </div>
);

export default NoUserComponent;
