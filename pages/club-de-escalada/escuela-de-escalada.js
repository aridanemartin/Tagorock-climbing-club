import useTranslation from 'next-translate/useTranslation';    
import Nav from '@components/Nav/Nav';
import SocialBanner from '@components/SocialBanner/SocialBanner';
import HeroTemplate from '@components/HeroTemplate/HeroTemplate';
import ActivityDescription from '@components/ActivityDescription/ActivityDescription';
import Footer from '@components/Footer/Footer';

export default function EscuelaDeEscalada (){
    let { t } = useTranslation();

    
    const escuela = require('../../public/images/escuela.webp');
    const escuela2 = require('../../public/images/escuela2.png');
    const escuela3 = require('../../public/images/escuela3.png');
    

    return (
        <>
        <Nav/>  
            <HeroTemplate
                image={escuela}
                alt="Tagorock - Escuela Infantil de Escalada"
                title1={t('club-de-escalada:heroTitle1-a')}
                title2={t('club-de-escalada:heroTitle1-b')}
            />
            <SocialBanner/>


            <ActivityDescription
                id="escuela"
                image={escuela2}
                // title1={t('club-de-escalada:escuelaDeEscaladaTitle1')}
                // title2={t('club-de-escalada:escuelaDeEscaladaTitle2')}
                // text1={t('club-de-escalada:escuelaDeEscalada1')}
                // text2={t('club-de-escalada:escuelaDeEscalada2')}
                text1="lorem asl;dfkasdjfkl;jasd fkl;asdjf;l kasdjfl;kasdjf;lkasdjf;klasdjf;lasdkjfl;asdkf j;lasdjkfl;asdkjfl;asdjf;asdlkj asdklfj;asdlkfjasdl;fkja;sdlkfjasl;dfkjasdf;"
                url="club-de-escalada/escuela-de-escalada"
                buttonText="saber más"
            />
            <ActivityDescription
                image={escuela3}
                title1={t('club-de-escalada:formacionTecnicaTitle1')}
                title2={t('club-de-escalada:formacionTecnicaTitle2')}
                text1={t('club-de-escalada:formacionTecnica1')}
                text2={t('club-de-escalada:formacionTecnica2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />    
            
            <Footer/>
        </>
    )
};