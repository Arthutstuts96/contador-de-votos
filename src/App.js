import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './Paginas/PaginaInicial';
import ComoFunciona from './Paginas/ComoFunciona';
import Rodape from './Componentes/Rodape';
import NaoExiste from './Paginas/NaoExiste';
import CriarVotacao from './Paginas/CriarVotacao';

function App() {
  //Funções
  //Componente
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaInicial />}/>
        <Route path='/como-funciona' element={<ComoFunciona />}/>
        <Route path='/criar-votacao' element={<CriarVotacao />}/>

        <Route path='*' element={<NaoExiste />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}
export default App;
