import { PropsWithChildren } from 'react'
import SideBar from './Sidebar/index.tsx'
import Page from './Page/index.tsx'
import { useOutlet } from 'react-router-dom'

const Layout = (props: PropsWithChildren<unknown>) => {
  const outlet = useOutlet();

  return (
    <div>
      <SideBar/>
      <Page> {outlet} </Page>
    </div>
  )
}

export default Layout
