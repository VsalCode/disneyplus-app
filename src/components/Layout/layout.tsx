import SideBar from './Sidebar/index.tsx'
import Page from './Page/index.tsx'
import { useOutlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.ts';

const Layout = () => {
  const outlet = useOutlet();
  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <SideBar onLogout={handleLogout}/>
      <Page> {outlet} </Page>
    </div>
  )
}

export default Layout
