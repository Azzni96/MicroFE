import TopBar from '@/components/TopBar';

import { Outlet } from 'react-router-dom';
import { useUserContext } from 'mediastore/contextHooks';
const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
