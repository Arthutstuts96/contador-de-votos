import ItemLista from './ItemLista';
import styles from './ListaVotacoes.module.css';
import moedaImg from '../../assets/moedas.jpg';

export default function ListaVotacoes(){
    return (
        <div className={styles.containerLista}>
            <ul className={styles.listaVotacoes}>
                <ItemLista titulo='Primeira votação' imagem={moedaImg}/>
                <ItemLista titulo='Segunda votação' imagem={moedaImg}/>
            </ul>
        </div>
    );
}
