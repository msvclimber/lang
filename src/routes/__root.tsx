import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

import "./global.css";
import styles from "./styles.module.scss";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className={styles.header}>
        <div>
          <div>
            <div className={styles.lang}>
              <div>
                <Link to="/en" className="[&.active]:font-bold">
                  En
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/es" className="[&.active]:font-bold">
                  Es
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/zh" className="[&.active]:font-bold">
                  Zh
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/fr" className="[&.active]:font-bold">
                  Fr
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/it" className="[&.active]:font-bold">
                  It
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/pt" className="[&.active]:font-bold">
                  Pt
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/ja" className="[&.active]:font-bold">
                  Ja
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.lang}>
              <div>
                <Link to="/sw" className="[&.active]:font-bold">
                  Sw
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/id" className="[&.active]:font-bold">
                  Id
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/tr" className="[&.active]:font-bold">
                  Tr
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/fa" className="[&.active]:font-bold">
                  Fa
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/ar" className="[&.active]:font-bold">
                  Ar
                </Link>
              </div>
            </div>
            <div className={styles.lang}>
              <div>
                <Link to="/hi" className="[&.active]:font-bold">
                  Hi
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.util}>
          <div>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
            <Link to="/users" className="[&.active]:font-bold">
              Users
            </Link>
            <Link to="/unit" className="[&.active]:font-bold">
              Words
            </Link>
            <Link to="/pronouns" className="[&.active]:font-bold">
              Местоимения
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
