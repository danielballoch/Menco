import React from 'react';
import styled from '@emotion/styled';
import "./dropdownBtn.css"

    
export default class refineBtn extends React.Component {
    constructor(props) {
        super(props);

    }
      state = {
        open: false
    };

    dropdownBtnToggle = () => {
        this.setState((prevState)=> {
            return{open: !prevState.open};
        });

    };




    render(){ 
        let toggleClasses = 'side-drawer-button';
    if(this.props.open){
        toggleClasses = 'side-drawer-button toggle'
    }
    const options = this.props.options
    console.log("open: " + this.state.open)
    

return(
    <div>
        <button onClick={() => this.dropdownBtnToggle()} 
        // className={toggleClasses} onClick={this.props.click} 
        >
            {this.props.mainText}:
                
        </button>
        <div className={this.state.open ? 'option open' : "option"} >
           {options.map(option => (
               <p>{option}</p>
            ))}
        </div>
    </div>
    
    );
}

}

