import React from 'react';
import styled from 'styled-components';
import Router from "next/router";


const moveRoute = () => {
    Router.push("/Nextpage")
}

const MainOneWrapper = styled.div`
    width : 100vw;
    height : 95vh;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
`;

const MainContents = styled.div`
    width : 70%;
    height : 70%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    padding : 0;
    margin : 0;

    p {
        padding : 30px 0 0 0;
        margin : 30px 0 0 0;
        font-size : 30px;
        font-weight : bold;
        font-family : 'Poppins';
        text-align : center;
    }
    img {
        width  : 80%;
        height : 100%;
    }
`;

const NextButton = styled.div`
    position: fixed;
    bottom: 100px;
    right: 150px;
    margin : 0;
    padding : 0;
    button {
        background-color: #00ff66;
        border: 1px solid transparent;
        border-radius : 15px;
        width : 120px;
        height : 40px;
        cursor : pointer;
        font-weight : 600;
        font-size : 15px;
    }
`;

function MainOne() {
    return (
        <MainOneWrapper>
            <MainContents>
                <p>온라인 학습을 통한 사고력<br/>StuFit에서 친숙하고 재미있게</p>
                <img src="/img/bg1.png"/>
            </MainContents>
            <NextButton>
                <button onClick={moveRoute}>Start →</button>
            </NextButton>
        </MainOneWrapper>
    );
}

export default MainOne;