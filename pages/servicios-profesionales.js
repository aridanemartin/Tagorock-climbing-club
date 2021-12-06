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
    const trabajosTecnicos = require('../public/images/cuerda.jpg');
    const trabajosLocales = require('../public/images/trabajosLocales.jpg');
    const escuela = require('../public/images/escuela.webp');
    const arq = require('../public/images/arqueologia.jpg');
    const taladro = require('../public/images/serviciosProfesionales.webp');
    const rocodromos = require('../public/images/gestionDeRocodromos.jpg');
    

    return ( 
        <>
            <Nav/>  
            <HeroTemplate
                image={portada}
                alt="Tagorock Mundo Vertical - Trabajos Verticales"
                title1={t('servicios-profesionales:heroTitle1-a')}
                title2={t('servicios-profesionales:heroTitle1-b')}
            />
            <SocialBanner/>
            <SectionTemplate
                id="trabajos-tecnicos-de-montana"
                image={trabajosTecnicos}
                alt="Trabajos Técnicos de montaña en Las Palmas - Tagorock Mundo Vertical"
                title1={t('servicios-profesionales:trabajosTecnicosTitle1')}
                title2={t('servicios-profesionales:trabajosTecnicosTitle2')}
                text1={t('servicios-profesionales:trabajosTecnicos1')}
                text2={t('servicios-profesionales:trabajosTecnicos2')}
            />
            <SectionTemplateInverted
                id="entorno-urbano"
                image={trabajosLocales}
                alt="Trabajos Locales en entorno urbano en Las Palmas - Tagorock Mundo Vertical"
                title1={t('servicios-profesionales:trabajosLocalesTitle1')}
                title2={t('servicios-profesionales:trabajosLocalesTitle2')}
                text1={t('servicios-profesionales:trabajosLocales1')}
                text2={t('servicios-profesionales:trabajosLocales2')}
            />    
            <SectionTemplate
                id="arqueologia-vertical"
                image={arq}
                alt="Arqueología Vertical - Tagorock Mundo Vertical"
                title1={t('servicios-profesionales:arqueologiaVerticalTitle1')}
                title2={t('servicios-profesionales:arqueologiaVerticalTitle2')}
                text1={t('servicios-profesionales:arqueologiaVertical1')}
                text2={t('servicios-profesionales:arqueologiaVertical2')}
            />
            <SectionTemplateInverted
                id="equipamiento-deportivo"
                image={taladro}
                alt="Equipamiento deportivo de montaña en Las Palmas - Tagorock Mundo Vertical"
                title1={t('servicios-profesionales:equipamientoDeportivoTitle1')}
                title2={t('servicios-profesionales:equipamientoDeportivoTitle2')}
                text1={t('servicios-profesionales:equipamientoDeportivo1')}
                text2={t('servicios-profesionales:equipamientoDeportivo2')}
            />    
            <SectionTemplate
                id="gestion-de-rocodromos"
                image={rocodromos}
                alt="Gestión de rocógromos en Las Palmas - Tagorock Mundo Vertical"
                title1={t('servicios-profesionales:gestionDeRocodromosTitle1')}
                title2={t('servicios-profesionales:gestionDeRocodromosTitle2')}
                text1={t('servicios-profesionales:gestionDeRocodromos1')}
                text2={t('servicios-profesionales:gestionDeRocodromos2')}
            />
            <Footer/>
        </>
     );

}

export default serviciosProfesionales;