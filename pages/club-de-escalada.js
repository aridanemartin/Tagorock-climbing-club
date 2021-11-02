import useTranslation from 'next-translate/useTranslation';    
import Nav from '../components/Nav/Nav';
import HeroTemplate from '../components/HeroTemplate/HeroTemplate';
import SectionTemplate from '@components/SectionTemplate/SectionTemplate';
import SocialBanner from '../components/SocialBanner/SocialBanner';
import SectionTemplateInverted from '../components/SectionTemplateInverted/SectionTemplateInverted';

import escuela from '../public/images/escuela.jpg';
import escaladoras from '../public/images/2escaladoras.jpg';
import formacionTecnica from '../public/images/formacionTecnica.jpg';


const ClubDeEscalada = () => {
    let { t } = useTranslation();

    return ( 
        <>
        <Nav/>  
        <HeroTemplate
            image={escaladoras}
            alt="Tagorock - Escuela Infantil de Escalada"
            title1={t('club-de-escalada:heroTitle1-a')}
            title2={t('club-de-escalada:heroTitle1-b')}
        />
        <SocialBanner/>
        <SectionTemplate
            image={escuela}
            title1={t('club-de-escalada:escuelaDeEscaladaTitle1')}
            title2={t('club-de-escalada:escuelaDeEscaladaTitle1')}
            text1={t('club-de-escalada:escuelaDeEscalada1')}
            text2={t('club-de-escalada:escuelaDeEscalada2')}
            url="http://www.google.es"
            buttonText="Tarifas"

        />
        <SectionTemplateInverted
            image={formacionTecnica}
            title1={t('club-de-escalada:formacionTecnicaTitle1')}
            title2={t('club-de-escalada:formacionTecnicaTitle2')}
            text1={t('club-de-escalada:formacionTecnica1')}
            text2={t('club-de-escalada:formacionTecnica2')}
            url="http://www.google.es"
            buttonText="Tarifas"
        />

        </>
     );

}
 
export default ClubDeEscalada;