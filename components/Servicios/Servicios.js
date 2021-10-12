import styles from './Servicios.module.css';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const Servicios = (props) => {

    let { t } = useTranslation();

    return ( 
        <div 
        className={styles.serviciosWrap}
        >
        
            <div className={styles.serviciosContent}>
                <h2 className={styles.serviciosTitle}>{props.title}</h2>
                <p className={styles.serviciosLinks}>
                <Link href="/">
                    <a className={styles.serviciosLinks}>TRAINING </a>
                </Link>
                |
                <Link href="/">
                    <a className={styles.serviciosLinks}> KIDS </a>
                </Link>
                |
                <Link href="/">
                    <a className={styles.serviciosLinks}> OUTDOOR </a>
                </Link>
                </p>
                
                <p className={styles.serviciosParrafo}>{props.text}</p>
                <Link href="/">
                    <a className={styles.serviciosButton}>SABER MÁS</a>
                </Link>
            </div>
        </div>



    );
}

export default Servicios;