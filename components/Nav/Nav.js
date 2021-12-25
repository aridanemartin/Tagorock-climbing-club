import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Locale from '../../components/Locale/Locale';
import styles from './Nav.module.css';
import { useState } from 'react';
import Image from 'next/image';
import MediaQuery from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';


import Logo from '../../public/images/logoHorizontalBlanco.png';
import Instagram from '../../public/images/instagram.webp';
import Facebook from '../../public/images/facebook.webp';
import Youtube from '../../public/images/youtube.webp';

const Nav = () => {

    const router = useRouter();
    const { locale, locales, defaultLocale } = router

    const[isOpen, setIsOpen] = useState(false);
    // Dropdown menu
    const[open, setOpen] = useState(false);
    // Dropdown menu (mobile)
    const[serviciosOpen, setServiciosOpen] = useState(false);

    const toggleServicios = () => {
        setServiciosOpen(!serviciosOpen);
    }
    

    let menuText =
    router.locale === 'en'
    ?   ["Our Team", "Climbing Club", "Professional Services", "Contact","Sport Services","Professional Services","Back"]
    : router.locale === 'es'
    ? ["Inicio", "Servicios", "Rocódromo", "Contacto","Servicios Deportivos","Servicios Profesionales","Volver"] : "";

    const toggle = () => setIsOpen(!isOpen);

    return ( 
    <>    
        <nav className={styles.navWrap}>
            <button 
            onClick={toggle} 
            className={isOpen === false ? styles.burger : styles.burger + ' ' + styles.open + ' ' + styles.burgerOpen}
            id="burger"
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={isOpen === false ? styles.nav : styles.nav + ' ' + styles.navOpen}>
                
                <Locale/>
                <div className={isOpen === false ? styles.navLogoWrap : styles.navLogoWrap + ' ' + styles.navLogoWrapEffect}>
                    <Image
                        src={Logo}
                        placeholder="blur"
                        layout="responsive"
                        width={3264}
                        height={695}
                    ></Image>
                </div>
                <ul className={styles.navContent}>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap1}>
                        <Link 
                        href="/"
                        >
                            <a className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink)}>{menuText[0]}</a>
                        </Link>
                    </li>
                    
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap2}>
                            <MediaQuery maxWidth={768}>
                                <a 
                                className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink)}
                                onClick={() => setServiciosOpen(!open)}
                                >{menuText[1]}
                                </a>
                                <AnimatePresence>
                                    {serviciosOpen && (
                                        
                                            <motion.ul
                                            className={styles.dropDownMenu}
                                            key="1"
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 40 }}
                                            >
                                                
                                                    <li>
                                                        <Link 
                                                        href="/servicios-deportivos"
                                                        >
                                                            <a className={styles.dropDownLink}>{menuText[4]}</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link 
                                                        href="/servicios-profesionales"
                                                        >
                                                            <a className={styles.dropDownLink}>{menuText[5]}</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a className={styles.dropDownLink} onClick={toggleServicios}>{menuText[6]}</a>
                                                    </li>
                                            </motion.ul>                            
                                    )}
                                </AnimatePresence>
                            </MediaQuery>
                            <MediaQuery minWidth={768}>
                                <a 
                                className={styles.navLink}
                                onClick={() => setOpen(!open)}
                                >{menuText[1]}
                                </a>
                                <AnimatePresence>
                                    {open && (
                                        
                                            <motion.ul
                                            className={styles.dropDownMenu}
                                            key="1"
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            >
                                                
                                                    <li>
                                                        <Link 
                                                        href="/servicios-deportivos"
                                                        >
                                                            <a className={styles.dropDownLink}>{menuText[4]}</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link 
                                                        href="/servicios-profesionales"
                                                        >
                                                            <a className={styles.dropDownLink}>{menuText[5]}</a>
                                                        </Link>
                                                    </li>
                                            </motion.ul>                            
                                    )}
                                </AnimatePresence>
                            </MediaQuery>
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap3}>
                        <Link 
                        href="/rocodromo"
                        >
                            <a className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink)}>{menuText[2]}</a>
                        </Link>  
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap4}>
                        <Link 
                        href="/contacto"
                        >
                            <a className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink)}>{menuText[3]}</a>
                        </Link>
                    </li>
                </ul>

                <div className={styles.navSocialWrap}>
                
                <div className={isOpen === false ? styles.socialBanner : styles.socialBanner + ' ' + styles.socialBannerEffect}>
                    <div className={styles.socialBannerLinkWrap}>
                        <Link 
                        href="https://www.instagram.com/tagorockmundovertical/?hl=es"
                        >
                            <a className={styles.socialBannerLink} target="_blank">
                                <Image 
                                src={Instagram}
                                layout="fixed"
                                width={35}
                                height={35}
                                className={styles.socialBannerLink}
                                />
                            </a>       
                        </Link>
                    </div>
                    <div className={styles.socialBannerLinkWrap}>
                        <Link 
                        href="https://www.facebook.com/sala.tagorock"
                        >
                            <a className={styles.socialBannerLink} target="_blank">
                                <Image 
                                src={Facebook}
                                layout="fixed"
                                width={40}
                                height={40}
                                />
                            </a>       
                        </Link>
                    </div>
                    <div className={styles.socialBannerLinkWrap}>
                        <Link 
                        href="https://www.youtube.com/channel/UCp71gyByJMd82XcQZmWi2HQ/videos"
                        >
                            <a className={styles.socialBannerLink} target="_blank">
                                <Image 
                                src={Youtube}
                                layout="fixed"
                                width={40}
                                height={40}
                                className={styles.socialBannerLink}
                                />
                            </a>       
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    </>
    );
}

export default Nav;