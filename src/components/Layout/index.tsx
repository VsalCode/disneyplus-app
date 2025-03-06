import { PropsWithChildren } from 'react'
import styles from  './index.module.css'
import SideBar from './Sidebar/index.tsx'
import Page from './Page/index.tsx'

const Layout = (props: PropsWithChildren<unknown>) => {
  const { children } = props

  return (
    <div className={styles.container}>
      <SideBar/>
      <Page> {children} </Page>
    </div>
  )
}

export default Layout
