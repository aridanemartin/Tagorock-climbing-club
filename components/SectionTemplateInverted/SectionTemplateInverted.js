import styles from './SectionTemplateInverted.module.css';
import Image from 'next/image';
import BlueButton from '@components/BlueButton/BlueButton';
import { motion } from 'framer-motion';



const SectionTemplateInverted = (props) => {
    
    return ( 
    
            <div 
            className={styles.sectionTemplateWrap}
            >
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className={styles.imageWrap}>
                        <Image
                            src={props.image}
                            alt={props.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "linear", delay: 0.5}}
                >
                    <div className={styles.textWrap}>
                        <h2 className={styles.title}>{props.title1}<br/>{props.title2}</h2>
                        <p className={styles.text}> 
                        {props.text1}
                        <br/><br/> 
                        {props.text2}
                        <br/><br/> 
                        </p>
                        <div className={styles.buttonWrap}>
                                <BlueButton
                                    title={props.buttonText}
                                    url={props.url}
                                />
                        </div>
                    </div>
                </motion.div>
            </div>
    
    );
}
 
export default SectionTemplateInverted;