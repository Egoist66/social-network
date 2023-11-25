import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`


  html, body {
    font-family: 'Roboto';
    min-height: 1500px;

  }
  
  #users {
    height: 620px;
    overflow: auto;
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
 
  .page {
    background-color: #8852F7;
    color: white;
    display: inline-block;
    cursor: pointer;
    padding: 5px;
    height: max-content;
    width: max-content;
  }
  
 .selected.page {
  background-color: #4e2a96;
  font-weight: 600;
 }

`