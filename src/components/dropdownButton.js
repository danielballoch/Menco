import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Container = styled.div`

 width: 110px;
`
const DropdownBtn = styled.button`
    border: 1px solid #d2d2d2;
    border-radius: 3px;
    background-color: white;
    text-decoration: none;
    transition: 0.3s;
    padding: 4px;
    margin: 0 4px;
    font-size: 14px;
    width: 100px;
`

const DropdownOption = styled.button`
    width: 100px;
    z-index: 100;
    margin: 0 4px;
    background-color: ${props => props.theme.main};
    border: 1px solid #d2d2d2;
    :hover{
        color: #36648b; 
    }
`
DropdownOption.defaultProps = {
    theme: {
      main: "white"
    }
  }

// Define what props.theme will look like
const active = {
    main: "#f4f4f4"
  };




export default class DropdownButton extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        open: false,
        value: 'all', 
        label: "all", 
        priceRange: this.props.priceRange, 
        colorOption: this.props.colorOption, 
        midLink: "/frontmatter___date/ASC/" ,}
    }
    componentDidMount(){
        
        var priceRange = this.props.priceRange;
        var colorOption = this.props.colorOption;
        if (this.props.mainText === "Color"){
            if (this.state.midLink !== "/frontmatter___date/ASC/"){this.setState({midLink: "/frontmatter___date/ASC/"}); }
                this.setState({label: colorOption});
                this.setState({colorOption: ""})
                               
        }
        else if (this.props.mainText === "Price"){
            this.setState({midLink: "/frontmatter___date/ASC/" + colorOption + "/"});
            this.setState({label: this.state.priceRange})
            this.setState({priceRange: ""});
            this.setState({colorOption: ""})
            
        } 
        else if (this.props.mainText === "Sort"){
            this.setState({label: this.props.sortLabel})
            console.log(this.props)
            
            
            // "/frontmatter___price/ASC/","/frontmatter___price/DESC/","/frontmatter___date/ASC/","/frontmatter___date/DESC/"
        }  
        
    }

    
  
    render() {
        var linkPre = this.props.sortlinkpre
        var midLink = this.state.midLink
        var priceRange = this.state.priceRange
        var colorOption = this.state.colorOption
        
        return (
      
        <Container>
        <DropdownBtn onClick={() => this.setState({open: true})}>{this.props.mainText}: {this.state.label}</DropdownBtn>
          <div style={{display: this.state.open ? 'block' : 'none'}}>
            {this.props.options.map((option) => {
                const handleClick = () => {
                    this.setState({open: false, value: option})
                    this.props.onChange(option, this.props.mainText) 
                }
                
                if (this.props.mainText === "Sort"){
                    // this.updatemidLink(option);
                let optionLabel = "price low-high"
                if (option === "/frontmatter___price/ASC/"){optionLabel = "price low-high"}
                else if (option === "/frontmatter___price/DESC/"){optionLabel = "price high-low"}
                else if (option === "/frontmatter___date/ASC/"){optionLabel = "new releases"}
                else if (option === "/frontmatter___date/DESC/"){optionLabel = "old gold"}

                    return (
                        <Link to={linkPre + option + "/" + colorOption + "/" + priceRange}>
                            <DropdownOption key={option} mainText={this.props.mainText} onClick={handleClick} theme={this.state.label === option ? 'active' : undefined}>
                                {optionLabel} 
                            </DropdownOption>
                        </Link>
                    )
              }
              else {
                    return (
                        <Link to={linkPre + midLink + option +"/" + colorOption + "/" + priceRange}>
                            <DropdownOption key={option} mainText={this.props.mainText} onClick={handleClick} theme={this.state.label === option ? 'active' : undefined}>
                                {option} 
                            </DropdownOption>
                        </Link>
                    )
              }
            })}
            </div>
        </Container>
      )
    }
  }
  
  
  
  
