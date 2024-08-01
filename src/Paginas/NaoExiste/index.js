import styles from './NaoExiste.module.css';
import imagemErro from './desplugar.png';

export default function NaoExiste(){
    const frase = 'Parece que o endereço que você tentou acessar não existe, tente outro > <';

    return (
        <section className={styles.containerErro}>
            <div>
                <span className={styles.erro404}>404</span>
                <img src={imagemErro} alt='Imagem de tomada desplugando' className={styles.fotoTomada}/>
            </div>
            <p className={styles.paragrafo}>{frase}</p>
        </section>
    );
}
