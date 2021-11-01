import Image from 'next/image';

import HeroLogo from '../HeroLogo/HeroLogo';


import styles from './Hero.module.css';
import Completa from '../../public/images/PortadaCompleta.jpg';

const Hero = () => {
    
    
    return ( 
        <>      
            <div>
            <div className={styles.bgWrap}>
                <Image
                    alt="Tagorock Mundo Vertical - Escuela de Escalada en Las Palmas de Gran Canaria / Climbing School in Las Palmas de Gran Canaria"
                    src={Completa}
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                />
            </div>
            <p className={styles.bgText}>
            <HeroLogo/> 
            </p>
            </div>
            
        </>
    );
}

export default Hero;