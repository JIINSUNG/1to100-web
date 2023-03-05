import React from 'react'
import styled from 'styled-components';
import StateSlice from "../features/State/StateSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
    const Mains = useSelector((state) => {
        return state.Popup.value;
      });
    const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <Headernav>
        <HeadernavButton onClick={()=>{alert("준비중입니다")}}>
            <text><a href="#">일에서백</a></text>
            <img src={require("../assets/instagram_logo.png")} alt=""/>        
            </HeadernavButton>
      </Headernav>
      <HeaderBrand>
        <HeaderLogo>
        <img src={require("../assets/H.png")} alt="" />        
        <img src={require("../assets/A.png")} alt="" />        
        <img src={require("../assets/N.png")} alt="" />        
        <img src={require("../assets/D.png")} alt="" />        
        </HeaderLogo>
        <HeaderSelect>
            <Text onClick={()=> {Mains ? <></> : dispatch(StateSlice.actions.Popup())}}><a href="#">다운로드</a></Text>
        </HeaderSelect>
        <HeaderSelect>
            <Text onClick={() => {Mains ? dispatch(StateSlice.actions.Popup()): <></>}}><a href="#">서비스소개</a></Text>
        </HeaderSelect>
      </HeaderBrand>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
position: relative;
width: 100vw;
min-width: 2560px;
height: 120px;
`;

const HeaderBrand = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    position: absolute;
    width: 476.58px;
    height: 34.55px;
    left: 64px;
    top: 45.88px;
`;

const HeaderLogo = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 13px;

width: 158.58px;
height: 34.55px;
`;

const HeaderSelect = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

width: 121px;
height: 33px;

`;

const Text = styled.text`
    width: 121px;
height: 33px;

font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;
/* identical to box height */

text-align: center;

color: #FFFFFF;

> a {
  color: #FFFFFF;
  text-decoration-line: none;

  :hover {
    opacity: 50%;
  }
}

`;
const Headernav = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
gap: 15px;

position: absolute;
width: 151px;
height: 48px;
right: 64px;
top: 40px;
`;

const HeadernavButton = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 25px;
gap: 10px;
width: 151px;
height: 48px;

/* lightGray_buttonSqr */
background: #F0F4F7;
border-radius: 32px;

> text {
    width: 65px;
    height: 24px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    /* SystemGray/900 */
    color: #1C1C1E;

    > a {
  color: #1C1C1E;
  text-decoration-line: none;
}
}



> img {
    width: 32px;
    height: 32px;
    color : black;
}
`;
