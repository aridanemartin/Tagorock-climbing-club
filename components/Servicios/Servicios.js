import styles from './Servicios.module.css';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Button from '../Button/Button';

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
                    <a className={styles.serviciosLink}>TRAINING </a>
                </Link>
                |
                <Link href="/">
                    <a className={styles.serviciosLink}> KIDS </a>
                </Link>
                |
                <Link href="/">
                    <a className={styles.serviciosLink}> OUTDOOR </a>
                </Link>
                </p>
                
                <p className={styles.serviciosParrafo}>{props.text}</p>
                <Button 
                title="Saber Más"
                url="/"
                />
            </div>
        </div>



    );
}

export default Servicios;