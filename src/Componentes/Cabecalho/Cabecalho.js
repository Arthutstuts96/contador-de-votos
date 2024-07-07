import { useState } from "react";
import "./Cabecalho.css";
import { Link } from "react-router-dom";

export const Cabecalho = () => {
    const linkImagem = "https://github.com/Arthutstuts96.png";
    
    //Componente
    return(
        <header className="cabecalho">
            <nav className="barra-navegacao">
                <Link className="titulo" to='/'>Contador de votos</Link>
                <div className="navegacao-opcoes">
                    <Link className="como-funciona" to='/como-funciona'>Como funciona?</Link>
                    <img src={linkImagem} alt="Imagem de perfil" className="foto-perfil"/>
                </div>
            </nav>
        </header>
    );
}

