import styled, { keyframes } from 'styled-components';

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
  background: #f2eee0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const FormContainer = styled.form`
  width: 30%;
  height: 70%;
  background: #c8e6f5;
  border: 2px solid #5ca0d3;
  display: flex;
  margin: 1px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Image = styled.div`
  width: 95%;
  height: 45%;
  background: transparent;
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
  font-size: 15px;
  font-weight: bold;
  color: #5e0a0a;
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
  width: 80%;
  height: 10%;
  background: ${props => props.register ? '#FFD700' : '#FFD700'};
  color: #6272a4;
  border: none;
  &:hover {
    background: ${props => props.register ? '#f2eee0' : '#f2eee0'};
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