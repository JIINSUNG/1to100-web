import React from "react";
import styled from "styled-components";

function Links() {
  return (
    <MobileWrapper>
      <Link>
        <a
          href="#"
        >
          제휴문의
        </a>
        <a
          href="#"
        >
          광고문의
        </a>
        <a href="#">이용약관</a>
        <a className="pc" href="#">
          개인정보 처리방침
        </a>
      </Link>
      <Link className="Mobile">
        <a href="#">개인정보 처리방침</a>
      </Link>
    </MobileWrapper>
  )
}

export default Links

const MobileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Link = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  color: white;
  gap: 24px;
  > a {
    :active {
      opacity: 0.5;
    }
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */
    display: flex;
    align-items: center;
    text-align: center;
    /* border-bottom: 1px solid #FFFFFF; */
    color: white;
  }
  &.Mobile {
    display: none;
  }

`;