import { Outlet, createRootRoute, useRouterState } from "@tanstack/react-router";

import LangSelect from "@/widgets/LangSelect";
import AppTitle from "@/widgets/AppTitle";
import Utils from "@/widgets/Utils";

import "./global.css";
import styles from "./styles.module.scss";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const url = useRouterState();
  const params = url.location.pathname.split("/");

  return (
    <>
      <div className={styles.header}>
        <LangSelect params={params} />
        <AppTitle params={params} />
        <Utils />
      </div>
      <Outlet />
    </>
  );
}
