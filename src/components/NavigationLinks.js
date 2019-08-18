import { Link } from 'gatsby'
import styled from "styled-components"

export const StyledLink = styled(Link)`
padding: 10px;
text-decoration: none;
color: black;
list-style-type: none;
transition: 0.1s;
&:hover {
    color:#36648b;
}
&:active {
    color: red;
    background: radial-gradient(rgba(255,245,255, 0.95), rgba(255,255,255, 0.95)); 
  }

`
