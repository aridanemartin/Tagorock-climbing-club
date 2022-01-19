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
                <div className={styles.scheduleWrap}>
                    <div className={styles.timetableDay}>{t('common:dias.lunes')}</div><div className={styles.timetableHour}>9h - 13h   |   16h - 22h</div>
                    <div className={styles.timetableDay}>{t('common:dias.martes')}</div><div className={styles.timetableHour}>9h - 13h   |   16h - 22h</div>
                    <div className={styles.timetableDay}>{t('common:dias.miercoles')}</div><div className={styles.timetableHour}>9h - 13h   |   16h - 22h</div>
                    <div className={styles.timetableDay}>{t('common:dias.jueves')}</div><div className={styles.timetableHour}>9h - 13h   |   16h - 22h</div>
                    <div className={styles.timetableDay}>{t('common:dias.viernes')}</div><div className={styles.timetableHour}>17h - 20h</div>
                    <div className={styles.timetableDay}>{t('common:dias.sabado')}</div><div className={styles.timetableHour}>{t('common:dias.cerrado')}</div>
                    <div className={styles.timetableDay}>{t('common:dias.domingo')}</div><div className={styles.timetableHour}> {t('common:dias.cerrado')}</div>
                </div>
            </motion.div>
        </>
    );
}

export default Timetable;