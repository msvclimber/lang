import underConstructionImj from "/under_construction.jpg";

import styles from "./styles.module.scss";

const UnderConstruction = () => (
  <div className={styles.root}>
    <img
      src={underConstructionImj}
      alt="under construction"
      className={styles.notfound}
    />
  </div>
);

export default UnderConstruction;
