import useTranslation from 'next-translate/useTranslation';
import AppLayout from '../components/AppLayout/AppLayout';     

const Index = () => {
    
    let { t } = useTranslation();

    return (
        
        <AppLayout>
            <h1>{t('index:heroBanner1')}</h1>

            <style jsx>{`
                h1{
                    color: green;
                }
            
            `}
            </style>
        </AppLayout>
     
    );
}

export default Index;

