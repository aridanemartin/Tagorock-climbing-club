
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import ComoLlegar from '@components/ComoLlegar/ComoLlegar'; 
import Footer from '@components/Footer/Footer';
import HeroTemplate from '@components/HeroTemplate/HeroTemplate';
import Nav from '../components/Nav/Nav';
import Separador from '@components/Separador/Separador';
import SocialBanner from '@components/SocialBanner/SocialBanner';
import styles from './contacto.module.css';

import portadaContacto from '../public/images/portadaCompleta.jpg';

const Contacto = () => {
    let { t } = useTranslation();
    
    return (
        <>
            <Head>
                <title>Contacto - Tagorock - club de escalada en Gran Canaria</title>
            </Head>
            <Nav/>
            <HeroTemplate
            image={portadaContacto}
            title1={t('contacto:title1')}
            title2={t('contacto:title2')}
            />
            <Separador
                id="contacto"
                title={t('contacto:title')}
            />
            <div className={styles.contactIntro}>
                <p><strong>{t('contacto:intro1')}</strong></p>
                <p>{t('contacto:intro2')}</p>
            </div>
            <SocialBanner/>
            <ComoLlegar/>
            
            <Footer/>   
        </>    
        
        
    );
}

export default Contacto;