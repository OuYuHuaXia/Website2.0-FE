import { Suspense } from 'react';

import Logo from './Logo';
import Menu from './Menu';
// import Profile from './Profile';

const Navigation: React.FC = () => {
  return (
    <Suspense>
      <div className="absolute left-0 top-0 flex h-full w-full items-center">
        <Logo />
        <Menu />
        {/* <Profile /> */}
      </div>
    </Suspense>
  );
};

export default Navigation;
