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

    
    const escuela = require('../../public/images/escuela.webp');
    const escuela2 = require('../../public/images/escuela2.png');
    const escuela3 = require('../../public/images/escuela3.png');
    

    return (
        <>
        <Meta 
            title={t('meta:escuelaTitle')}
            desc={t('meta:escuelaDesc')}
            canonical={t('meta:escuelaCan')}
            image="https://tagorock.netlify.app/nextimg/%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fescuela.45d579250a092064a28a97c9617d7dfa.webp/1920/75?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fescuela.45d579250a092064a28a97c9617d7dfa.webp&w=1920&q=75"
            />
        <Nav/>  
            <HeroTemplate
                image={escuela}
                alt="Tagorock - Escuela Infantil de Escalada"
                title1={t('escuela-de-escalada:heroTitle1-a')}
                title2={t('escuela-de-escalada:heroTitle1-b')}
            />
            <SocialBanner/>


            <ActivityDescription
                id="escuela"
                image={escuela2}
                title1={t('escuela-de-escalada:escuelaDeEscaladaTitle1')}
                title2={t('escuela-de-escalada:escuelaDeEscaladaTitle2')}
                text1={t('escuela-de-escalada:escuelaDeEscalada1')}
                text2={t('escuela-de-escalada:escuelaDeEscalada2')}
                side="right"
            />
            <ActivityDescription
                image={escuela3}
                title1={t('escuela-de-escalada:escuelaDeEscaladaTitle3')}
                title2={t('escuela-de-escalada:escuelaDeEscaladaTitle4')}
                text1={t('escuela-de-escalada:escuelaDeEscalada3')}
                text2={t('escuela-de-escalada:escuelaDeEscalada4')}
                side="left"
            />    
            <Precios/>            
            <Footer/>
        </>
    )
};