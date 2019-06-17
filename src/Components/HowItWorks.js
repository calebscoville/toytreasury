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
    FormBtn
  } from './AppStylesMany';

  class HowItWorks extends React.Component {
    render() {
    return (
        <AppContainer>
        <div>
            <h1>How It Works</h1>
            <FormContainer>
            <text>
                Okay Beautiful Human, here's how it works:

                You look through the toy library catalog and find a toy you'd like to check out from the library. 

                Follow the instructions for checkout.

                You can choose to pick up the game (if you live close and/or choose to do that) or we can ship it to you and you would pay the cost of shipping. Then you return it within 14 calendar days.

                You must return the game in the same condition with all the pieces or pay a hefty fee! Just kidding, there is a fee, but it's the cost of replacing the piece/part along with the time it takes(labor as it were.)

                You can check out one game at a time as you get the hang of it, then after three months and responsible behavior, you can then check out two games at a time.
            </text>
            </FormContainer>
        </div>
        </AppContainer>
    
        )
}
  }
export default HowItWorks