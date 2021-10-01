import Container from '../components/container/Container';
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
        <>
            <Container>

                <Head>
                    <title>Hola!</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1>{indexText}</h1>
                
            </Container>



        </>
    );
}

export default Index;

