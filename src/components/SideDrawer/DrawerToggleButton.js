import React from 'react';
import './DrawerToggleButton.css';
import styled from '@emotion/styled';

const Line = styled.div`
    width: 26px;
    height: 2px;
    background: ${props => props.light ? 'white' : 'black'}; 
    z-index: 300;
    transition: 0.5s;
    
`

    
export default class drawerToggleButton extends React.Component {
    render(){ 
        let toggleClasses = 'side-drawer-button';
    if(this.props.open){
        toggleClasses = 'side-drawer-button toggle'
    }
    

return(
    <button className={toggleClasses} onClick={this.props.click} >
        <Line className="side-drawer-button__line" light={this.props.light}/>
        <Line className="side-drawer-button__line" light={this.props.light}/>
        <Line className="side-drawer-button__line" light={this.props.light}/>
    </button>
    );
}

}


// export default drawerToggleButton;

