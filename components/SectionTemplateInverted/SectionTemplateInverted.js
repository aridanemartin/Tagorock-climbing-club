import styles from './SectionTemplateInverted.module.css';
import Image from 'next/image';
import BlueButton from '@components/BlueButton/BlueButton';



const SectionTemplateInverted = (props) => {
    
    return ( 
        <div 
        className={styles.sectionTemplateWrap}
        >
            <div className={styles.imageWrap}>
                <Image
                    src={props.image}
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
                <br/><br/> 
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