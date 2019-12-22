import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
width: 30vw;
max-width: 384px;
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
const Title = styled.div`
display: flex;
width: 100%;
justify-content:space-between;
`

const PlusButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20px;
    width: 14px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    @media (min-width: 800px){
        display: none;
    }
`

const Line = styled.div`
width: 14px;
height: 2px;
background: black;
transition: 0.3s;
:nth-of-type(1){
    transform: translateY(10px)
}
:nth-of-type(2){
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
        background: ${props => props.theme.main};
    }
`

Line.defaultProps = {
    theme: {
        main: "rgba(0,0,0,0)"
    }
}

const open = {
    main: "black"
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
    <Wrapper theme={this.state.open === true ?  active : undefined} onClick={() => this.setState({open: !this.state.open})}>
        <Title>
            <h3>{this.props.title}</h3>
            <PlusButton>
                <Line/><Line theme={this.state.open === true ?  undefined : open}/>
            </PlusButton>
        </Title>
        
        <ul>
        {this.props.options.map (option => (
           <a href="#"><li>{option}</li></a>
        ))}
        </ul>
    </Wrapper>
    )
}
}
