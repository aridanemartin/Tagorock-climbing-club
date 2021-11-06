import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Locale from '../../components/Locale/Locale';
import styles from './Nav.module.css';
import { useState } from 'react';

const Nav = () => {

    const router = useRouter();
    const { locale, locales, defaultLocale } = router

    const[isOpen, setIsOpen] = useState(false);

    let menuText =
    router.locale === 'en'
    ?   ["Our Team", "Climbing Club", "Professional Services", "Contact"]
    : router.locale === 'es'
    ? ["Inicio", "Club de Escalada", "Servicios Profesionales", "Contacto"] : "";

    function handleShow() {
        const toggleButton = document.querySelector('.burger');
        const menu = document.querySelector('.nav__menu');
        
        if(toggleButton
            .classList.contains('open')){
        toggleButton.classList.remove('open');
        menu.classList.add('hide');
        window.removeEventListener('scroll', noScroll);
        }else{
        toggleButton.classList.add('open');
        menu.classList.add('show');
        menu.classList.remove('hide');
        window.addEventListener('scroll', noScroll);
        }
    }

    const hamburgerTransform = () => setIsOpen(!isOpen);

    return ( 
    <>    
        <nav className={styles.navWrap}>
            <button 
            onClick={hamburgerTransform} 
            className={isOpen === false ? styles.burger : styles.burger + ' ' + styles.open}
            id="burger"
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={isOpen === false ? styles.nav : styles.nav + ' ' + styles.navOpen}>
                
                <Locale/>
                <ul className={styles.navContent}>
                    <li className={styles.navLinkWrap}>
                        <Link href="/">
                            <a className={styles.navLink}>{menuText[0]}</a>
                        </Link>
                    </li>
                    <li className={styles.navLinkWrap}>
                        <Link href="/club-de-escalada">
                            <a className={styles.navLink}>{menuText[1]}</a>
                        </Link>
                    </li>
                    <li className={styles.navLinkWrap}>
                        <Link href="/servicios-profesionales">
                            <a className={styles.navLink}>{menuText[2]}</a>
                        </Link>  
                    </li>
                    <li className={styles.navLinkWrap}>
                        <Link href="/contacto">
                            <a className={styles.navLink}>{menuText[3]}</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    );
}

export default Nav;