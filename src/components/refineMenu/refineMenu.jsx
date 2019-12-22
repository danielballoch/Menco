import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';
import DropdownBtn from "../dropdownButton";

const Wrapper = styled.div`
position: fixed;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-content: flex-start;
z-index: 200;
width: 100%;
height: 50vh;
top: 50vh;
background: #38373c;
transform: ${props => props.theme.translate};
transition: .3s ease-in;
h2{
    width: 100%;
    color: white;
}
`

Wrapper.defaultProps = {
    theme: {
        translate: "translateY(100%);"
    }
}

const open = {
    translate: "translateY(0);"
}
// onChange={props.onChange("option", "Price")}

const SideDrawer = (props) => {
        return(
            <Wrapper theme={props.Open ? open : undefined}>
                <h2>Refine:</h2>
                <DropdownBtn  onChange={props.onChange} mainText="Price" options={props.PriceRangeOptions} sortLabel={props.sortLabel} sortlinkpre={props.sortlinkpre} priceRange={props.priceRange} colorOption={props.colorOption}/>
                <DropdownBtn  onChange={props.onChange} mainText="Color" options={props.ColorOptions} sortLabel={props.sortLabel} sortlinkpre={props.sortlinkpre} priceRange={props.priceRange} colorOption={props.colorOption}/>
                <DropdownBtn  onChange={props.onChange} mainText="Sort" options={props.SortOptions} sortLabel={props.sortLabel} sortlinkpre={props.sortlinkpre} priceRange={props.priceRange} colorOption={props.colorOption}/>
            </Wrapper>
        );
   
   
};
export default SideDrawer;
 


