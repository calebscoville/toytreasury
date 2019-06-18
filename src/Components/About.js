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
    <div>
        <FormContainer>
        <text>In 2010 a baby was born. This baby grew up, as most babies do when given food and drinkable liquids, and he started playing with toys that his mom and dad bought for him. Some toys became his favorites and he'd play with them all the time, but the majority he quickly lost interest and those toys were put in a closet. They would be brought out once in a while over the following months until this baby's parents (me) gave up and either gave the toy away or donated it to a thrift store...</text>
        </FormContainer>
    </div>
    </AppContainer>

    )
}
  }

export default About