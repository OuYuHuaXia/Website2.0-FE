import MenuItem from './MenuItem';

const Menu_ITEMS = [
  { href: '/', value: '首页' },
  { href: '/', value: '新闻' },
  { href: '/', value: '角色' },
  { href: '/', value: '事件' },
];

const Menu: React.FC = () => {
  return (
    <nav className="absolute left-[23%] flex h-full w-auto items-center">
      <ul className="flex">
        {Menu_ITEMS.map((item, index) => (
          <MenuItem key={index} href={item.href} value={item.value} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
