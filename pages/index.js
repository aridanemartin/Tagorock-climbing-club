import Nav from '../components/Nav/Nav';
import AppLayout from '../components/AppLayout/AppLayout';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    
    let { t } = useTranslation();

    return (
        
        <AppLayout>
            <Nav/>
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

