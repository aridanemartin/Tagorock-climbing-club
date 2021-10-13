import Image from 'next/image';

import HeroLogo from '../HeroLogo/HeroLogo';

import ParallaxSuperior from '../../public/images/ParallaxSuperior.webp';
import ParallaxInferior from '../../public/images/ParallaxInferior.webp';




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
                            width={600}
                            height={400}
                            quality={50}
                        />  
                    </div>
                
                    <div className={styles.heroParallax}>
                        <Image 
                            
                            src={ParallaxSuperior} 
                            alt="Tagorock - Mundo Vertical - Hero Banner" 
                            layout="responsive"
                            width={600}
                            height={400}
                            quality={50}
                        />  
                    </div> 
                
            </div>     
        </>
    );
}

export default Hero;