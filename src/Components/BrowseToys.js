import React from 'react'
import 'reset-css'
import axios from 'axios'
import ToyDisplay from './ToyDisplay'

import {
    AppContainer,
    FormContainer,
    Image,
    // Image2,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStylesBT';

  class BrowseToys extends React.Component {
    constructor() {
      super()
      this.state={
        alltoys: []
      }
    }

    componentDidMount() {
      axios.get("/api/alltoys")
      .then(res => {
        this.setState({
          alltoys: res.data
        })
        console.log(this.state.alltoys)
      })
    }

    render() {
      const displayToys = this.state.alltoys.map((element, index) => {
        return(
          <ToyDisplay 
            toyId={element.id}
            title={element.title} 
            description={element.description} 
            condition={element.condition}
            extraInfo={element.extra_info}
            missingPieces={element.missing_pieces}
            imageUrl={element.url}
          />
        )
      })
    return (
            
    <AppContainer>
      {displayToys}
    </AppContainer>
  
      
  
      )
  }
}

export default BrowseToys
// extra_info: "doll stuff"
// id: 2
// missing_pieces: 0
// title: "doll"
// url: "doll.com"