import { useRouter } from 'next/router';
import Container from '../components/container/Container';

const Index = () => {
    let router = useRouter();

    let indexText =
    router.locale === 'en'
    ? "Hello"
    : router.locale === 'es'
    ? "Hola" : "";
    
    return (
                <Container name="Index">
                

                <h1>{indexText}</h1>
                </Container>
     
    );
}

export default Index;

