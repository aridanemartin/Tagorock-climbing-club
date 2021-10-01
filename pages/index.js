import { useRouter } from 'next/router';
import Nav from '../components/Nav/Nav';
import AppLayout from '../components/AppLayout/AppLayout';

const Index = () => {
    let router = useRouter();

    let indexText =
    router.locale === 'en'
    ? "Hello"
    : router.locale === 'es'
    ? "Hola" : "";
    
    return (
        
        <AppLayout>
            <Nav/>
            <h1>{indexText}</h1>

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

