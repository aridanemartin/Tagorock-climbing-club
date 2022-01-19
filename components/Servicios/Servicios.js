import styles from './Servicios.module.css';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

const Servicios = (props) => {

    let { t } = useTranslation();

    return ( 
        <>
            <Meta 
            title={t('meta:serviciosDeportivosTitle')}
            desc={t('meta:serviciosDeportivosDesc')}
            canonical={t('meta:serviciosDeportivosCan')}
            image="https://www.tagorock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FportadaClub.6935255b.jpg&w=1920&q=75"
            />
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
                    url="/servicios-deportivos"
                    />
                </motion.div>
            </div>
        </>


    );
}

export default Servicios;