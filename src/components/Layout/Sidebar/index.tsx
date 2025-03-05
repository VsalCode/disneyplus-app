import { PropsWithChildren } from "react";
import styles from "./index.module.css";
import clsx from "clsx";

interface MenuItemProps{
  icon: string
}

const MenuItem = (props: PropsWithChildren<MenuItemProps>) => {
  const { children, icon } = props;

  return (
    <li className={styles.menuItem}>
      <span className={clsx (["material-symbols-outlined", styles.menuIcon]) }>{icon}</span>
      <span className={styles.menuName}> {children} </span>
    </li>
  );
};

const SideBar = () => {
  return ( 
    <nav className={styles.container}>
      <img width="45px" className={styles.logo} src="/public/images/disney-plus-hotstar-logo.svg" alt="" />
      <ul className={styles.menuWrapper}>
        <MenuItem icon="search" >Search</MenuItem>
        <MenuItem icon="home" >Home</MenuItem>
        <MenuItem icon="movie" >Movies</MenuItem>
        <MenuItem icon="tv" >Series</MenuItem>
      </ul>
      <div className={styles.overlay}></div>
    </nav>
  );
};

export default SideBar;
