import useTranslation from 'next-translate/useTranslation';    
import Nav from '@components/Nav/Nav';
import SocialBanner from '@components/SocialBanner/SocialBanner';
import HeroTemplate from '@components/HeroTemplate/HeroTemplate';
import ActivityDescription from '@components/ActivityDescription/ActivityDescription';
import Footer from '@components/Footer/Footer';
import Precios from '@components/Precios/Precios';

export default function EscuelaDeEscalada (){
    let { t } = useTranslation();

    
    const portada = require('../../public/images/exito3.jpg');
    const guia1 = require('../../public/images/guiaDeMontana1.png');
    const guia2 = require('../../public/images/guiaDeMontana2.png');
    

    return (
        <>
        <Nav/>  
            <HeroTemplate
                image={portada}
                alt="Tagorock - Escuela Infantil de Escalada"
                title1={t('guia-de-montana:heroTitle1-a')}
                title2={t('guia-de-montana:heroTitle1-b')}
            />
            <SocialBanner/>


            <ActivityDescription
                id="escuela"
                image={guia1}
                title1={t('guia-de-montana:guiaDeMontanaTitle1')}
                title2={t('guia-de-montana:guiaDeMontanaTitle2')}
                text1={t('guia-de-montana:guiaDeMontana1')}
                text2={t('guia-de-montana:guiaDeMontana2')}
                side="right"
            />
            <ActivityDescription
                image={guia2}
                title1={t('guia-de-montana:guiaDeMontanaTitle3')}
                title2={t('guia-de-montana:guiaDeMontanaTitle4')}
                text1={t('guia-de-montana:guiaDeMontana3')}
                text2={t('guia-de-montana:guiaDeMontana4')}
                side="left"
            />    
            <Precios/>            
            <Footer/>
        </>
    )
};