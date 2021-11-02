import Image from 'next/image';
import styles from './HeroTemplate.module.css';

import Escuela from '@images/escuela.jpg';

const HeroTemplate = (props) => {

    
    return ( 
        <>
            <div className={styles.heroTemplateWrap}>
                <div className={styles.imageWrap}>
                    <Image
                            alt="Tagorock Mundo Vertical - Escuela de Escalada en Las Palmas de Gran Canaria / Climbing School in Las Palmas de Gran Canaria"
                            src={Escuela}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                    />
                </div>
            </div>
            <h1 className={styles.heroTitle}>
                {props.title1}<br/>
                <strong>{props.title2}</strong>
            </h1>
            
        </>
    );
}

export default HeroTemplate;