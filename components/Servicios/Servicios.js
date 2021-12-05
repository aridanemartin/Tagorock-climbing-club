import styles from './Servicios.module.css';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

const Servicios = (props) => {

    let { t } = useTranslation();

    return ( 
        <div 
        className={styles.serviciosWrap}
        >
        
             
            <motion.div
                // animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={styles.serviciosContent}
            >
                <h2 className={styles.serviciosTitle}>{props.title}</h2>
                <p className={styles.serviciosLinks}>
                <Link href="/club-de-escalada/escuela-de-escalada">
                    <a className={styles.serviciosLink}>ESCUELA  </a>
                </Link>
                |
                <Link href="/club-de-escalada/formacion-tecnica">
                    <a className={styles.serviciosLink}>  FORMACIÓN TÉCNICA  </a>
                </Link>
                |
                <Link href="/club-de-escalada/guia-de-montana">
                    <a className={styles.serviciosLink}>  GUÍA DE MONTAÑA  </a>
                </Link>
                </p>
                
                <p className={styles.serviciosParrafo}>{props.text}</p>
                <Button 
                title="Saber Más"
                url="/club-de-escalada#escuela"
                />
            </motion.div>
        </div>



    );
}

export default Servicios;