import Image from 'next/image';
import HeroLogo from '../HeroLogo/HeroLogo';
import TagorockLogo from '../../public/images/Tagorock-logo-blanco.webp';  


import styles from './Hero.module.css';
import Completa from '../../public/images/guiaDeMontana.webp';
import ParallaxSuperior from '../../public/images/ParallaxSuperior.webp';

const Hero = () => {

    return ( 
        <>      
            <div className={styles.bgWrap}>
                <Image
                    
                    alt="Tagorock Mundo Vertical - Escuela de Escalada en Las Palmas de Gran Canaria / Climbing School in Las Palmas de Gran Canaria"
                    src={Completa}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.parallaxSuperior}>
                <Image
                    
                    alt="Tagorock Mundo Vertical - Escuela de Escalada en Las Palmas de Gran Canaria / Climbing School in Las Palmas de Gran Canaria"
                    src={ParallaxSuperior}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            
            <HeroLogo 
            image={TagorockLogo}
            width={13}
            height={11}
            /> 
        
        </>
    );
}

export default Hero;