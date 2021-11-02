import styles from './SectionTemplateInverted.module.css';
import Image from 'next/image';
import BlueButton from '@components/BlueButton/BlueButton';

import Club from '../../public/images/escuela.jpg';

const SectionTemplateInverted = (props) => {
    
    return ( 
        <div 
        className={styles.sectionTemplateWrap}
        >
            <div className={styles.imageWrap}>
                <Image
                    src={Club}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className={styles.textWrap}>
                <h2 className={styles.title}>{props.title1}<br/>{props.title2}</h2>
                <p className={styles.text}> 
                {props.text1}
                <br/><br/> 
                {props.text2}
                </p>
                <div className={styles.buttonWrap}>
                        <BlueButton
                            title={props.buttonText}
                            url={props.url}
                        />
                </div>
            </div>
        </div>
     );
}
 
export default SectionTemplateInverted;