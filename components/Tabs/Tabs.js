import { useState } from 'react';
import React from 'react';
import TabButtons from '@components/TabButtons/TabButtons';
import { motion , AnimatePresence} from 'framer-motion';

const Tabs = (props) => {
    
    const [activeTab, setActiveTab] = useState("Sala Principal");

    let content;
    let buttons = [];
    
    return ( 
    <>
        <AnimatePresence>
            <div>

                {React.Children.map(props.children, child =>{
                // por cada label que anada el boton
                buttons.push(child.props.label)

                {child.props.label === activeTab ? 
                    content = child.props.children : ''
                }
                })}
                
            
                <TabButtons buttons={buttons} setActiveTab={setActiveTab} activeTab={activeTab}/>
                <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                >
                {content}
                </motion.div>

            </div>   
        </AnimatePresence> 
    </>
    );
}

export default Tabs;



