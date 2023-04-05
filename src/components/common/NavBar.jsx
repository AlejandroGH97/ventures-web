import NavItem from './NavItem';
import { Inter } from 'next/font/google';
import styles from '@/styles/common/NavBar.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <NavItem itemTitle="asd" />
      <NavItem itemTitle="dfg" />
    </div>
  );
}
