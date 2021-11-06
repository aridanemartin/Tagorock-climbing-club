import useTranslation from 'next-translate/useTranslation';    
import Nav from '../components/Nav/Nav';
import SocialBanner from '../components/SocialBanner/SocialBanner';
import HeroTemplate from '../components/HeroTemplate/HeroTemplate';
import SectionTemplate from '@components/SectionTemplate/SectionTemplate';
import SectionTemplateInverted from '../components/SectionTemplateInverted/SectionTemplateInverted';
import Footer from '@components/Footer/Footer';


const serviciosProfesionales = () => {
    let { t } = useTranslation();

    const formacionTecnica = require('../public/images/formacionTecnica.jpg');
    const escuela = require('../public/images/escuela.webp');
    const guiaDeMontana = require('../public/images/guiaDeMontana.webp');
    const portada = require('../public/images/escaleraCentered.jpg');

    return ( 
        <>
            <Nav/>  
            <HeroTemplate
                image={portada}
                alt="Tagorock - Escuela Infantil de Escalada"
                title1={t('servicios-profesionales:heroTitle1-a')}
                title2={t('servicios-profesionales:heroTitle1-b')}
            />
            <SocialBanner/>
            <SectionTemplate
                id="escuela"
                image={escuela}
                title1={t('servicios-profesionales:escuelaDeEscaladaTitle1')}
                title2={t('servicios-profesionales:escuelaDeEscaladaTitle1')}
                text1={t('servicios-profesionales:escuelaDeEscalada1')}
                text2={t('servicios-profesionales:escuelaDeEscalada2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />
            <SectionTemplateInverted
                image={formacionTecnica}
                title1={t('servicios-profesionales:formacionTecnicaTitle1')}
                title2={t('servicios-profesionales:formacionTecnicaTitle2')}
                text1={t('servicios-profesionales:formacionTecnica1')}
                text2={t('servicios-profesionales:formacionTecnica2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />    
            <SectionTemplate
                image={guiaDeMontana}
                title1={t('servicios-profesionales:escuelaDeEscaladaTitle1')}
                title2={t('servicios-profesionales:escuelaDeEscaladaTitle1')}
                text1={t('servicios-profesionales:escuelaDeEscalada1')}
                text2={t('servicios-profesionales:escuelaDeEscalada2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />
            <Footer/>
        </>
     );

}

export default serviciosProfesionales;