import { useRouter } from 'next/router';
import Nav from '../components/Nav/Nav';

const Index = () => {
    let router = useRouter();

    let indexText =
    router.locale === 'en'
    ? "Hello"
    : router.locale === 'es'
    ? "Hola" : "";
    
    return (
        <>
            <Nav/>
            <h1>{indexText}</h1>
        </>
     
    );
}

export default Index;

