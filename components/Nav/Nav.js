import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Locale from '../../components/Locale/Locale';

const Nav = () => {

    const router = useRouter();
    const { locale, locales, defaultLocale } = router

    let menuText =
    router.locale === 'en'
    ?   ["Our Team", "Climbing Club", "Professional Services", "Contact"]
    : router.locale === 'es'
    ? ["Quiénes somos", "Club de Escalada", "Servicios Profesionales", "Contacto"] : "";

    return ( 
        <React.Fragment>    
            <Locale/>
            <ul>
                

                <li>
                    <Link href="/quienes-somos">
                        <a>{menuText[0]}</a>
                    </Link>
                </li>
                <li>
                    <Link href="/centro-de-escalada">
                        <a>{menuText[1]}</a>
                    </Link>
                </li>
                <li>
                    <Link href="/servicios-profesionales">
                        <a>{menuText[2]}</a>
                    </Link>  
                </li>
                    <li>
                    <Link href="/contacto">
                        <a>{menuText[3]}</a>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Nav;