import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Locale from '../../components/Locale/Locale';
import styles from './Nav.module.css';
import { useState } from 'react';
import Image from 'next/image';


import Logo from '../../public/images/logoHorizontalBlanco.png';
import Instagram from '../../public/images/instagram.webp';
import Facebook from '../../public/images/facebook.webp';
import Youtube from '../../public/images/youtube.webp';

const Nav = () => {

    const router = useRouter();
    const { locale, locales, defaultLocale } = router

    const[isOpen, setIsOpen] = useState(false);

    let menuText =
    router.locale === 'en'
    ?   ["Our Team", "Climbing Club", "Professional Services", "Contact"]
    : router.locale === 'es'
    ? ["Inicio", "Club de Escalada", "Servicios Profesionales", "Contacto"] : "";

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
                            <a className={styles.navLink}>{menuText[0]}</a>
                        </Link>
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap2}>
                        <Link 
                        href="/club-de-escalada"
                        >
                            <a className={styles.navLink}>{menuText[1]}</a>
                        </Link>
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap3}>
                        <Link 
                        href="/servicios-profesionales"
                        >
                            <a className={styles.navLink}>{menuText[2]}</a>
                        </Link>  
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap4}>
                        <Link 
                        href="/contacto"
                        >
                            <a className={styles.navLink}>{menuText[3]}</a>
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