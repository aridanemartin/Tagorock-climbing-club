import useTranslation from 'next-translate/useTranslation';

import AppLayout from '../components/AppLayout/AppLayout';     
import Hero from '../components/Hero/Hero';
import Servicios from '../components/Servicios/Servicios';
import ServiciosP from '../components/ServiciosP/ServiciosP';
import SocialBanner from '../components/SocialBanner/SocialBanner';
import Separador from '../components/Separador/Separador';
import Equipo from '../components/Equipo/Equipo';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';

import styles from './index.module.css';
import ComoLlegar from '@components/ComoLlegar/ComoLlegar';


const Index = () => {
    
    let { t } = useTranslation();

    return (
        <>
            <Hero/>
            <SocialBanner />
            <AppLayout>
            <div className={styles.introWrap}>
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
            </div>
            </AppLayout>
            
            <Servicios 
            title={t('index:serviciosDeportivosTitle')}
            text={t('index:serviciosDeportivosText')}
            />
            
            <ServiciosP
            title={t('index:serviciosProfesionalesTitle')}
            text={t('index:serviciosProfesionalesText')}
            />

            <Separador
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


