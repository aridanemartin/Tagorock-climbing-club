import styles from './ComoLlegar.module.css';
import useTranslation from 'next-translate/useTranslation';

const ComoLlegar = () => {
    let { t } = useTranslation();

    return ( 
        <div className={styles.comoLlegarWrap}>
            <h2 className={styles.comoLlegarTitle}>
            {t('common:comoLlegar.title')}
            </h2>
            <p className={styles.comoLlegarText}>
            {t('common:comoLlegar.text')}
            </p>
            <div className={styles.comoLlegarMap}>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.5665250777115!2d-15.448514249116979!3d28.129236982533786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40951ba270a269%3A0x98d7f678791fd7a9!2sSala%20Tagorock%20Escalada!5e0!3m2!1ses!2ses!4v1635082857453!5m2!1ses!2ses" 
                width="100%" 
                height="400"  
                allowFullScreen="" 
                loading="lazy"
                style={{ 
                    border: `0`,
                }}
                ></iframe>
            </div>
        </div>
     );
}
 
export default ComoLlegar;