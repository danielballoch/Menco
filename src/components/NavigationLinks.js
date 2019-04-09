import React from  'react';
import { Link } from 'gatsby'
import styled from "styled-components"

export const StyledLink = styled(Link)`

text-decoration: none;
color: black;
list-style-type: none;
transition: 0.1s;
&:hover {
    color:#FF4136;
}
&:active {
    color: red;
    background: radial-gradient(rgba(255,245,255, 0.95), rgba(255,255,255, 0.95)); 
  }

`

export const Nav = styled.div`
padding: .75em 1em;
font-family: "Helvetica Neue", Helvetica, "Segoe UI";
`