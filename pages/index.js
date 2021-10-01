import { useRouter } from 'next/router';
import Head from 'next/head';

const Index = () => {
    let router = useRouter();

    let indexText =
    router.locale === 'en'
    ? "Hello"
    : router.locale === 'es'
    ? "Hola" : "";
    
    return (
        <div>
                <Head>
                    <title>Hola!</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1>{indexText}</h1>
                

        </div>
    );
}

export default Index;

