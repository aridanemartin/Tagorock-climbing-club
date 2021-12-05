import styles from './ActivityDescription.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ActivityDescription = (props) => {

    return ( 
        
        <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
        <div 
        className={
            `styles.activityDescriptionWrap ${props.side === 'right' ? styles.right : styles.left}`
        }
        id={props.id}
        >
            
                <div className={styles.imageWrap}>
                        <Image
                            src={props.image}
                            alt={props.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                </div>

                <div className={styles.textWrap}>
                    <h2 className={styles.title}>{props.title1}<br/>{props.title2}</h2>
                    
                        <p className={styles.text}> 
                        {props.text1}
                        <br/><br/> 
                        {props.text2}
                        <br/><br/>
                        </p>                    
                </div>
            
        </div>
        </motion.div>
    );
}

export default ActivityDescription;