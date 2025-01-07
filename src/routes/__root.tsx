import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

import styles from "./styles.module.scss";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div>
        <div className={styles.lang}>
          <div>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to="/users" className="[&.active]:font-bold">
              Users
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to="/words" className="[&.active]:font-bold">
              Words
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to="/en/phrases" className="[&.active]:font-bold">
              Фразы
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
