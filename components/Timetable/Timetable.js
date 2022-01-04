import styles from './Timetable.module.css';
import useTranslation from 'next-translate/useTranslation';

const Timetable = () => {
    
    let { t } = useTranslation();

    return ( 
        <>
            <div className={styles.timetableWrap}>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.lunes')}</strong> 9:00 - 13:00 || 16:00 - 22:00</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.martes')}</strong> 9:00 - 13:00 || 16:00 - 22:00</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.miercoles')}</strong> 9:00 - 13:00 || 16:00 - 22:00</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.jueves')}</strong> 9:00 - 13:00 || 16:00 - 22:00</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.viernes')}</strong> {t('common:dias.cerrado')}</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.sabado')}</strong> {t('common:dias.cerrado')}</span></div>
                <div className={styles.timetableDay}><span><strong>{t('common:dias.domingo')}</strong> {t('common:dias.cerrado')}</span></div>
            </div>
        </>
    );
}

export default Timetable;