
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import AppLayout from '../components/AppLayout/AppLayout';     

const Contacto = () => {
    let { t } = useTranslation();
    
    return (

        <AppLayout>
            <Head>
                <title>Contacto - Tagorock - club de escalada en Gran Canaria</title>
            </Head>

            <h1>{t('contacto:title')}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, obcaecati? Voluptatibus perferendis recusandae et iste, distinctio, laudantium perspiciatis commodi ex veritatis vel in qui illo quidem ratione excepturi, reiciendis itaque.
            Sint vel incidunt voluptate error! Maiores modi pariatur exercitationem rem esse consequatur laborum quibusdam velit neque aut fugiat, explicabo deserunt vel porro delectus quas tempore ipsam libero, asperiores dolor placeat.
            </p>
            
        </AppLayout>
        
    );
}

export default Contacto;