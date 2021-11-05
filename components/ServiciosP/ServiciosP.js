import styles from './ServiciosP.module.css';
import useTranslation from 'next-translate/useTranslation';
import Button from '../Button/Button';

const Servicios = (props) => {

    let { t } = useTranslation();

    return ( 
        <div 
        className={styles.serviciosWrap}
        >
        
            <div className={styles.serviciosContent}>
                <h2 className={styles.serviciosTitle}>{props.title}</h2>
                <p className={styles.serviciosParrafo}>{props.text}</p>
                <Button 
                title="Saber más"
                url="/servicios-profesionales"
                />
            </div>
        </div>



    );
}

export default Servicios;