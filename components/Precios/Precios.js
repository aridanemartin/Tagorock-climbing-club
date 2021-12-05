
import styles from './Precios.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';



const Precios = () => {

    const [TipoDeCuota, setTipoDeCuota ] = useState("sesionesLibres");
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    let { t } = useTranslation();

    return (
        <>
            <div className={styles.preciosContainer}>

                <h1 className={styles.preciosTitle}>
                    {t('common:precios')}   
                </h1>
                <p className={styles.preciosDesc}>{t('common:preciosDesc')}</p>

                <div className={styles.preciosTable}>
                    <div className={styles.preciosNav}>
                        <a 
                        onClick={() => {
                            setTipoDeCuota("sesionesLibres");
                            setActive1(true);
                            setActive2(false);
                            setActive3(false);
                        }}
                        className={`styles.preciosTitles ${active1 ? styles.active : styles.inactive}`}
                        >Sesiones Libres</a>
                        <a 
                        onClick={() => {
                            setTipoDeCuota("clasesDirigidas")
                            setActive1( false);
                            setActive2( true);
                            setActive3( false);
                        }}
                        className={`styles.preciosTitles ${active2 ? styles.active : styles.inactive}`}
                        >Clases Dirigidas</a>
                        <a 
                        onClick={() => {
                            setTipoDeCuota("material")
                            setActive1(false);
                            setActive2(false);
                            setActive3(true);
                        }}
                        className={`styles.preciosTitles ${active3 ? styles.active : styles.inactive}`}
                        >Material</a>
                    </div>
                    <div className={styles.preciosListado}>
                        
                        {TipoDeCuota === "sesionesLibres" && 
                        <motion.div 
                        className={styles.underline}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                        layoutId="underline"
                        >
                            <section className={styles.priceList}>
                                <p>{t('common:mensual')} 30€</p>
                                <p>{t('common:medioMes')} 20€</p>
                                <p>{t('common:sesionLibre')} 8€</p>
                            </section>
                        </motion.div>
                        }
                        {TipoDeCuota === "clasesDirigidas" && 
                        
                        <motion.div 
                        className={styles.preciosListado}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}>
                            <section className={styles.priceList}>
                                <p>{t('common:mensual')} 40€</p>
                                <p>{t('common:medioMes')} 30€</p>
                                <p>{t('common:clasePrueba')} 15€</p>
                                <h4>{t('common:clasePruebaObs')}</h4>
                            </section> 
                        </motion.div>
                        
                        }
                        {TipoDeCuota === "material" && 
                        
                        <motion.div 
                        className={styles.preciosListado}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}>
                            <section className={styles.priceList}>
                                <p>{t('common:magnesioPeq')} 40€</p>
                                <p>{t('common:magnesioGrande')} 30€</p>
                                <p>{t('common:alquilerPies')} 3€</p>
                            </section>  
                        </motion.div>
                        
                        }
                    </div>
                </div>


            </div>
        </>

    
    );
}

export default Precios;