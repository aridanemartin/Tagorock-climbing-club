import Image from 'next/image';
import styles from './HeroLogo.module.css';
import TagorockLogo from '../../public/images/Tagorock-logo-blanco.png';  
import useTranslation from 'next-translate/useTranslation';

const HeroLogo = () => {
    
    let { t } = useTranslation();
    
    return (    

        <>
            <div className={styles.logoWrap}>
                <div className={styles.logoImageWrap}>
                    <Image 
                    src={TagorockLogo} 
                    alt="Tagorock - Mundo Vertical - Hero Banner" 
                    priority={true}
                    />
                </div>
                <h1 className={styles.heroTitle}>{t('index:heroBanner1')}</h1>
            </div>
            
            
        </>
    );
}

export default HeroLogo;