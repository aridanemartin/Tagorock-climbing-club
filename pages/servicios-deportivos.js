import useTranslation from 'next-translate/useTranslation';    
import Nav from '../components/Nav/Nav';
import SocialBanner from '../components/SocialBanner/SocialBanner';
import HeroTemplate from '../components/HeroTemplate/HeroTemplate';
import SectionTemplate from '@components/SectionTemplate/SectionTemplate';
import SectionTemplateInverted from '../components/SectionTemplateInverted/SectionTemplateInverted';
import Footer from '@components/Footer/Footer';
import Meta from '@components/Meta/Meta';

import guiaDeMontana1 from '../public/images/guiaDeMontana1.png';
import escuela from '../public/images/escuela.webp';
import portada from '../public/images/portadaClub.jpg';
import formacionTecnica from '../public/images/formacionTecnica.jpg';


const serviciosDeportivos = () => {
    let { t } = useTranslation();

    return ( 
        <>
            <Meta 
            title={t('meta:clubTitle')}
            desc={t('meta:clubDesc')}
            canonical={t('meta:clubCan')}
            image="https://tagorock.netlify.app/nextimg/%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fescuela.45d579250a092064a28a97c9617d7dfa.webp/1920/75?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fescuela.45d579250a092064a28a97c9617d7dfa.webp&w=1920&q=75"
            />
            <Nav/>  
            <HeroTemplate
                image={portada}
                alt="Tagorock - Escuela Infantil de Escalada"
                title1={t('servicios-deportivos:heroTitle1-a')}
                title2={t('servicios-deportivos:heroTitle1-b')}
            />
            <SocialBanner/>
            <SectionTemplate
                id="escuela"
                image={escuela}
                alt="Escuela de escalada infantil y de adultos en Las Palmas - Tagorock Mundo Vertical"
                title1={t('servicios-deportivos:escuelaDeEscaladaTitle1')}
                title2={t('servicios-deportivos:escuelaDeEscaladaTitle2')}
                text1={t('servicios-deportivos:escuelaDeEscalada1')}
                text2={t('servicios-deportivos:escuelaDeEscalada2')}
                url="servicios-deportivos/escuela-de-escalada"
                buttonText={t('common:buttonSaberMas')}
            />
            <SectionTemplateInverted
                image={formacionTecnica}
                alt="Formación técnica y deportiva en escalada - Tagorock Mundo Vertical"
                title1={t('servicios-deportivos:formacionTecnicaTitle1')}
                title2={t('servicios-deportivos:formacionTecnicaTitle2')}
                text1={t('servicios-deportivos:formacionTecnica1')}
                text2={t('servicios-deportivos:formacionTecnica2')}
                url="servicios-deportivos/formacion-tecnica"
                buttonText={t('common:buttonSaberMas')}
            />    
            <SectionTemplate
                image={guiaDeMontana1}
                alt="Guía de montaña en Las Palmas - Tagorock Mundo Vertical"
                title1={t('servicios-deportivos:guiaDeMontanaTitle1')}
                title2={t('servicios-deportivos:guiaDeMontanaTitle2')}
                text1={t('servicios-deportivos:guiaDeMontana1')}
                text2={t('servicios-deportivos:guiaDeMontana2')}
                url="servicios-deportivos/guia-de-montana"
                buttonText={t('common:buttonSaberMas')}
            />
            <Footer/>
        </>
    );

}

export default serviciosDeportivos;