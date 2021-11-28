import Image from 'next/image';
import styles from './HeroTemplate.module.css';
import { motion, AnimatePresence } from "framer-motion"

const HeroTemplate = (props) => {

    return ( 
        <>
            <div className={styles.heroTemplateWrap}>
                <div className={styles.imageWrap}>
                    <Image
                            alt="Tagorock Mundo Vertical - Escuela de Escalada en Las Palmas de Gran Canaria / Climbing School in Las Palmas de Gran Canaria"
                            src={props.image}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                    />
                </div>
            </div>
            <AnimatePresence exitBeforeEnter>
                    <motion.h1 
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    className={styles.heroTitle}>
                        {props.title1}<br/>
                        <strong>{props.title2}</strong>
                    </motion.h1>
            </AnimatePresence>
            
        </>
    );
}

export default HeroTemplate;