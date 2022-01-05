import '../styles/global/globals.css';
import Head from 'next/head';
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
    return (
        <>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <motion.div 
    key={router.route}
    initial="pageInitial" 
    animate="pageAnimate"
    variants={{ 
        pageInitial: {
            opacity: 0
        },
        pageAnimate: {
            opacity: 1
        }
    }}>
        <Component {...pageProps} />
    </motion.div>
    </>
    )

}

export default MyApp;