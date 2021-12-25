import styles from './Footer.module.css';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/images/Tagorock-logo-blanco.webp';
import Instagram from '../../public/images/instagram.webp';
import Facebook from '../../public/images/facebook.webp';
import Youtube from '../../public/images/youtube.webp';
import Whatsapp from '../../public/images/whatsapp.webp';
import Gmail from '../../public/images/gmail.webp';

const Footer = () => {
    
    const year = new Date().getFullYear();
    
    return ( 
        <>
        <div className={styles.footerWrap}>
            <div className={styles.footerMenu}>
                <h3 className={styles.footerMenuTitle}>MENU</h3>

                <Link href='/'>
                    <a className={styles.primaryLink}>INICIO</a>
                </Link>
                <Link href='/servicios-deportivos'>
                    <a className={styles.primaryLink}>SERVICIOS DEPORTIVOS</a>
                </Link>
                <Link href='/servicios-deportivos/escuela-de-escalada'>
                    <a className={styles.secondaryLink}>- Escuela Infantil y de Adultos</a>
                </Link>
                <Link href='/servicios-deportivos/formacion-tecnica'>
                    <a className={styles.secondaryLink}>- Formación Técnica y Deportiva</a>
                </Link>
                <Link href='/servicios-deportivos/guia-de-montana'>
                    <a className={styles.secondaryLink}>- Guía de Montaña y Escalada</a>
                </Link>
                <Link href='/servicios-profesionales'>
                    <a className={styles.primaryLink}>SERVICIOS PROFESIONALES</a>
                </Link>
                <Link href='/servicios-profesionales#trabajos-tecnicos-de-montana'>
                    <a className={styles.secondaryLink}>- Trabajos Técnicos de montaña</a>
                </Link>
                <Link href='/servicios-profesionales'>
                    <a className={styles.secondaryLink}>- Trabajos Locales en Entorno Urbano</a>
                </Link>
                <Link href='/servicios-profesionales#arqueologia-vertical'>
                    <a className={styles.secondaryLink}>- Arqueología Vertical</a>
                </Link>
                <Link href='/servicios-profesionales'>
                    <a className={styles.secondaryLink}>- Equipamiento Deportivo de Montaña</a>
                </Link>
                <Link href='/servicios-profesionales#gestion-de-rocodromos'>
                    <a className={styles.secondaryLink}>- Gestión de Rocódromos</a>
                </Link>
                <Link href='/'>
                    <a className={styles.primaryLink}>TARIFAS</a>
                </Link>
                <Link href='/'>
                    <a className={styles.primaryLink}>CONTACTO</a>
                </Link>








            </div>
            
            <div className={styles.footerSocialWrap}>
                <div className={styles.footerLogoWrap}>
                    <Image
                        src={Logo}
                        placeholder="blur"
                        layout="responsive"
                        width={253}
                        height={226}
                    ></Image>
                </div>
                <div className={styles.socialBanner}>
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

            <div className={styles.footerContactWrap}>
                    <h3 className={styles.contactTitle}>CONTACTO</h3>
                    <Link 
                    href="mailto:tagorockmundovertical@gmail.com?subject=Solicitud%20de%20cita:">
                        <a className={styles.contactEmailWrap}>
                            <div className={styles.contactEmailLogo}>
                                <Image 
                                src={Gmail} 
                                alt="gmail"
                                />
                            </div>
                            <p className={styles.contactEmail}>tagorockmundovertical@gmail.com</p>
                        </a>
                    </Link>
                    <Link 
                    href='/'>
                        <a className={styles.contactWhatsappWrap} target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=34628020152">
                            <div className={styles.contactWhatsappLogo}>
                                <Image 
                                src={Whatsapp} 
                                alt="whatsApp"/>
                            </div>
                            <p className={styles.contactWhatsapp}>WhatsApp</p>
                        </a>
                    </Link>

            </div>
        </div>  
        <span className={styles.createdBy}><p>Website created by <a href="https://www.aridanemartin.dev" target="_blank" rel="noreferrer">Aridane Martín</a> &#169; {year}</p></span>
    </>   
        
    );
}
 
export default Footer;