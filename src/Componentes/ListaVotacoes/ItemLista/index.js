import styles from '../ListaVotacoes.module.css';

export default function ItemLista({titulo, imagem}){
    return(
        <li className={styles.itemLista}>
            <img src={imagem} alt='Imagem da votação' className={styles.imagemVotacao}/>
            <h1 className={styles.tituloVotacao}>{titulo}</h1>
            <div className={styles.containerParagrafo}>
                <p className={styles.paragrafo}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi a?</p>
            </div>
        </li>
    );
}
