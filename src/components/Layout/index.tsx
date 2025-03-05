import { PropsWithChildren } from 'react'
import styles from  './index.module.css'
import SideBar from './Sidebar/index.tsx'

const Layout = (props: PropsWithChildren<unknown>) => {
  const { children } = props

  return (
    <div className={styles.container}>
      <SideBar/>
      { children }
    </div>
  )
}

export default Layout
