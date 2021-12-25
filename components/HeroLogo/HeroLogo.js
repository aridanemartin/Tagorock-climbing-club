import Image from 'next/image';
import styles from './HeroLogo.module.css';
import TagorockLogo from '../../public/images/Tagorock-logo-blanco.webp';  

const HeroLogo = () => {    
    return (    

        <div className={styles.heroLogoWrap}>
                    <div className={styles.heroImageWrap}>
                        <Image
                        src={TagorockLogo} 
                        alt="Tagorock - Mundo Vertical - Hero Banner" 
                        layout="responsive"
                        />
                    </div> 
        </div>
    );
}

export default HeroLogo;