import React from 'react'
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
    Title
  } from './AppStylesMany';

  class About extends React.Component {
    render() {
    return (
        <AppContainer>
          <Title style={{ textDecoration: 'none', color: '#5e0a0a' }}>About</Title>
    
        <FormContainer>
          <ul>
        <li>In 2010 a baby was born. This baby grew up, as most babies do when given food and drinkable liquids, and he started playing with toys that his mom and dad bought for him. Some toys became his favorites and he'd play with them all the time, but for the majority he quickly lost interest and those toys were put in a closet. They would be brought out once in a while over the following months until this baby's parents (me) gave up and either gave the toy away or donated it to a thrift store...</li>
        
        <li>The idea of a toy library is not a new one. The Orem Public Library partners with an organization called PERC that runs a toy library out of a room in the public library's basement, but there was a need for a virtual platform with newer and cooler toys.</li>
        
        <li>Thus The Toy Treasury was born out of the want and need to provide ALL children with the opportunity to play with awesome, educational and unique toys that they would otherwise not be able to access.</li>

        <li>We thank you for coming and hope you'll stay...forever!!!</li>
        </ul>
        </FormContainer>
    
    </AppContainer>

    )
}
  }

export default About