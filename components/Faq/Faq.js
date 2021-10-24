import useTranslation from 'next-translate/useTranslation';
import styles from './Faq.module.css';

import Accordion from '../Accordion/Accordion';


const Faq = () => {

    let { t } = useTranslation();

    return ( 

        <div className={styles.faqWrap}>
            <h2 className={styles.faqTitle}>FAQ</h2>
            <Accordion
                    title={t('index:faq1.title')}
                    text={t('index:faq1.text')}  
            />
            <Accordion
                    title={t('index:faq2.title')}
                    text={t('index:faq2.text')}  
            />
            <Accordion
                    title={t('index:faq3.title')}
                    text={t('index:faq3.text')}  
            />
            <Accordion
                    title={t('index:faq1.title')}
                    text={t('index:faq1.text')}  
            />
            <Accordion
                    title={t('index:faq1.title')}
                    text={t('index:faq1.text')}  
            />

        </div>
     );
}
 
export default Faq;