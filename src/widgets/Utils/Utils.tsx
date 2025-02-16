import { Link } from "@tanstack/react-router";

import HomeIcon from "@/shared/assets/icons/home.svg?react";
import UsersIcon from "@/shared/assets/icons/users.svg?react";
import LanguagesIcon from "@/shared/assets/icons/languages.svg?react";
import SettingsIcon from "@/shared/assets/icons/settings.svg?react";

import styles from "./styles.module.scss";

const Utils = () => {
  return (
    <div className={styles.util}>
      <div>
        <Link to="/">
          <HomeIcon width={24} height={24} />
        </Link>
        <Link to="/users">
          <UsersIcon width={24} height={24} />
        </Link>
        <Link to="/unit">
          <LanguagesIcon width={24} height={24} />
        </Link>
        <Link to="/settings">
          <SettingsIcon width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default Utils;
