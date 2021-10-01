import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Locale from '../../components/Locale/Locale';

const Nav = () => {

    const router = useRouter();
    const { locale, locales, defaultLocale } = router

    return ( 
        <React.Fragment>    
            <Locale/>
            <ul>
                

                <li>
                    <Link href="/quienes-somos">
                        <a>Quiénes somos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/centro-de-escalada">
                        <a>Centro de Escalada</a>
                    </Link>
                </li>
                <li>
                    <Link href="/servicios-profesionales">
                        <a>Servicios Profesionales</a>
                    </Link>  
                </li>
                    <li>
                    <Link href="/contacto">
                        <a>Contacto</a>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Nav;