import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';


export default class DropdownButton extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        open: false,
        value: 'all', 
        label: "all", 
        priceRange: this.props.priceRange, 
        colorOption: this.props.colorOption, 
        midLink: "/frontmatter___date/ASC/" }
    }
    componentDidMount(){
        
        var priceRange = this.props.priceRange;
        var colorOption = this.props.colorOption;
        if (this.props.mainText === "Color"){
            if (this.state.midLink !== "/frontmatter___date/ASC/"){this.setState({midLink: "/frontmatter___date/ASC/"}); }
                this.setState({label: colorOption});
                               
        }
        else if (this.props.mainText === "Price"){
            this.setState({midLink: "/frontmatter___date/ASC/" + colorOption + "/"});
            this.setState({label: this.state.priceRange})
            this.setState({priceRange: ""});
            
        }   
        
    }
  
    render() {
        var linkPre = this.props.sortlinkpre
        var midLink = this.state.midLink
        var priceRange = this.state.priceRange
      return (
      
        <div>
        <div onClick={() => this.setState({open: true})}>{this.props.mainText}: {this.state.label}</div>
          <div style={{display: this.state.open ? 'block' : 'none'}}>
            {this.props.options.map((option) => {
                const handleClick = () => {
                    this.setState({open: false, value: option})
                    this.props.onChange(option, this.props.mainText)  
                }
              return (
                <div key={option} onClick={handleClick} className={this.state.value === option ? 'active' : undefined}>
                    <Link to={linkPre + midLink + option +"/" + priceRange}>{option}</Link> 
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }
  
  
  
  
