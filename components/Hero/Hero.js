import Image from 'next/image';
import { useRef, useEffect } from 'react';
import HeroLogo from '../HeroLogo/HeroLogo';


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
            <div>
                <HeroLogo/> 
            </div>
        </>
    );
}

export default Hero;