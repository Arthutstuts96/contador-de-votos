import ItemLista from './ItemLista';
import './ListaVotacoes.css';
import moedaImg from '../../assets/moedas.jpg';

export default function ListaVotacoes(){
    return (
        <div className='container-lista'>
            <ul className='lista-votacoes'>
                <ItemLista titulo='Primeira votação' imagem={moedaImg}/>
                <ItemLista titulo='Segunda votação' imagem={moedaImg}/>
            </ul>
        </div>
    );
}
