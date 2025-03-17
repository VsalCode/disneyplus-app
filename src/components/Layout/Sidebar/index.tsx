import { PropsWithChildren } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

interface MenuItemProps{
  icon: string,
  url: string,
  onClick: () => void,
}

interface SideBarProps{
  onLogout: () => void
}

const MenuItem = (props: PropsWithChildren<MenuItemProps>) => {
  const { children, icon, url, onClick } = props;


  return (
    <li className={styles.menuItem} >
      { url ? (
        <>
          <Link to={url} className={styles.link}>
            <span className={clsx (["material-symbols-outlined", styles.menuIcon]) }>{icon}</span>
            <span className={styles.menuName}> {children} </span>
          </Link>
        </>
      ) : (
        < >
          <span onClick={onClick} className={clsx (["material-symbols-outlined", styles.menuIcon]) }>{icon}</span>
          <span onClick={onClick} className={styles.menuName}> {children} </span>
        </>
      ) }
    </li>
  );
};

const SideBar = (props: SideBarProps) => {
  const { onLogout } = props
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate("/signup"); 
  };


  return ( 
    <nav className={styles.container}>
      <img width="45px" className={styles.logo} src="/public/images/disney-plus-hotstar-logo.svg" alt="" />
      <ul className={styles.menuWrapper}>
        <MenuItem url="/search" icon="search" >Search</MenuItem>
        <MenuItem url="/" icon="home" >Home</MenuItem>
        <MenuItem url="/movies" icon="movie" >Movies</MenuItem>
        <MenuItem url="/tvseries" icon="tv" >Series</MenuItem>
        <MenuItem onClick={handleLogout} icon="logout" >Logout</MenuItem>
      </ul>
      <div className={styles.overlay}></div>
    </nav>
  );
};

export default SideBar;
