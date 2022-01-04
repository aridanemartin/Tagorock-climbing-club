import styles from './ServiciosP.module.css';
import useTranslation from 'next-translate/useTranslation';
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
                <p className={styles.serviciosParrafo}>{props.text}</p>
                <Button 
                title={t('common:buttonSaberMas')}
                url="/servicios-profesionales"
                />
            </motion.div>
        </div>



    );
}

export default Servicios;