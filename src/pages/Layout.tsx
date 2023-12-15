import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components/common';

type TOwnProps = {
  children?: ReactNode;
};
const Layout = (props: TOwnProps) => {
  const { children } = props;
  return (
    <div id="app">
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
