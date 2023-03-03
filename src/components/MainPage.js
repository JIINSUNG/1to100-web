import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main"
import Introduce from "./Introduce";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

// import Introduce from "./Introduce"
function MainPage() {
  const Mains = useSelector((state) => {
    return state.Popup.value;
  });
  const dispatch = useDispatch();
  return (
    <>
    <MainPageContainer>
        <Header/>
        {Mains ? <Main /> : <Introduce />}
    </MainPageContainer>
    </>
  );
}

export default MainPage;

const MainPageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
  background: linear-gradient(180deg, #0678E2 0%, #0167FF 100%);
`;

