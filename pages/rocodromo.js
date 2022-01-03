import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tab/Tab';
import Meta from '../components/Meta/Meta';
import Nav from '../components/Nav/Nav';
import HeroTemplate from '../components/HeroTemplate/HeroTemplate';
import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import SocialBanner from '@components/SocialBanner/SocialBanner';
import Separador from '@components/Separador/Separador';
import HeroLogo from '@components/HeroLogo/HeroLogo';
import useTranslation from 'next-translate/useTranslation';
import styles from './rocodromo.module.css';
import Image from 'next/image';
import ClimbingLogo from '../public/images/climbingSchool.png'


const Rocodromo = () => {

    let { t } = useTranslation();

    const rocodromo1 = require('../public/images/rocodromo1.jpg');
    const rocodromo2 = require('../public/images/rocodromo2.jpg');
    // const rocodromo3 = require('../public/images/rocodromo3.jpg');
    // const rocodromo4 = require('../public/images/rocodromo4.jpg');
    

    return(
    <>
        <Meta 
        title={t('meta:indexTitle')}
        desc={t('meta:indexDesc')}
        canonical={t('meta:indexCan')}
        image="https://tagorock.netlify.app/nextimg/%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fescuela.45d579250a092064a28a97c9617d7dfa.webp/1920/75?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fescuela.45d579250a092064a28a97c9617d7dfa.webp&w=1920&q=75"
        />
        <Nav/>
        <HeroTemplate
                image={rocodromo2}
                alt="Tagorock - Rocódromo en Las Palmas de Gran Canaria"
                // title1={t('rocodromo:heroTitle1-a')}
                // title2={t('rocodromo:heroTitle1-b')}
        />
        <HeroLogo 
        image={ClimbingLogo}
        width={20}
        // height={17}

        /> 
        <SocialBanner />    
        <SectionTemplate
            image={rocodromo1}
            alt="boulder en Las Palmas de Gran Canaria"
            title1={t('rocodromo:rocodromoTitle1')}
            title2={t('rocodromo:rocodromoTitle2')}
            text1={t('rocodromo:rocodromoIntro')}
            text2={t('rocodromo:rocodromoIntro2')}
        />
        <Separador title={t('rocodromo:rocodromoSeparador1')}/>

        <div className={styles.tabsWrapper}>            
            <Tabs>
                <Tab label="Sala Principal">
                    <div className={styles.tabImageWrapper}>
                        <Image
                        src={rocodromo2}   
                        layout="responsive"
                        />
                        <p>Nuestra sala principal consta de dos paredes con diferentes desplomes y vías de diferentes niveles adaptadas a todos los públicos.</p>
                    </div>
                </Tab>
                <Tab label="Pared de Calentamiento">
                    <div className={styles.tabImageWrapper}>
                    <Image
                    src={rocodromo1}   
                    layout="responsive"
                    />
                    <p>Comienza tu entrenamiento en nuestra pared de entrenamiento. En sus 10 metros de longitud posee diferentes tipos de agarres y nos permite comenzar el entrenamiento con buen pie.</p>
                    </div>
                </Tab>
                <Tab label="Vertical">
                    <div className={styles.tabImageWrapper}>
                    <Image
                    src={rocodromo2}   
                    layout="responsive"
                    />
                    <p>Nuestra pared Vertical nos permite a lo largo de sus 7 metros de altura prácticar vías de diferentes niveles, así como iniciación, técnicas de seguridad...</p>
                    </div>
                </Tab>
                <Tab label="Zona Aérea">
                    <div className={styles.tabImageWrapper}>
                    <Image
                    src={rocodromo2}  
                    layout="responsive" 
                    />
                    
                    <p>Mediante el uso de anclajes de seguridad disponemos de una zona para la práctica de la Danza Aérea, Ballet Aéreo, Tissue, Tela y otros...</p>
                    </div>
                </Tab>
                <Tab label="Vestuario, Baños y Equipos de Alquiler">
                    <div className={styles.tabImageWrapper}>
                    <Image
                    src={rocodromo2} 
                    layout="responsive"  
                    />
                    <p>Disponemos de diferentes servicios para que vengas de donde vengas no te falte nada para comenzar a escalar.</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </>
    
    );
}

export default Rocodromo;
