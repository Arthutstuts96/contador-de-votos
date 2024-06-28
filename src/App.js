import './App.css';
import Cabecalho from './Componentes/Cabecalho';
import Botao from './Componentes/Botao';
import Titulo from './Componentes/Titulo';
import CorpoPrincipal from './Componentes/CorpoPrincipal';
import { Rodape } from './Componentes/Rodape/Rodape';

function App() {
  //Funções
  function abrirPaginaDeCriacao(){
    console.log('Indo para página de criação...');
  }
  //Componente
  return (
    <div className="App">
      <Cabecalho />
      <Titulo />
      <Botao texto="Criar nova votação" acao={abrirPaginaDeCriacao}/>
      <CorpoPrincipal />
      <Rodape />
    </div>
  );
}

export default App;
