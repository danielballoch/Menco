import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
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
    @media (min-width: 880px){
        display: none;
    }
`

const Line = styled.div`
width: 14px;
height: 2px;
background: #676565;
transition: 0.3s;
:nth-of-type(2){
    transform: translateY(4px)
    }
:nth-of-type(3){
        width: 6px;
        transform: ${props => props.theme.line3}
    }
    :nth-of-type(4){
        transform: ${props => props.theme.line4};
        width: 6px;
    }
`

Line.defaultProps = {
    theme: {
        line3: "translate(0px,-10px) rotate(90deg)",
        line4: "translate(8px,-6px) rotate(90deg)"
    }
}

const open = {
    line3: "translate(8px,-10px) rotate(90deg)",
    line4: "translate(0px,-6px) rotate(90deg)"
}


export default class dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          open: false,
        }
      }
    componentDidUpdate(){
        
    }
    render(){
        console.log(this.props)
    return(
    <Wrapper theme={this.props.open === true ?  active : undefined} onClick={this.props.toggle}>
            <PlusButton>
                <Line/><Line/><Line theme={this.props.open === true ?  undefined : open}/><Line theme={this.props.open === true ?  undefined : open}/>
            </PlusButton>
    </Wrapper>
    )
    // theme={this.state.open === true ?  undefined : open}
}
}
