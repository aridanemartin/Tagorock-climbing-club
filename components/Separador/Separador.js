import styles from './Separador.module.css';


const Separador = (props) => {
    return ( 
        <div 
        id={props.id}
        className={styles.separadorWrap}
        >   
            <h2 className={styles.separadorTitle}>{props.title}</h2>
        </div>
     );
}

export default Separador;



