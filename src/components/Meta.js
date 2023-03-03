import React from 'react'
import styled from 'styled-components';
function Meta() {
  return (
    <>
    <ContentLogo>
        <img src={require("../assets/1to100.png")} alt="" />
      </ContentLogo>
      <ContentInformation>
        <Information>
          <InformationTopic>
            <span>대표번호</span>
          </InformationTopic>
          <InformationTopicDetail>
            <span>010-8646-8516</span>
          </InformationTopicDetail>
        </Information>
        <Information>
          <InformationTopic>
            <span>주소</span>
          </InformationTopic>
          <InformationTopicDetail>
            <span>
              서울특별시 마포구 희우정로 10길 28 3-20호 플렉스홈(망원동)
            </span>
          </InformationTopicDetail>
        </Information>
      </ContentInformation>
      <ContentSns>
        <img src={require("../assets/Facebook.png")} alt="" />
        <img src={require("../assets/Instagram.png")} alt="" />
        <img src={require("../assets/Github.png")} alt="" />
      </ContentSns>
    </>
  )
}

export default Meta

const ContentLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  width: 385px;
  height: 91.11px;
 >img {
    width: 111.22px;
height: 35.95px;
 }
`;

const ContentInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;
  width: 451px;
  height: 69px;
`;

const ContentSns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
  width: 385px;
  height: 30px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: 19px;
`;

const InformationTopic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  /* gap: 10px; */
  width: 80px;
  height: 19px;
  > span {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */
    display: flex;
    align-items: center;
    text-align: center;
    /* white */
    color: #ffffff;
  }
`;
const InformationTopicDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  height: 19px;
  > span {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */
    display: flex;
    align-items: center;
    text-align: start;
    /* white */
    color: #ffffff;
  }

`;