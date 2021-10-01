import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from '../components/container/Container';

const Index = () => {
    let router = useRouter();

    let indexText =
    router.locale === 'en'
    ? "Hello"
    : router.locale === 'es'
    ? "Hola" : "";
    
    return (
        <div>
                <Container name="Index" />
                

                <h1>{indexText}</h1>
                

        </div>
    );
}

export default Index;

