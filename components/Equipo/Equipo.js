import styles from './Equipo.module.css';
import useTranslation from 'next-translate/useTranslation';
import ProfileCard from '../ProfileCard/ProfileCard';

import Norbe from '../../public/images/norbertoCabrera.jpg';
import Janoc from '../../public/images/escuela3.webp';
import David from '../../public/images/davidPerfil.jpg';
import { motion } from 'framer-motion';

const Equipo = () => {

    let { t } = useTranslation();

    const item = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.5,
            },
        }
    }

    return ( 
        <div className={styles.equipoWrap}>
            <motion.div 
            className={styles.equipoContent}
            variants={list}
            initial="hidden"
            whileInView="visible"
            >
                <motion.div
                variants={item}
                >
                    <ProfileCard 
                        title={t('index:norbePerfil.name')}
                        text={t('index:norbePerfil.descripcion')}
                        social={t('index:norbePerfil.social')}
                        socialLink={t('index:norbePerfil.socialLink')}
                        image={Norbe}
                        alt={t('index:norbePerfil.alt')}
                    />
                </motion.div>
                <motion.div
                variants={item}
                >
                    <ProfileCard 
                        title={t('index:janocPerfil.name')}
                        text={t('index:janocPerfil.descripcion')}
                        social={t('index:janocPerfil.social')}
                        socialLink={t('index:janocPerfil.socialLink')}
                        image={Janoc}
                        alt={t('index:janocPerfil.alt')}
                    />
                </motion.div>
                <motion.div
                variants={item}
                >
                    <ProfileCard 
                        title={t('index:davidPerfil.name')}
                        text={t('index:davidPerfil.descripcion')}
                        social={t('index:davidPerfil.social')}
                        socialLink={t('index:davidPerfil.socialLink')}
                        image={David}
                        alt={t('index:davidPerfil.alt')}
                    />
                </motion.div>
            </motion.div>
        </div>

    );
}

export default Equipo;