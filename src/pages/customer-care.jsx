
import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../layouts/Container";
import FAQdropdown from '../components/FAQdropdown'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 110px;
padding: 10px;
justify-content: center;
hr{
    margin: auto;
    width: 100%;
    max-width: 1172px;
}
form{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding: 20px;
    justify-content: center;
    /* background: rgba(20,100,20,.5); */
    input {
        width:50%;
        max-width: 300px;
        margin: 2px auto;
        @media (max-width: 800px){
        width: 100%;  
        margin: 10px auto ;
        }
    }
    select {
        width:50%;
        max-width: 300px;
        margin: 2px auto;
        @media (max-width: 800px){
        width: 100%;  
        margin: 10px auto ;
        }
    }
    label{
        width:50%;
        max-width: 300px;
        margin: 2px auto;
        @media (max-width: 800px){
        width: 100%;  
        margin: 10px auto ;
        }
    }
    textarea{
        width:50%;
        height:100px;
        max-width: 300px;
        margin: 2px auto;
        @media (max-width: 800px){
        width: 100%;  
        margin: 10px auto ;
        }
    }
}
h1{
    margin-bottom: 20px;
}
`
const FAQSection = styled.div`
max-width: 1280px;
margin: auto;
padding: 20px;
width: 100%;
h2{width: 100%;}
display: flex;
flex-wrap: wrap;
justify-content: center;
/* background: rgba(20,20,20,.5); */
`

const ContactSection = styled.div`
max-width: 1280px;
margin: auto;
padding: 20px;
width: 100%;
h2{width: 100%; margin-top: 20px;}
display: flex;
flex-wrap: wrap;
justify-content: center;
/* background: rgba(100,20,20,.5); */
@media (max-width: 800px){
 flex-direction: column; 
 justify-content: center;  
}
`

const ContactDetails = styled.div`
background: #f4f4f4;
width: 47%;
max-width: 372px;
padding: 10px;
margin: 10px;
@media (max-width: 800px){
 width: 100%;  
 max-width: 372px;
 margin: 10px auto ;
}

`

const MencoButton = styled(Link)`
    text-align: center;
    line-height: 48px;
    background-color:  #f4f4f4;
    color: #362E2E;
    border: none;
    width: 45%;
    max-width: 330px;
    height: 50px;
    font-size: 18px;
    /* justify-self: center; */
    /* display: block; */
    margin: 50px 0;
    border: 2px solid #f4f4f4;
    transition: .3s;
:hover{
    color: #1b4870;
    background-color: white;
    border: 2px solid #36648b;
    cursor: pointer;
}
:active {
    background-color: black;
    border: none;
    color: white;
}
`
const ButtonDiv = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
`



const CustomerCare = () => (
  <Layout>
    <SEO title="Customer Care" />
    <Wrapper>
    <h1>Customer Care</h1>
    <form>
        {/* <input type="text" name="HelpQuery" placeholder="Having trouble?"/> */}
    </form>
    <hr/>

    <FAQSection>
        <h2>FAQ</h2>
        <FAQdropdown title='Shipping' options={['Does Menco ship internationally?','How do I track my package?','Can I get my items faster?']}></FAQdropdown>
        <FAQdropdown title='Returns' options={['What is Mencos return policy?','How do I make a return?']}></FAQdropdown>
        <FAQdropdown title='Orders' options={['What payment options can I use?',"I want to cancel or change my order"]}></FAQdropdown>
        <FAQdropdown title='Product Info' options={['Are Menco products made ethically?','What are Mencos quality standards?','How do I take care of my product?']}></FAQdropdown>
        <FAQdropdown title='Account' options={['How do I create an account?',"I've forgotten my password"]}></FAQdropdown>
        <FAQdropdown title='Shopping' options={['Do I need an account to shop with Menco?','Can I buy gift cards?','How do I use promo or discount codes?']}></FAQdropdown>
        <ButtonDiv>
            <MencoButton class="snipcart-user-profile"  onClick={e => e.preventDefault()} ><p class="snipcart-user-profile">Account</p></MencoButton> <MencoButton to="/sizeguides">Size Guides</MencoButton>
        </ButtonDiv>
    </FAQSection>

    <ContactSection>
        <h2>Contact Us</h2>
        <ContactDetails>
            <h3>phone:</h3>
            <p>0800 83 83 83</p>
            <p>Customer support team open for calls 9-5 weekdays and 10-1 weekends.</p>
        </ContactDetails>
        <ContactDetails>
            <h3>email:</h3>
            <p>mencoapparel@gmail.com</p>
            <p>We usually reply within 30 minutes, although we praise your patience around busy seasons.</p>
        </ContactDetails>
        <form>
            <input type="text" name="HelpQuery" placeholder="*First Name" required autocomplete="on"/>
            <input type="text" name="HelpQuery" placeholder="Last Name" autocomplete="on"/>
            <input type="email" name="HelpQuery" placeholder="*Email" required autocomplete="on"/>
            <input type="text" name="HelpQuery" placeholder="Order Number"/>
            <label>Issue:</label>
            <select>
                <option value="product Question">Question about product</option>
                <option value="Error Message">I'm getting an error message</option>
                <option value="Account Question">I have a question reguarding my account</option>
                <option value="Not Listed">Enquiry not listed</option>
                <option value="ha">I'm just lonely</option>
            </select> 
            <textarea placeholder="*How can we help?" required></textarea>
            <input type="submit" value="Submit"></input>
        </form>
    </ContactSection>
    </Wrapper>    


  </Layout>
)

export default CustomerCare