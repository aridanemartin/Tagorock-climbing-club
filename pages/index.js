import { useRouter } from 'next/router';


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

