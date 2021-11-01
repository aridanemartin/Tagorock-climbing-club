import Image from 'next/image';
import styles from './HeroTemplate.module.css';

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
            <h1 className={styles.heroTitle}>
                Ponte en forma<br/>
                <strong>divirtiéndote</strong>
                </h1>
            
        </>
    );
}

export default HeroTemplate;