import React, {Component} from 'react'
import styled from 'styled-components';
// import stripe from './STRIPE_PUB_KEY';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import '../App.css';
import 'reset-css'
import {Link} from 'react-router-dom'

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn,
    Title,
    Paragraph
  } from './AppStylesMany';


class Donate extends React.Component {
    onToken = (token) => {
      token.card = void 0;
      axios.post('/api/payment', { token, amount: 1000 } ).then(response => {
        alert('we are in business')
      });
    }
  
    render() {
      return (
        <AppContainer>
          <Title style={{ textDecoration: 'none', color: '#5e0a0a', padding: "5px" }}>Donate to Save the Children!</Title>
          <div>
          <StripeCheckout
            name="❤️ We love you ❤️"
            description="Thanks for helping the kids."
            image="https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            panelLabel="Donate "
            label="Click here to make a child happy!"
            token={this.onToken}
            stripeKey={ "pk_test_7zAPpxGG6xwTkDTO55KcZMA4000vP1oDan" }
            amount={1000}
          />
          </div>
        <FormContainer style={{ height: '85px', padding: "5px", margin: 40 }}>
         <Paragraph>
             We are always trying to buy the best toys and fix the old ones. Every donation is greatly appreciated, sincerely welcomed and graciously recognized. From $0.25 to $9,000,000, we'll take it. Thanks.
             </Paragraph>
        </FormContainer> 
          
        </AppContainer>
      );
    }
  }
  
  export default Donate;

const Button = styled.button`export default PatronDash

const Button = styled.button
background: palevioletred;
border-radius: 3px;
border: 2px solid palevioletred;
color: black;
margin: 0 1em;
padding: 0.25em 1em;`
;








// export const Donate = () => {
//     return (
//         <div>
//         <h1>Donate</h1>
//         <text>Although we are funded by the state, and I'm a multi-billionaire (just kidding, but maybe some day...) we are always trying to buy the best toys and fix the old ones. Every donation is greatly appreciated, sincerely welcomed and graciously recognized. From $0.25 to $9,000,000, we'll take it. Thanks.</text>
//         <Button>Donate</Button>
//         </div>
        
//     )
// }




// export default Donate