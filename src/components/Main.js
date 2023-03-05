import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';

function Main() {
    

  return (
    <>
    <MainContainer>
    <MainContainerdiv>
      <MainFrame>
        <LeftFrame>
            <Popup>
            <img src={require("../assets/HAND.png")} alt="" />
            </Popup>
            <Appstore>
            <img src={require("../assets/appstore.png")} onClick={()=>alert("서비스 준비중입니다")} alt="" />
            <img src={require("../assets/playstore.png")} onClick={()=>alert("서비스 준비중입니다")} alt="" />
            </Appstore>
        </LeftFrame>
        <RightFrame>
        <img src={require("../assets/photo.png")} alt="" />
        </RightFrame>
      </MainFrame>
    </MainContainerdiv>
    <Footer/>
    </MainContainer>
</>
  )
}

export default Main

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* padding: 0px 0px 285px; */
gap: 10px;

position: absolute;
width: 100vw;
min-width: 2560px;
height: 1600px;
left: 0px;
top: 120px;
`;

const MainContainerdiv = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

position: absolute;
width: 100%;
height: 717.84px;
left: 0px;
top: 409px;
`;

const Appstore = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 398px;
height: 70px;
`;

const MainFrame = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 90px;
margin-bottom: 120px;

width: 1010px;
height: 717.84px;
`;

const LeftFrame = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 47px;

width: 398px;
height: 474.84px;
`;
const RightFrame = styled.div`
width: 522px;
height: 717.84px;
`;

const Popup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 30px;

width: 342.1px;
height: 357.84px;
`;