import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tab/Tab';
import Meta from '../components/Meta/Meta';
import Nav from '../components/Nav/Nav';
import HeroTemplate from '../components/HeroTemplate/HeroTemplate';
import SocialBanner from '@components/SocialBanner/SocialBanner';
import useTranslation from 'next-translate/useTranslation';
import styles from './rocodromo.module.css';
import Image from 'next/image';



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
                title1={t('rocodromo:heroTitle1-a')}
                title2={t('rocodromo:heroTitle1-b')}
        />
        <SocialBanner />    

        <div className={styles.tabsWrapper}>            
            <Tabs>
                <Tab label="Sala Principal">
                    <div className={styles.tabImageWrapper}>
                    <Image
                    src={rocodromo2}   
                    />
                    <p>Tab 1 content</p>
                    </div>
                </Tab>
                <Tab label="Pared de Calentamiento">
                    <div className={styles.tabImageWrapper}>
                    <Image
                    src={rocodromo2}   
                    />
                    <p>Tab 2 content</p>
                    </div>
                </Tab>
                <Tab label="Tab 3">
                    <div className={styles.tabImageWrapper}>
                    <Image
                    src={rocodromo2}   
                    />
                    <p>Tab 3 content</p>
                    </div>
                </Tab>
                <Tab label="Tab 4">
                    <div className={styles.tabImageWrapper}>
                    <Image
                    src={rocodromo2}   
                    />
                    
                    <p>Tab 4 content</p>
                    </div>
                </Tab>
                <Tab label="Tab 5">
                    <div className={styles.tabImageWrapper}>
                    <Image
                    src={rocodromo2}   
                    />
                    <p>Tab 5 content</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </>
    
    );
}

export default Rocodromo;
