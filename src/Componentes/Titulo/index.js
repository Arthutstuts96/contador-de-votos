import styles from './Titulo.module.css';

export default function Titulo(){
    return (
        <div className={styles.containerTitulo}>
            <h1 className={styles.titulo}>O melhor site de simulação de votações para você!</h1>
            <h2 className={styles.subtitulo}>
                Entre para criar votações que serão salvas no site, podendo ser dos mais diversos assuntos que você queira ver. Além disso, acessar todas as suas votações já feitas, que ficarão no histórico do site para se checar resultados e mais!
            </h2>
        </div>
    );
}
