import { Inter } from 'next/font/google';
import styles from '@/styles/common/NavItem.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function NavItem(props) {
    return (
        <div className={styles.navitem}>
            {props.itemTitle}
        </div>
        
    )
}
