import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '/src/shared/components/Header/Header';
import { useTheme } from '../../uiXeny/hooks/useTheme';

const Layout = () => {
  const { changeTheme } = useTheme();
  changeTheme('cvConstructorTheme');

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
