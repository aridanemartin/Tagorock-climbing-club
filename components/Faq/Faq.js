import useTranslation from 'next-translate/useTranslation';
import styles from './Faq.module.css';
import { motion } from 'framer-motion';
import Accordion from '../Accordion/Accordion';


const Faq = () => {

        let { t } = useTranslation();

        const list = {
                visible: {
                opacity: 1,
                transition: {
                when: "afterChildren",
                staggerChildren: 0.4,
                },
                }
        }

        const item = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        }

        return ( 

        <div className={styles.faqWrap}>
                <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={list}
                >
                        <h2 className={styles.faqTitle}>FAQ</h2>
                        <motion.li
                        variants={item}
                        >
                                <Accordion
                                        title={t('index:faq1.title')}
                                        text={t('index:faq1.text')}  
                                />
                        </motion.li>
                        <motion.li
                        variants={item}
                        >
                                <Accordion
                                        title={t('index:faq1.title')}
                                        text={t('index:faq1.text')}  
                                />
                        </motion.li>
                        <motion.li
                        variants={item}
                        >
                                <Accordion
                                        title={t('index:faq1.title')}
                                        text={t('index:faq1.text')}  
                                />
                        </motion.li>
                        <motion.li
                        variants={item}
                        >
                                <Accordion
                                        title={t('index:faq1.title')}
                                        text={t('index:faq1.text')}  
                                />
                        </motion.li>
                        <motion.li
                        variants={item}
                        >
                                <Accordion
                                        title={t('index:faq1.title')}
                                        text={t('index:faq1.text')}  
                                />
                        </motion.li>   
                </motion.ul>

        </div>
     );
}
 
export default Faq;