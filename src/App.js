import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import {HashRouter} from 'react-router-dom'
import router from './router'
// import 'reset-css'

// import {
//   AppContainer,
//   FormContainer,
//   FormHeader,
//   FormTitle,
//   FormInput,
//   FormBtn
// } from './AppStyles';

class App extends React.Component {

  render() {
  return (
    <HashRouter>
      <Navbar />
      {router}
    </HashRouter>



  );
}
}

export default App;
