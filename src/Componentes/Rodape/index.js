import styles from './Rodape.module.css';
import { FaInstagramSquare, FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <div className={styles.linksRodape}>
                <a className={styles.linksExternos} href='https://instagram.com/arthurlim_bhd'><FaInstagramSquare />Instagram</a>
                <a className={styles.linksExternos} href='https://github.com/Arthutstuts96'><FaGithub />Github</a>
                <a className={styles.linksExternos} href='https://linkedin.com/'><FaLinkedin />Linkedin</a>
            </div>
            <span className={styles.direitosAutorais}><FaRegCopyright />Desenvolvido por Arthur Lima Duarte</span>
        </footer>
    );
}
