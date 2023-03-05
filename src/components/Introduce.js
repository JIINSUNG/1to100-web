import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import { useDispatch, useSelector } from "react-redux";
import StateSlice from "../features/State/StateSlice";

function Introduce() {
  const Mains = useSelector((state) => {
    return state.Popup.value;
  });
  const dispatch = useDispatch();
  return (
    <IntroduceContainer>
    <Frame86>
      <IntroduceFrame>
        <img id="slogun" src={require("../assets/slogun.png")} alt=""/>
        <img id="iphones" src={require("../assets/iphones.png")} alt=""/>
      </IntroduceFrame>
    </Frame86>
    <Frame93>
        <Frame93div>
        <img src={require("../assets/Frame 93.png")} alt=""/>
        </Frame93div>
    </Frame93>
    <Frame94>
    <img src={require("../assets/Frame 94.png")} alt=""/>
    </Frame94>
    <Frame95>
        <Frame95div>
        <img src={require("../assets/Frame 95.png")} alt=""/>
        </Frame95div>
    </Frame95>
    <Frame23>
    <img src={require("../assets/image 23.png")} alt=""/>
    </Frame23>
    <Frame84>
        <Frame84div>
        <img src={require("../assets/Frame 84.png")} alt=""/>
        </Frame84div>
    </Frame84>
    <Frame89>
        <Frame89div>
        <img src={require("../assets/Group 88.png")} alt="" onClick={()=> {Mains ? <></> : dispatch(StateSlice.actions.Popup())}} />
        </Frame89div>
    </Frame89>
    <Footer />
    </IntroduceContainer>

  )
}

export default Introduce

const IntroduceContainer = styled.div`
position : absolute;
width: 100vw;
min-width: 2560px;
height: 8172px;
top : 120px;
bottom : 120px;
`;


const Frame86 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

position: absolute;
width: 100vw;
min-width: 2560px;
height: 1554px;
background: linear-gradient(180deg, #0678E2 0%, #0167FF 100%);
`;

const IntroduceFrame = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 90px;

width: 522px;
height: 1113.84px;

> img#slogun {
    width: 522px;
    height: 306px;
}

> img#iphones {
    width: 522px;
    height: 717.84px;
}
`;

const Frame93 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

position: absolute;
width: 100%;
min-width: 2560px;
height: 1404px;
top: 1500px;
`;

const Frame93div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 73px;
background-color: red;

width: 998px;
height: 980px;
`;

const Frame94 = styled.div`
position: absolute;
width: 100vw;
min-width: 2560px;
height: 1126px;
left: 0px;
top: 2898px;
background: #196DEC;
`;

const Frame95 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;

position: absolute;
width: 100vw;
min-width: 2560px;
height: 1224px;
left: 0px;
top: 4024px;
background-color: white;
`;

const Frame95div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 73px;

width: 998px;
height: 980px;
`;

const Frame23 = styled.div`
position: absolute;
width: 100vw;
min-width: 2560px;
height: 918px;
left: 0px;
top: 5248px;
`;

const Frame84 = styled.div`
position: absolute;
width: 100vw;
min-width: 2560px;
height: 670px;
left: 0px;
top: 6166px;
`;

const Frame84div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 120px;
`;

const Frame89 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;

position: absolute;
width: 100vw;
min-width: 2560px;
height: 899px;
top: 6836px;
background: linear-gradient(180deg, #0678E2 0%, #0167FF 100%);
`;

const Frame89div = styled.div`
width: 701px;
height: 660.84px;
`;
