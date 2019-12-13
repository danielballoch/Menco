import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
width: 30vw;
background: #f4f4f4;
padding: 10px;
margin: 5px;
@media (max-width: 800px) {
    width: 100%;
    ul{
        display: ${props => props.theme.main};
    }
}
`


Wrapper.defaultProps = {
    theme: {
        main: "none"
    }
}

const active = {
    main: "block"
}


export default class dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          open: false,
        }
      }
    render(){
        console.log(this.state.open)
    return(
    <Wrapper theme={this.state.open === true ? "active": undefined} onClick={() => this.setState({open: !this.state.open})}>
        <h3 >{this.props.title}</h3>
        <ul>
        {this.props.options.map (option => (
           <a href="#"><li>{option}</li></a>
        ))}
        </ul>
    </Wrapper>
    )
}
}
