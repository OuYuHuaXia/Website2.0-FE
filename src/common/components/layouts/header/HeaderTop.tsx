'use client';

import Navigation from '../../headerbar/Navigation';

const HeaderTop: React.FC = () => {
  return (
    <header className="absolute h-[8vh] w-full z-10">
      <div className="h-full w-full bg-black opacity-70"></div>
      <Navigation />
    </header>
  );
};

export default HeaderTop;
