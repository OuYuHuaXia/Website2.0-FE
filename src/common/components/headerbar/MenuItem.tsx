import { motion } from 'framer-motion';
import Link from 'next/link';

import { useNavigation } from '@/common/hooks/useNavigation';

interface MenuItemProps {
  href: string;
  nav: string;
  value: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, value, nav }) => {
  const { currentRoute, setRoute } = useNavigation();

  return (
    <motion.li
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="h-full w-32 px-[5%] text-center"
      onClick={() => setRoute(nav)}
    >
      <Link
        href={href}
        passHref
        className={`flex h-full items-center justify-center font-zheng text-[2.5vh] text-[#747474] ${currentRoute === nav && 'border-b-2 border-[#e1b066] text-[#e1b066]'} `}
      >
        {value}
      </Link>
      <p className="absolute right-0 top-0">{currentRoute}</p>
    </motion.li>
  );
};

export default MenuItem;
