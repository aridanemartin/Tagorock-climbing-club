import Nav from '../Nav/Nav';

const AppLayout = ({children}) => {
    return ( 
        <>
            <Nav/>
            <main>   
                {children}
            </main>
            <style jsx global>{`
                html{
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </>
    );
}

export default AppLayout;