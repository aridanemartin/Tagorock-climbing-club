import useTranslation from 'next-translate/useTranslation';
import Hero from '../components/Hero/Hero';
import Servicios from '../components/Servicios/Servicios';
import ServiciosP from '../components/ServiciosP/ServiciosP';
import SocialBanner from '../components/SocialBanner/SocialBanner';
import Separador from '../components/Separador/Separador';
import Equipo from '../components/Equipo/Equipo';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import Meta from '../components/Meta/Meta';
import BlueButton from '@components/BlueButton/BlueButton';
import { motion } from 'framer-motion';
import styles from './index.module.css';
import ComoLlegar from '@components/ComoLlegar/ComoLlegar';
import metaImage from '@images/davidPerfil.jpg';


const Index = () => {
    
    let { t } = useTranslation();

    return (
        <>
            <Meta 
            title={t('meta:indexTitle')}
            desc={t('meta:indexDesc')}
            canonical={t('meta:indexCan')}
            image={metaImage}
            />
            <Nav/>
            <Hero/>
            <SocialBanner />
            
            <div
                className={styles.introWrap}
            > 
                    <motion.div
                    // animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    >
                        <h1 className={styles.introTitle}>
                            {t('index:introTitle1')}
                            <span className={styles.blueText}>{t('index:introTitle2')}</span><br/>
                            {t('index:introTitle3')}
                            <span className={styles.blueText}>{t('index:introTitle4')}</span>
                        </h1>
                        <p className={styles.introText}>
                            <span className={styles.negrita}>{t('index:introText1')}</span>
                            {t('index:introText2')}
                            <br/><br/>
                            {t('index:introText3')}
                            <span className={styles.negrita}>{t('index:introText4')}</span>
                            {t('index:introText5')}
                        </p>
                        <div className={styles.buttonDiv}>
                            <BlueButton 
                            title="Conoce a nuestro equipo"
                            url="#equipo"
                            />
                        </div>
                    </motion.div>
            </div>
            
            
            <Servicios 
            title={t('index:serviciosDeportivosTitle')}
            text={t('index:serviciosDeportivosText')}
            />
            
            <ServiciosP
            title={t('index:serviciosProfesionalesTitle')}
            text={t('index:serviciosProfesionalesText')}
            />

            <Separador
            id="equipo"
            title={t('index:separador1')} 
            />     

            <Equipo/>
            <Faq/>
            <ComoLlegar/>
            <Footer/>      

        </>

        
    );

    
}



export default Index;


