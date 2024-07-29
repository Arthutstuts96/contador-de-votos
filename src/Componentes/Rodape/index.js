import './Rodape.css';
import { FaInstagramSquare, FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";

export default function Rodape(){
    return (
        <footer className='rodape'>
            <div className='links-rodape'>
                <a className='links-externos' href='https://instagram.com/arthurlim_bhd'><FaInstagramSquare />Instagram</a>
                <a className='links-externos' href='https://github.com/Arthutstuts96'><FaGithub />Github</a>
                <a className='links-externos' href='https://linkedin.com/'><FaLinkedin />Linkedin</a>
            </div>
            <span className='links-externos direitos-autorais'><FaRegCopyright />Desenvolvido por Arthur Lima Duarte</span>
        </footer>
    );
}
