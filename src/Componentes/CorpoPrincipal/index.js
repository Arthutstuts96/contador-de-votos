import BotaoLink from '../BotaoLink';
import ListaVotacoes from '../ListaVotacoes';
import Titulo from '../Titulo';
import styles from './CorpoPrincipal.module.css';

export default function CorpoPrincipal(){
    return(
        <main className={styles.corpoPrincipal}>
            <Titulo />
            <BotaoLink link='/criar-votacao'>
                Criar nova votação
            </BotaoLink>
            <h1 className={styles.suasVotacoes}>Suas votações</h1>
            <ListaVotacoes />
        </main>
    );
}
