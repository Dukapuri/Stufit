import React from 'react';
import styled from 'styled-components';

const MainTwoWrapper = styled.div`
    width : 100vw;
    height : 90vh;
    padding : 0;
    margin : 0;
    display : flex;
    justify-content : center;
    align-items: center;
`;

const MainTwoContents = styled.div`
    width : 80%;
    height : 80%;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : space-evenly;
    align-items : center;

    img {
        width : 30%;
    }

    p { 
        width : 450px;
        font-size : 30px;
        text-align : center;
        font-weight : bold;
    }
    span {
        color : red;
    }
`;
function MainTwo() {
    return (
        <MainTwoWrapper>
            <MainTwoContents>
                <img src = "/img/main2.png"/>
                <p>여러요소 부담되는 학습환경<br/>도전의지 감소되는 나의자세<br/>이젠 StuFit에서 <span>STOP</span></p>
            </MainTwoContents>
        </MainTwoWrapper>
    );
}

export default MainTwo;