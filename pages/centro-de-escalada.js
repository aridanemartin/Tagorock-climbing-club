import useTranslation from 'next-translate/useTranslation'
import AppLayout from '../components/AppLayout/AppLayout';     

const Centrodeescalada = () => {
    let { t } = useTranslation();

    return ( 
        <AppLayout> 
            <h1>{t('centro-de-escalada:title')}</h1>
            <p>Este es el centro de escalada</p>
        </AppLayout>
     );
}
 
export default Centrodeescalada;