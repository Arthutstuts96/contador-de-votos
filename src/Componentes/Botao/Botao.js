import "./Botao.css";

export const Botao = ({texto, acao}) => {
    return(
        <button className="botao-padrao" onClick={acao}>
            {texto}
        </button>
    );
}

