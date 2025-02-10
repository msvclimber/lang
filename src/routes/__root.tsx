import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

import LangSelect from "@/widgets/LangSelect";

import "./global.css";
import styles from "./styles.module.scss";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className={styles.header}>
        <LangSelect />
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
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
