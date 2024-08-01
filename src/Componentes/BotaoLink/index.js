import { Link } from 'react-router-dom';
import styles from './BotaoLink.module.css';

export default function BotaoLink({children, link}){
    return (
        <Link to={link}>
            <button className={styles.botao}>
                {children}
            </button>
        </Link>
    );
}
