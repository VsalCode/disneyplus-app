import { PropsWithChildren } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface MenuItemProps{
  icon: string,
  url: string
}

const MenuItem = (props: PropsWithChildren<MenuItemProps>) => {
  const { children, icon, url } = props;


  return (
    <li className={styles.menuItem} >
      <Link to={url} className={styles.link}>
      <span className={clsx (["material-symbols-outlined", styles.menuIcon]) }>{icon}</span>
      <span className={styles.menuName}> {children} </span>
      </Link>
    </li>
  );
};

const SideBar = () => {
  return ( 
    <nav className={styles.container}>
      <img width="45px" className={styles.logo} src="/public/images/disney-plus-hotstar-logo.svg" alt="" />
      <ul className={styles.menuWrapper}>
        <MenuItem url="/search" icon="search" >Search</MenuItem>
        <MenuItem url="/" icon="home" >Home</MenuItem>
        <MenuItem url="/movies" icon="movie" >Movies</MenuItem>
        <MenuItem url="/tvseries" icon="tv" >Series</MenuItem>
      </ul>
      <div className={styles.overlay}></div>
    </nav>
  );
};

export default SideBar;
