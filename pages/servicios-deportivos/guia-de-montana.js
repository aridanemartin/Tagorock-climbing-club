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

    
    const portada = require('../../public/images/exito3.jpg');
    const guia1 = require('../../public/images/guiaDeMontana1.png');
    const guia2 = require('../../public/images/2subiendo.jpg');
    

    return (
        <>
        <Meta 
            title={t('meta:guiaTitle')}
            desc={t('meta:guiaDesc')}
            canonical={t('meta:guiaCan')}
            image="https://tagorock.netlify.app/nextimg/%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fescuela.45d579250a092064a28a97c9617d7dfa.webp/1920/75?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fescuela.45d579250a092064a28a97c9617d7dfa.webp&w=1920&q=75"
            />
        <Nav/>  
            <HeroTemplate
                image={portada}
                alt="Tagorock Mundo Vertical - Guía de Montaña en Gran Canaria"
                title1={t('guia-de-montana:heroTitle1-a')}
                title2={t('guia-de-montana:heroTitle1-b')}
            />
            <SocialBanner/>


            <ActivityDescription
                id="escuela"
                image={guia1}
                alt="Tagorock Mundo Vertical - Guía de Montaña en Las Palmas"
                title1={t('guia-de-montana:guiaDeMontanaTitle1')}
                title2={t('guia-de-montana:guiaDeMontanaTitle2')}
                text1={t('guia-de-montana:guiaDeMontana1')}
                text2={t('guia-de-montana:guiaDeMontana2')}
                side="right"
            />
            <ActivityDescription
                image={guia2}
                alt="Tagorock Mundo Vertical - Guía de Montaña en Las Palmas de Gran Canaria"
                title1={t('guia-de-montana:guiaDeMontanaTitle3')}
                title2={t('guia-de-montana:guiaDeMontanaTitle4')}
                text1={t('guia-de-montana:guiaDeMontana3')}
                text2={t('guia-de-montana:guiaDeMontana4')}
                side="left"
            />             
            <Footer/>
        </>
    )
};