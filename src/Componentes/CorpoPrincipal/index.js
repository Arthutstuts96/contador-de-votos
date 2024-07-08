import BotaoLink from '../BotaoLink';
import ListaVotacoes from '../ListaVotacoes';
import Titulo from '../Titulo';
import './CorpoPrincipal.css';

export default function CorpoPrincipal(){
    return(
        <main className='corpo-principal'>
            <Titulo />
            <BotaoLink link='/criar-votacao'>
                Criar nova votação
            </BotaoLink>
            <h1 className='suas-votacoes'>Suas votações</h1>
            <ListaVotacoes />
        </main>
    );
}
