import React from 'react'
import styled from 'styled-components'
import Meta from './Meta'
import Links from './Links'
function Footer() {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <ContentContainer>
          <Content>
            <ContentLink>
            <Links />
            </ContentLink>
            <Meta />
          </Content>
        </ContentContainer>
      </FooterContentContainer>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
min-width: 1980px;
background: #1C1C1E;
position: absolute;
bottom: 0;
height: 437px;
`

const FooterContentContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
  gap: 10px;
  width: 71.9vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 94.2%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 93.8%;
  height: 81.6%;
`;

const ContentLink = styled.div`
  width: 385px;
  height: 136px;
  display: flex;
  justify-content: space-between;`;
