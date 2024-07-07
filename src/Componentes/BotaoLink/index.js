import { Link } from 'react-router-dom';
import './BotaoLink.css';

export default function BotaoLink({children, link}){
    return (
        <Link to={link}>
            <button className='botao'>
                {children}
            </button>
        </Link>
    );
}
