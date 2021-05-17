import styled from 'styled-components';

export const NavContent = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f70054;

  & img{
    height: 100px;
    width: auto;
  }

  .nav-content{
    width: 55%;
    display: flex;
    justify-content: space-between;


    & a{
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      font-weight: 900;
      text-transform: uppercase;
    }
  }
`