import useTranslation from 'next-translate/useTranslation';    
import Nav from '../components/Nav/Nav';
import SocialBanner from '../components/SocialBanner/SocialBanner';
import HeroTemplate from '../components/HeroTemplate/HeroTemplate';
import SectionTemplate from '@components/SectionTemplate/SectionTemplate';
import SectionTemplateInverted from '../components/SectionTemplateInverted/SectionTemplateInverted';
import Footer from '@components/Footer/Footer';

import serviciosP from '../public/images/serviciosProfesionales.jpg';
import trabajos1 from '../public/images/TrabajosTecnicosEnMontana.jpg';
import trabajos2 from '../public/images/TrabajosTecnicosEnMontana2.jpg';
import arq from '../public/images/arqueologiaVertical.jpg';


const serviciosProfesionales = () => {
    let { t } = useTranslation();

    return ( 
        <>
            <Nav/>  
            {/* <HeroTemplate
                image={trabajos2}
                alt="Tagorock - Escuela Infantil de Escalada"
                title1={t('servicios-profesionales:heroTitle1-a')}
                title2={t('servicios-profesionales:heroTitle1-b')}
            />
            <SocialBanner/>
            <SectionTemplate
                id="escuela"
                image={trabajos1}
                title1={t('servicios-profesionales:trabajosTecnicosEnMontanaTitle1')}
                title2={t('servicios-profesionales:trabajosTecnicosEnMontanaTitle2')}
                text1={t('servicios-profesionales:trabajosTecnicosEnMontana1')}
                text2={t('servicios-profesionales:trabajosTecnicosEnMontana2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />
            <SectionTemplateInverted
                image={serviciosP}
                title1={t('club-de-escalada:formacionTecnicaTitle1')}
                title2={t('club-de-escalada:formacionTecnicaTitle2')}
                text1={t('club-de-escalada:formacionTecnica1')}
                text2={t('club-de-escalada:formacionTecnica2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />    
            <SectionTemplate
                image={arq}
                title1={t('club-de-escalada:guiaDeMontanaTitle1')}
                title2={t('club-de-escalada:guiaDeMontanaTitle2')}
                text1={t('club-de-escalada:guiaDeMontana1')}
                text2={t('club-de-escalada:guiaDeMontana2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            /> */}
            <Footer/>
        </>
     );

}
 
export default serviciosProfesionales;