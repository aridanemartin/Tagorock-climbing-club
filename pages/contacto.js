
import Head from 'next/head';
import { useRouter } from 'next/router';

const Contacto = () => {
    
        let router = useRouter();

        let ContactoText =
        router.locale === 'en'
        ? "Contact"
        : router.locale === 'es'
        ? "Contacto" : "";
    
    return (

        <div>
            <Head>
                <title>Contacto - Tagorock - club de escalada en Gran Canaria</title>
            </Head>

            <h1>{ContactoText}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, obcaecati? Voluptatibus perferendis recusandae et iste, distinctio, laudantium perspiciatis commodi ex veritatis vel in qui illo quidem ratione excepturi, reiciendis itaque.
            Sint vel incidunt voluptate error! Maiores modi pariatur exercitationem rem esse consequatur laborum quibusdam velit neque aut fugiat, explicabo deserunt vel porro delectus quas tempore ipsam libero, asperiores dolor placeat.
            </p>
            
        </div>
        
    );
}

export default Contacto;