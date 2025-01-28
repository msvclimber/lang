import { createLazyFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/en/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Английский</h3>
      <div className={styles.block}>
        <Link to="/en/phrases" className="[&.active]:font-bold">
          Фразы
        </Link>
      </div>
    </div>
  );
}
