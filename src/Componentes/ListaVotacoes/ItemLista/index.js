
export default function ItemLista({titulo, imagem}){
    return(
        <li className="item-lista">
            <img src={imagem} alt='Imagem da votação' className="imagem-votacao"/>
            <h1 className="titulo-votacao">{titulo}</h1>
            <div className="container-paragrafo">
                <p className="paragrafo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi a?</p>
            </div>
        </li>
    );
}
