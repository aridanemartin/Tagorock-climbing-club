import useTranslation from 'next-translate/useTranslation';    
import Nav from '../components/Nav/Nav';
import SocialBanner from '../components/SocialBanner/SocialBanner';
import HeroTemplate from '../components/HeroTemplate/HeroTemplate';
import SectionTemplate from '@components/SectionTemplate/SectionTemplate';
import SectionTemplateInverted from '../components/SectionTemplateInverted/SectionTemplateInverted';
import Footer from '@components/Footer/Footer';


const serviciosProfesionales = () => {
    let { t } = useTranslation();

    const portada = require('../public/images/escaleraCentered.jpg');
    const formacionTecnica = require('../public/images/formacionTecnica.jpg');
    const escuela = require('../public/images/escuela.webp');
    const guiaDeMontana = require('../public/images/guiaDeMontana.webp');
    const taladro = require('../public/images/serviciosProfesionales.webp');
    const rocodromos = require('../public/images/gestionDeRocodromos.jpg');
    

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
                title1={t('servicios-profesionales:trabajosTecnicosTitle1')}
                title2={t('servicios-profesionales:trabajosTecnicosTitle2')}
                text1={t('servicios-profesionales:trabajosTecnicos1')}
                text2={t('servicios-profesionales:trabajosTecnicos2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />
            <SectionTemplateInverted
                image={formacionTecnica}
                title1={t('servicios-profesionales:trabajosLocalesTitle1')}
                title2={t('servicios-profesionales:trabajosLocalesTitle2')}
                text1={t('servicios-profesionales:trabajosLocales1')}
                text2={t('servicios-profesionales:trabajosLocales2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />    
            <SectionTemplate
                image={guiaDeMontana}
                title1={t('servicios-profesionales:arqueologiaVerticalTitle1')}
                title2={t('servicios-profesionales:arqueologiaVerticalTitle2')}
                text1={t('servicios-profesionales:arqueologiaVertical1')}
                text2={t('servicios-profesionales:arqueologiaVertical2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />
            <SectionTemplateInverted
                image={taladro}
                title1={t('servicios-profesionales:equipamientoDeportivoTitle1')}
                title2={t('servicios-profesionales:equipamientoDeportivoTitle2')}
                text1={t('servicios-profesionales:equipamientoDeportivo1')}
                text2={t('servicios-profesionales:equipamientoDeportivo2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />    
            <SectionTemplate
                image={rocodromos}
                title1={t('servicios-profesionales:gestionDeRocodromosTitle1')}
                title2={t('servicios-profesionales:gestionDeRocodromosTitle2')}
                text1={t('servicios-profesionales:gestionDeRocodromos1')}
                text2={t('servicios-profesionales:gestionDeRocodromos2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />
            <Footer/>
        </>
     );

}

export default serviciosProfesionales;