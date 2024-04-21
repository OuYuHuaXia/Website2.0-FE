import { motion } from 'framer-motion';
import Link from 'next/link';

interface MenuItemProps {
  href: string;
  value: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, value }) => (
  <motion.li
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.1 }}
    className="h-full w-32 px-[5%] text-center"
  >
    <Link
      href={href}
      passHref
      className="font-zheng text-[2.5vh] text-[#747474]"
    >
      {value}
    </Link>
  </motion.li>
);

export default MenuItem;
