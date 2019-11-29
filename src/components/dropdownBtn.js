import React from 'react';
import styled from '@emotion/styled';
import "./dropdownBtn.css"

    
export default class refineBtn extends React.Component {
    constructor(props) {
        super(props);
    }
      state = {
        open: false,
        [this.props.mainText + "Option"]: "all",    
    };

    dropdownBtnToggle = () => {
        this.setState((prevState)=> {
            return{open: !prevState.open};
        });
    };
    optionClickHandler = (option) => {
     
        this.setState(() => {
            console.log(this.props.mainText + " updated to " + option)
            return {[this.props.mainText + "Option"] : option}
        });
       };

    render(){ 
    const options = this.props.options
    console.log("open: " + this.state.open)
    
return(
    <div>
        {/* <button onClick={() => this.dropdownBtnToggle()} >
            {this.props.mainText}: 
        </button> */}
        <button onClick={this.dropdownBtnToggle} >
            {this.props.mainText}: 
        </button>
        <div className={this.state.open ? 'option open' : "option"} >
            <p key={"all"} onClick={() => this.optionClickHandler("all")}> all</p>
           {options.map(option => (
               <p key={option} onClick={() => this.optionClickHandler(option)}>{option}</p>
            ))}
        </div>  
    </div>
    );
}

}

