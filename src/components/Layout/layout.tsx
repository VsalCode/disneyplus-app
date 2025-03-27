import SideBar from './Sidebar/index.tsx'
import Page from './Page/index.tsx'
import { useOutlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.ts';
import useAuthState from '../../hooks/useAuthState.ts';

const Layout = () => {
  const outlet = useOutlet();
  const user = useAuthState();
  const { logout } = useAuth();
  const handleLogout = () => {
    console.log("CLICKED");

    logout();
  };

  return (
    <div>
      <SideBar user={user} onLogout={handleLogout} />
      <Page>{outlet}</Page>
    </div>
  );
};

export default Layout;
