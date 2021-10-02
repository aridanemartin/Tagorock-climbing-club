import Nav from '../Nav/Nav';

const AppLayout = ({children}) => {
    return ( 
        <>
            <Nav/>
            <main className="mainContainer">   
                {children}
            </main>

            <style jsx>{`
                .mainContainer{
                    max-width: 1140px;
                    margin: 0 auto;
                }

            `}</style>
        </>
    );
}

export default AppLayout;