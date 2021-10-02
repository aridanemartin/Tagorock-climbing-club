

const AppLayout = ({children}) => {
    return ( 
        <>
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