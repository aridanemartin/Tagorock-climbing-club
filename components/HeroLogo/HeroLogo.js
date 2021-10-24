import Image from 'next/image';
import styles from './HeroLogo.module.css';
import TagorockLogo from '../../public/images/Tagorock-logo-blanco.webp';  
import useTranslation from 'next-translate/useTranslation';

const HeroLogo = () => {
    
    let { t } = useTranslation();
    
    return (    

        <div className={styles.heroLogoWrap}>
            <div className={styles.logoWrap}>
                <div>
                    <Image 
                    className={styles.logoImageWrap}
                    src={TagorockLogo} 
                    alt="Tagorock - Mundo Vertical - Hero Banner" 
                    layout="fill"
                    quality={50}
                    />
                </div>
                
            </div>
            <h1 className={styles.heroTitle}>{t('index:heroBanner.0')}</h1>
            
        </div>
    );
}

export default HeroLogo;