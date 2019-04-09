import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = props => {
    let toggleClasses = 'side-drawer-button';
    if(props.open){
        toggleClasses = 'side-drawer-button toggle'
    }

return(
    <button className={toggleClasses} onClick={props.click}>
        <div className="side-drawer-button__line"/>
        <div className="side-drawer-button__line"/>
        <div className="side-drawer-button__line"/>
    </button>
    );
}


export default drawerToggleButton;

