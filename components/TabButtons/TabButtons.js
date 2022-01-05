import styles from './TabButtons.module.css';

const TabButtons = ({buttons, setActiveTab, activeTab}) =>{

    return(
        <div className={styles.tabButtons}>
        {buttons.map(button =>{
            return (
                <button 
                key={button}
                className={button === activeTab ? `${styles.tabButton} + ' ' + ${styles.active}` :  `${styles.tabButton}`} 
                onClick={()=>setActiveTab(button)}
                >{button}
                </button>
            )
        })}
        </div>
    )
    }

export default TabButtons;
    