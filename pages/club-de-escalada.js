import useTranslation from 'next-translate/useTranslation';    
import Nav from '../components/Nav/Nav';
import SocialBanner from '../components/SocialBanner/SocialBanner';
import HeroTemplate from '../components/HeroTemplate/HeroTemplate';
import SectionTemplate from '@components/SectionTemplate/SectionTemplate';
import SectionTemplateInverted from '../components/SectionTemplateInverted/SectionTemplateInverted';
import Footer from '@components/Footer/Footer';
import Meta from '@components/Meta/Meta';


const ClubDeEscalada = () => {
    let { t } = useTranslation();

    const formacionTecnica = require('../public/images/formacionTecnica.jpg');
    const escuela = require('../public/images/escuela.webp');
    const guiaDeMontana = require('../public/images/guiaDeMontana1.png');
    const portada = require('../public/images/portadaClub.jpg');

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
                title1={t('club-de-escalada:heroTitle1-a')}
                title2={t('club-de-escalada:heroTitle1-b')}
            />
            <SocialBanner/>
            <SectionTemplate
                id="escuela"
                image={escuela}
                alt="Escuela de escalada infantil y de adultos en Las Palmas - Tagorock Mundo Vertical"
                title1={t('club-de-escalada:escuelaDeEscaladaTitle1')}
                title2={t('club-de-escalada:escuelaDeEscaladaTitle2')}
                text1={t('club-de-escalada:escuelaDeEscalada1')}
                text2={t('club-de-escalada:escuelaDeEscalada2')}
                url="club-de-escalada/escuela-de-escalada"
                buttonText="saber más"
            />
            <SectionTemplateInverted
                image={formacionTecnica}
                alt="Formación técnica y deportiva en escalada - Tagorock Mundo Vertical"
                title1={t('club-de-escalada:formacionTecnicaTitle1')}
                title2={t('club-de-escalada:formacionTecnicaTitle2')}
                text1={t('club-de-escalada:formacionTecnica1')}
                text2={t('club-de-escalada:formacionTecnica2')}
                url="club-de-escalada/formacion-tecnica"
                buttonText="Saber Más"
            />    
            <SectionTemplate
                image={guiaDeMontana}
                alt="Guía de montaña en Las Palmas - Tagorock Mundo Vertical"
                title1={t('club-de-escalada:guiaDeMontanaTitle1')}
                title2={t('club-de-escalada:guiaDeMontanaTitle2')}
                text1={t('club-de-escalada:guiaDeMontana1')}
                text2={t('club-de-escalada:guiaDeMontana2')}
                url="club-de-escalada/guia-de-montana"
                buttonText="Saber Más"
            />
            <Footer/>
        </>
    );

}

export default ClubDeEscalada;