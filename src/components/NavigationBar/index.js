import Link from 'next/link';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
    const navItems = ['Home', 'Tournaments', 'Leagues']

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {
                    navItems.map((item, index) => {
                        const itemName = item === 'Home' ? '' : item;
                        return (
                            <Link href={`/${itemName.toLowerCase()}`} key={index} className={styles.navItem}>
                                <li>
                                    {item}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavigationBar;