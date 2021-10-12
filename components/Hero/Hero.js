import Image from 'next/image';

import HeroLogo from '../HeroLogo/HeroLogo';

import ParallaxSuperior from '../../public/images/ParallaxSuperior.png';
import ParallaxInferior from '../../public/images/ParallaxInferior.jpg';




import styles from './Hero.module.css';

const Hero = () => {
    
    
    return ( 
        <> 
            <HeroLogo/>  
            <div className={`${styles.parallaxWrap} ${styles.jsscroll}`}> 
                    <div id="hola" className={styles.heroBackground}>
                        <Image 
                            
                            src={ParallaxInferior} 
                            alt="Tagorock - Mundo Vertical - Hero Banner" 
                            layout="responsive"
                        />  
                    </div>
                
                    <div className={styles.heroParallax}>
                        <Image 
                            
                            src={ParallaxSuperior} 
                            alt="Tagorock - Mundo Vertical - Hero Banner" 
                            layout="responsive"
                        />  
                    </div> 
                
            </div>     
        </>
    );
}

export default Hero;