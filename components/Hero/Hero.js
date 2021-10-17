import Image from 'next/image';

import HeroLogo from '../HeroLogo/HeroLogo';


import styles from './Hero.module.css';
import Completa from '../../public/images/PortadaCompleta.jpg';

const Hero = () => {
    
    
    return ( 
        <> 
            <HeroLogo/>  
            <div className={styles.heroWrap}>                
                    
                        <Image    
                            src={Completa} 
                            alt="Tagorock - Mundo Vertical - Hero Banner" 
                            layout="responsive"
                            quality={50}
                        />                 
            </div>     
        </>
    );
}

export default Hero;