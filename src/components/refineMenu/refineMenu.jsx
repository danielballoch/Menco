import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';
import DropdownBtn from "../dropdownButton";


const Wrapper = styled.div`
position: fixed;
display: flex;
flex-direction: column;
opacity: .98;
z-index: 200;
min-width: 220px; 
width: 30%;
left: 0;
height: 100%;
/* width: 100%;
height: 50vh;
top: 50vh; */
background: #38373c;
box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
transform: ${props => props.theme.translate};
transition: .3s ease-out;
h2{
    margin-top: 140px;
    width: 100%;
    color: white;
}
div{
    margin: 0 auto;
    min-height: 60px;   
}
div:nth-of-type(1){
    margin: 10px auto;
}
`


Wrapper.defaultProps = {
    theme: {
        translate: "translateX(-100%);"
    }
}

const open = {
    translate: "translateX(0);"
}
// onChange={props.onChange("option", "Price")}

const SideDrawer = (props) => {
        return(
            <Wrapper theme={props.Open ? open : undefined} ref={props.setWrapperRef}>
                <h2>Refine:</h2>
                <div>
                <DropdownBtn  onChange={props.onChange} mainText="Price" options={props.PriceRangeOptions} sortLabel={props.sortLabel} sortlinkpre={props.sortlinkpre} priceRange={props.priceRange} colorOption={props.colorOption}/>
                <DropdownBtn  onChange={props.onChange} mainText="Color" options={props.ColorOptions} sortLabel={props.sortLabel} sortlinkpre={props.sortlinkpre} priceRange={props.priceRange} colorOption={props.colorOption}/>
                <DropdownBtn  onChange={props.onChange} mainText="Sort" options={props.SortOptions} sortLabel={props.sortLabel} sortlinkpre={props.sortlinkpre} priceRange={props.priceRange} colorOption={props.colorOption}/>
                </div>
            </Wrapper>
        );
   
   
};
export default SideDrawer;
 


