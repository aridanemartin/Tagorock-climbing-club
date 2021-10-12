import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Locale from '../../components/Locale/Locale';
import styles from './Nav.module.css';

const Nav = () => {

    const router = useRouter();
    const { locale, locales, defaultLocale } = router

    let menuText =
    router.locale === 'en'
    ?   ["Our Team", "Climbing Club", "Professional Services", "Contact"]
    : router.locale === 'es'
    ? ["Quiénes somos", "Club de Escalada", "Servicios Profesionales", "Contacto"] : "";

    return ( 
    <>    
        <nav className={styles.nav}>
            <div className={styles.nav}>
                <Locale/>
                <ul className={styles.nav__content}>
                    <li>
                        <Link href="/quienes-somos">
                            <a className={styles.navLink}>{menuText[0]}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/centro-de-escalada">
                            <a className={styles.navLink}>{menuText[1]}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/servicios-profesionales">
                            <a className={styles.navLink}>{menuText[2]}</a>
                        </Link>  
                    </li>
                        <li>
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