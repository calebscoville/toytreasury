import styled, { keyframes } from 'styled-components';

// const Container = styled.div`
// background-image: `url(${props => props.imgObj.url})`
// `;

// Animations
const glow = keyframes`
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

// Styled Components
export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #a9eec2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const FormContainer = styled.form`
  width: 30%;
  height: 60%;
  background: #fad284;
  border: 2px solid #6272a4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Image = styled.div`
  width: 55%;
  height: 35%;
  background: orange;
  display: flex;
  color: black;
  font-family: bold;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Image2 = styled.div`
  width: 55%;
  height: 25%;
  background: red;
  display: flex;
  color: black;
  font-family: bold;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const FormHeader = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const FormTitle = styled.h1`
  font-size: 18px;
  color: #705772;
`
export const FormInput = styled.input.attrs({
    placeholder: props => props.title ? 'Title' : 'Description',
    type: props => props.title ? 'Title' : 'Description'
  })`
    width: 80%;
    height: 10%;
    outline: none;
  `

  export const FormInput2 = styled.input.attrs({
    placeholder: props => props.con ? 'Condition' : 'Missing Pieces',
    type: props => props.title ? 'Condition' : 'Missing Pieces'
  })`
    width: 80%;
    height: 10%;
    outline: none;
  `

  export const FormInput3 = styled.input.attrs({
    placeholder: props => props.add ? 'Addtl. Info' : 'URL for online info.',
    type: props => props.title ? 'Addtl. Info' : 'URL for online info.'
  })`
    width: 80%;
    height: 10%;
    outline: none;
  `


export const FormBtn = styled.button`
  width: 15vw;
  height: 7vh;
  background: ${props => props.register ? '#bd93f9' : '#f1fa8c'};
  color: #6272a4;
  border: none;
  &:hover {
    background: ${props => props.register ? '#ff79c6' : '#ffb86c'};
    cursor: pointer;
  }
`

export const EditBtn = styled.button`
  width: 15vw;
  height: 7vh;
  background: ${props => props.register ? '#f38181' : '#705772'};
  color: #6272a4;
  border: none;
  &:hover {
    background: ${props => props.register ? '#705772' : '#f38181'};
    cursor: pointer;
  }
`

export const ThemeSwitcherBtn = styled.button`
  width: 25%;
  height: 10%;
  background: ${props => props.register ? 'pink' : 'aquamarine'};
  color: white;
  border: none;
`