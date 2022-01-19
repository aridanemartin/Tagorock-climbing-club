
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import ComoLlegar from '@components/ComoLlegar/ComoLlegar'; 
import Footer from '@components/Footer/Footer';
import HeroTemplate from '@components/HeroTemplate/HeroTemplate';
import Nav from '../components/Nav/Nav';
import Separador from '@components/Separador/Separador';
import SocialBanner from '@components/SocialBanner/SocialBanner';
import Timetable from '@components/Timetable/Timetable';
import Meta from '@components/Meta/Meta';

import portada from '../public/images/2escaladoras.jpg';


const Contacto = () => {
    let { t } = useTranslation();
    
    

    return (
        <>
            <Meta 
            title={t('meta:contactoTitle')}
            desc={t('meta:contactoDesc')}
            canonical={t('meta:contactoCan')}
            image="https://www.tagorock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2escaladoras.fa2ac40e.jpg&w=1920&q=75"
            />
            <Nav/>
            <HeroTemplate
                image={portada}
                alt="Contacto - Tagorock: Sala de escalada en Las Palmas"
                title1={t('contacto:title1')}
                title2={t('contacto:title2')}
            />
            <Separador
                id="contacto"
                title={t('contacto:title')}
            />
            <Timetable/>
            <SocialBanner/>
            <ComoLlegar/>
        
            
            <Footer/>   
        </>    
        
        
    );
}

export default Contacto;