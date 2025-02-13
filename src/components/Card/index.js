import Link from 'next/link';
import styles from './Card.module.css';
import Button from '../Button';

const Card = ({ format, slug, title, date }) => (
    <div className={styles.cardContainer}>
        <Link href={`/${format}/${slug}`} className={styles.link}>
            <div className={styles.details}>
                <div>
                    <h2>{title}</h2>
                    <p>{date}</p>
                </div>
                <Button />
            </div>
            <p className={styles.imageContainer}>IMAGE</p>
        </Link>
    </div>
);

export default Card;