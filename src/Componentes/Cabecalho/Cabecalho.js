import styles from "./Cabecalho.module.css";
import { Link } from "react-router-dom";

export const Cabecalho = () => {
    const linkImagem = "https://github.com/Arthutstuts96.png";
    
    //Componente
    return(
        <header className={styles.cabecalho}>
            <nav className={styles.barraNavegacao}>
                <Link className={styles.titulo} to='/'>Contador de votos</Link>
                <div className={styles.navegacaoOpcoes}>
                    <Link className={styles.comoFunciona} to='/como-funciona'>Como funciona?</Link>
                    <img src={linkImagem} alt="Imagem de perfil" className={styles.fotoPerfil}/>
                </div>
            </nav>
        </header>
    );
}

