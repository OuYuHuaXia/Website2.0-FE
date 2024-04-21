import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useNavigation } from '@/common/hooks/useNavigation';

import MenuItem from './MenuItem';

const Menu_ITEMS = [
  { href: '/?nav=home', nav: 'home', value: '首页' },
  { href: '/?nav=news', nav: 'news', value: '新闻' },
  { href: '/?nav=characters', nav: 'characters', value: '角色' },
  { href: '/?nav=events', nav: 'events', value: '事件' },
];

const Menu: React.FC = () => {
  const { setRoute } = useNavigation();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  useEffect(() => {
    setRoute(search || 'home');
  }, [search, setRoute]);

  return (
    <nav className="absolute left-[250px] flex h-full w-auto items-center xl:left-[20%]">
      <ul className="flex h-full">
        {Menu_ITEMS.map((item, index) => (
          <MenuItem
            key={index}
            href={item.href}
            value={item.value}
            nav={item.nav}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
