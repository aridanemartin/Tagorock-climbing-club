import Nav from "../nav/Nav";
import Head from 'next/head';

const Container = (props) => {
    return ( 
        <div>
            <Head>
                <title>Tagorock - Club de Escalada en Gran Canaria</title>
            </Head>
            <Nav/>
            <div>
                {props.children}
            </div>
        </div>
     );
}

export default Container;