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
    
    
    
    return ( 
        <div className={styles.footerWrap}>
            <div className={styles.footerMenu}>
                <Link className={styles.primaryLink} href='/'>
                    <a>QUIÉNES SOMOS</a>
                </Link>
                <Link className={styles.primaryLink} href='/'>
                    <a>CENTRO DE ESCALADA</a>
                </Link>
                <Link className={styles.secondaryLink} href='/'>
                    <a>Escuela Infantil y de Adultos</a>
                </Link>
                <Link className={styles.secondaryLink} href='/'>
                    <a>Formación Técnica y Deportiva</a>
                </Link>
                <Link className={styles.secondaryLink} href='/'>
                    <a>Guía de Montaña y Escalada</a>
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
            <div className={styles.footerContactWrap}>
                    <h3 className={styles.contactTitle}>Contacto</h3>
                    <Link 
                    href="mailto:roshninutricion@gmail.com?subject=Solicitud%20de%20cita:">
                        <a className={styles.contactEmailWrap}>
                            <div className={styles.contactEmailLogo}>
                                <Image 
                                src={Gmail} 
                                alt="gmail"
                                />
                            </div>
                            <p className={styles.contactEmail}>tagorock@gmail.com</p>
                        </a>
                    </Link>
                    <Link 
                    href='/'>
                        <a className={styles.contactWhatsappWrap} target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=34644011842">
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
        
    );
}
 
export default Footer;