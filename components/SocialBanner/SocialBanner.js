import styles from './SocialBanner.module.css';
import Link from 'next/link';
import Image from 'next/image';

import Instagram from '../../public/images/instagram.webp';
import Facebook from '../../public/images/facebook.webp';
import Youtube from '../../public/images/youtube.webp'

const SocialBanner = () => {
    return ( 
        <div className={styles.socialBannerWrap}>
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

     );
}
 
export default SocialBanner;