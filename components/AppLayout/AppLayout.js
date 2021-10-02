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

            <style jsx global>{`

            @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

            :root {
            --green: #3FE79E;
            --dark: #0F0235;
            --off-white: #F5F5F3;

            --space-sm: 0.5rem;
            --space-md: 1rem;
            --space-lg: 1.5rem;

            --font-size-sm: 0.5rem;
            --font-size-md: 1rem;
            --font-size-lg: 2rem;
            }        


            *{
                font-family: 'Anton', sans-serif;
            }

            html {
            box-sizing: border-box;
            font-size: 16px;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            *,
            *:before,
            *:after {
            box-sizing: inherit;
            }

            body,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            ol,
            ul {
            margin: 0;
            padding: 0;
            font-weight: normal;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
            font-weight: bold;
            }

            ol,
            ul {
            list-style: none;
            }

            img {
            max-width: 100%;
            height: auto;
            }

            a {
            color: inherit;
            text-decoration: none;
            }
            
            `}</style>
        </>
    );
}

export default AppLayout;