import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`


  html, body {
    font-family: 'Roboto';
    min-height: 1500px;

  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    line-height: 1.5;
  }
  

  img {
    display: block;
    max-width: 100%;
  }
  
 button:disabled {
   opacity: 0.5;
   cursor: not-allowed;
 }
 
    
  
 

`