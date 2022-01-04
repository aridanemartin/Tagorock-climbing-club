import Image from 'next/image';
import HeroLogo from '../HeroLogo/HeroLogo';
import TagorockLogo from '../../public/images/Tagorock-logo-blanco.webp';  


import styles from './Hero.module.css';
import Completa from '../../public/images/guiaDeMontana.webp';

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
            <div className={styles.heroLogoCentered}>
                <HeroLogo 
                image={TagorockLogo}
                maxWidth={17}
                minWidth={15}
                /> 
            </div>
        
        </>
    );
}

export default Hero;