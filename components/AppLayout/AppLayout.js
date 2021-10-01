

const AppLayout = ({children}) => {
    return ( 
        <>
            <main>
                {children}
            </main>
            <style jsx global>{`
                h1{
                    font-size: 3rem;
                }
            `}</style>
        </>
    );
}
 
export default AppLayout;