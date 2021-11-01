import styles from './Equipo.module.css';
import useTranslation from 'next-translate/useTranslation';
import ProfileCard from '../ProfileCard/ProfileCard';
import { useRef, forwardRef } from 'react';

import Norbe from '../../public/images/norbePerfil.jpg';
import Janoc from '../../public/images/janocPerfil.jpg';
import David from '../../public/images/davidPerfil.jpg';

const Equipo = () => {

    let { t } = useTranslation();

    const equipoRef = useRef();

    function handleClick() {
        equipoRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return ( 
        <div className={styles.equipoWrap}>
            <div ref={equipoRef} className={styles.equipoContent}>
                
                <ProfileCard 
                    title={t('index:norbePerfil.name')}
                    text={t('index:norbePerfil.descripcion')}
                    social={t('index:norbePerfil.social')}
                    socialLink={t('index:norbePerfil.socialLink')}
                    image={Norbe}
                />
                <ProfileCard 
                    title={t('index:janocPerfil.name')}
                    text={t('index:janocPerfil.descripcion')}
                    social={t('index:janocPerfil.social')}
                    socialLink={t('index:janocPerfil.socialLink')}
                    image={Janoc}
                />
                <ProfileCard 
                    title={t('index:davidPerfil.name')}
                    text={t('index:davidPerfil.descripcion')}
                    social={t('index:davidPerfil.social')}
                    socialLink={t('index:davidPerfil.socialLink')}
                    image={David}
                />
            </div>
        </div>

    );
}

export default Equipo;