import useTranslation from 'next-translate/useTranslation';    
import Nav from '@components/Nav/Nav';
import SocialBanner from '@components/SocialBanner/SocialBanner';
import HeroTemplate from '@components/HeroTemplate/HeroTemplate';
import ActivityDescription from '@components/ActivityDescription/ActivityDescription';
import Footer from '@components/Footer/Footer';
import Precios from '@components/Precios/Precios';
import Meta from '@components/Meta/Meta';

export default function EscuelaDeEscalada (){
    let { t } = useTranslation();

    
    const portada = require('../../public/images/formacionT.jpg');
    const formacion1 = require('../../public/images/2escaladoras.jpg');
    const formacion2 = require('../../public/images/escuela3.png');
    

    return (
        <>
        <Meta 
            title={t('meta:formacionTitle')}
            desc={t('meta:formacionDesc')}
            canonical={t('meta:formacionCan')}
            image="https://www.tagorock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2escaladoras.fa2ac40e.jpg&w=1920&q=75"
            />
        <Nav/>  
            <HeroTemplate
                image={portada}
                alt="Tagorock - Escuela Infantil de Escalada"
                title1={t('formacion-tecnica:heroTitle1-a')}
                title2={t('formacion-tecnica:heroTitle1-b')}
            />
            <SocialBanner/>


            <ActivityDescription
                id="escuela"
                image={formacion1}
                alt="Escalada Deportiva en Gran Canaria - Tagorock Mundo Vertical"
                title1={t('formacion-tecnica:formacionTecnicaTitle1')}
                title2={t('formacion-tecnica:formacionTecnicaTitle2')}
                text1={t('formacion-tecnica:formacionTecnica1')}
                text2={t('formacion-tecnica:formacionTecnica2')}
                side="right"
            />
            <ActivityDescription
                image={formacion2}
                alt="Tagorock Mundo Vertical - Formación en Escalada"
                title1={t('formacion-tecnica:formacionTecnicaTitle3')}
                title2={t('formacion-tecnica:formacionTecnicaTitle4')}
                text1={t('formacion-tecnica:formacionTecnica3')}
                text2={t('formacion-tecnica:formacionTecnica4')}
                side="left"
            />    
            <Precios/>            
            <Footer/>
        </>
    )
};