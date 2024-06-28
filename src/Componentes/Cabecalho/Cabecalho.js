import { useState } from "react";
import "./Cabecalho.css";

export const Cabecalho = () => {
    const linkImagem = "https://github.com/Arthutstuts96.png";
    const [displayBox, setDisplayBox] = useState('box-como-funciona nada');
    //Funções
    function abrirJanelaDeComoFunciona(){
        console.log('O display agora é ' +  displayBox);
        setDisplayBox(displayBox === 'box-como-funciona nada'? 'box-como-funciona bloco': 'box-como-funciona nada');
    }
    //Componente
    return(
        <header className="cabecalho">
            <nav className="barra-navegacao">
                <span className="titulo">Contador de votos</span>
                <div className="navegacao-opcoes">
                    <span className="como-funciona" onClick={abrirJanelaDeComoFunciona}>Como funciona?</span>
                    <div className={displayBox}>
                        <ul>
                            <li>Asas</li>
                            <li>Negras</li>
                            <li>Caiam</li>
                            <li>Aqui</li>
                        </ul>
                    </div>
                    <img src={linkImagem} alt="Imagem de perfil" className="foto-perfil"/>
                </div>
            </nav>
        </header>
    );
}

