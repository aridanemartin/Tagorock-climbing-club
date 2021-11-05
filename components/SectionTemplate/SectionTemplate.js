import styles from './SectionTemplate.module.css';
import Image from 'next/image';
import BlueButton from '@components/BlueButton/BlueButton';

const SectionTemplate = (props) => {
    
    return ( 
        <div 
        className={styles.sectionTemplateWrap}
        id={props.id}
        >
            <div className={styles.imageWrap}>
                    <Image
                        src={props.image}
                        alt={props.alt}
                        layout="fill"
                        objectFit="cover"
                    />
            </div>

            <div className={styles.textWrap}>
                <h2 className={styles.title}>Escuela de Escalada<br/> Infantil y de Adultos</h2>
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

export default SectionTemplate;