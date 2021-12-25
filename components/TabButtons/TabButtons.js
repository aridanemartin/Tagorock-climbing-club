import styles from './TabButtons.module.css';

const TabButtons = ({buttons, setActiveTab, activeTab}) =>{

    return(
        <div className={styles.tabButtons}>
        {buttons.map(button =>{
            return (
                <button 
                className={button === activeTab ? 'active': ''} onClick={()=>setActiveTab(button)}>{button}</button>
            )
        })}
        </div>
    )
    }

export default TabButtons;
    