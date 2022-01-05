import styles from './Timetable.module.css';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

const Timetable = () => {
    
    let { t } = useTranslation();

    return ( 
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "linear" }}
                className={styles.timetableWrap}>
                <div className={styles.contactIntro}>
                    <p className={styles.strongP}><strong>{t('common:timetableIntro1')}</strong></p>
                    <p>{t('common:timetableIntro2')}</p>
                </div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.lunes')}</strong> 9:00 - 13:00 || 16:00 - 22:00</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.martes')}</strong> 9:00 - 13:00 || 16:00 - 22:00</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.miercoles')}</strong> 9:00 - 13:00 || 16:00 - 22:00</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.jueves')}</strong> 9:00 - 13:00 || 16:00 - 22:00</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.viernes')}</strong> {t('common:dias.cerrado')}</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.sabado')}</strong> {t('common:dias.cerrado')}</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.domingo')}</strong> {t('common:dias.cerrado')}</span></div>
            </motion.div>
        </>
    );
}

export default Timetable;