import React from 'react';
import {Link} from 'gatsby';

export default class DropdownButton extends React.Component {
    constructor(props) {
      super(props)
      this.state = {open: false, value: 'all'}
    }
  
    render() {
        let linkPre = this.props.sortlinkpre;
        var priceRange = this.props.priceRange;
        var colorOption = this.props.colorOption;
        console.log("priceRange Before: " + priceRange)
        if (priceRange === undefined){ var midLink = "/frontmatter___date/ASC/" + colorOption + "/" ; priceRange = "";}
        else {midLink = "/frontmatter___date/ASC/"; }
        console.log("priceRange:" + priceRange)
        console.log(midLink)


      return (
      
        <div>
    <div onClick={() => this.setState({open: true})}>{this.props.mainText}: {this.state.value}</div>
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
  
  
  
  
