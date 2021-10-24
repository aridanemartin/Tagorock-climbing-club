import styles from './Separador.module.css';


const Separador = (props) => {
    return ( 
        <div 
        className={styles.separadorWrap}
        >   
            <h2 className={styles.separadorTitle}>{props.title}</h2>
        </div>
     );
}

export default Separador;



