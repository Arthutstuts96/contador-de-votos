import './NaoExiste.css';
import imagemErro from './desplugar.png';

export default function NaoExiste(){
    const frase = 'Parece que o endereço que você tentou acessar não existe, tente outro > <';

    return (
        <section className='container-erro'>
            <div>
                <span className='erro404'>404</span>
                <img src={imagemErro} alt='Imagem de tomada desplugando' className='foto-tomada'/>
            </div>
            <p className='erro404-frase'>{frase}</p>
        </section>
    );
}
