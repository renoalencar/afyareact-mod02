import styled from 'styled-components';

export const Container=styled.div`
  width: 80%;
  margin: 0 auto;

  .signup-section{
    display: flex;
    height: calc(100vh - 100px);

    .signup-text{
      flex: 1;
      background-color: blue;
    }

    .signup-form{
      flex: 1;
      background-color: green;
    }
  }

  .cta-section{
    display: flex;
    height: calc(100vh - 100px);
    background-color: purple;
  }
`