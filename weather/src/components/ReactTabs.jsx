import React, { useState } from "react";
import './ReactTabs.css';

const ReactTabs = ({tabs, defaultTabInd, alignment='center', align }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(defaultTabInd);
    const showTab = (ind) => { 
        if(!tabs[ind].disabled) {
            setActiveTabIndex(ind);
        }
    }

    return (
        <div className="tabs-container">
            <ul className='tabs'>
                {tabs.map((tab, ind) => {
                    return <li className={`tab`} onClick={() => showTab(ind)}><button className={`tab-text-${alignment} ${tab.disabled ? 'tab-disabled': ''} ${ind === activeTabIndex ? 'tab-selected' : ''}`}> {tab.tabname}</button> </li>
                })}
            </ul>

            <div className='tab-content'>
              
                { tabs[activeTabIndex].tabContent}
            </div>

        </div>
    )

}

export default ReactTabs;