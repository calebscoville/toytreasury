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
// export const nav = styled.div`
// width: 10vw;
// height: 10vh;
// background: #282a36;
// display: flex;
// flex-direction: row;
// flex-wrap: wrap;
// justify-content: space-around;
// align-items: center;

// `

export const AppContainer = styled.div`
  width: 100%;
  height: 5vh;
  background: #f2eee0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

// export const FormContainer = styled.form`
//   width: 30%;
//   height: 60%;
//   background: #44475a;
//   border: 2px solid #6272a4;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// `
export const Span = styled.span`
  background: #c8e6f5;
  border-radius: 3px;
  border: 1px solid #5ca0d3;
  color: #c8e6f5;
  margin: 0 0.75em;
  color: #5e0a0a;
`
// padding: 0.25em 1em;

// export const Image = styled.div`
//   width: 95%;
//   height: 45%;
//   background: orange;
//   display: flex;
//   color: black;
//   font-family: bold;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// `
// export const Image2 = styled.div`
//   width: 55%;
//   height: 25%;
//   background: red;
//   display: flex;
//   color: black;
//   font-family: bold;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// `

// export const FormHeader = styled.div`
//   width: 80%;
//   height: 10%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// `

// export const FormTitle = styled.h1`
//   font-size: 24px;
//   color: #50fa7b;
// `
// export const FormInput = styled.input.attrs({
//     placeholder: props => props.title ? 'Title' : 'Description',
//     type: props => props.title ? 'Title' : 'Description'
//   })`
//     width: 80%;
//     height: 10%;
//     outline: none;
//   `

//   export const FormInput2 = styled.input.attrs({
//     placeholder: props => props.con ? 'Condition' : 'Missing Pieces',
//     type: props => props.title ? 'Condition' : 'Missing Pieces'
//   })`
//     width: 80%;
//     height: 10%;
//     outline: none;
//   `

//   export const FormInput3 = styled.input.attrs({
//     placeholder: props => props.add ? 'Addtl. Info' : 'URL for online info.',
//     type: props => props.title ? 'Addtl. Info' : 'URL for online info.'
//   })`
//     width: 80%;
//     height: 10%;
//     outline: none;
//   `


// export const FormBtn = styled.button`
//   width: 80%;
//   height: 10%;
//   background: ${props => props.register ? '#bd93f9' : '#f1fa8c'};
//   color: #6272a4;
//   border: none;
//   &:hover {
//     background: ${props => props.register ? '#ff79c6' : '#ffb86c'};
//     cursor: pointer;
//   }
// `

// export const ThemeSwitcherBtn = styled.button`
//   width: 25%;
//   height: 10%;
//   background: ${props => props.register ? 'pink' : 'aquamarine'};
//   color: white;
//   border: none;
// `