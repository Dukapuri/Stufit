import React from 'react';
import Router from "next/router";

const moveRoute = () => {
    Router.push("/Screen")
}

function MainOne() {
    
    return (
        <div className="MainOneWrapper">
            <div className="MainContents">
                <p>온라인 학습을 통한 사고력<br/>StuFit에서 친숙하고 재미있게</p>
                <img src="/img/bg1.png"/>
            </div>
            <div className="NextButton">
                <button onClick={moveRoute}>Start →</button>
            </div>
            <style jsx>{`
                .MainOneWrapper {
                    width : 100vw;
                    height : 95vh;
                    margin : 0;
                    padding : 0;
                    display : flex;
                    align-items : center;
                    justify-content : center;
                }

                .MainContents {
                    width : 70%;
                    height : 70%;
                    display : flex;
                    flex-direction : column;
                    justify-content : center;
                    align-items : center;
                    padding : 0;
                    margin : 0;
                }

                .MainContents p {
                    padding : 30px 0 0 0;
                    margin : 30px 0 0 0;
                    font-size : 30px;
                    font-weight : bold;
                    font-family : 'Poppins';
                    text-align : center;
                }

                .MainContents img {
                    width  : 80%;
                    height : 100%;
                }

                .NextButton {
                    position: fixed;
                    bottom: 100px;
                    right: 150px;
                    margin : 0;
                    padding : 0;
                }

                .NextButton button {
                    background-color: #00ff66;
                    border: 1px solid transparent;
                    border-radius : 15px;
                    width : 120px;
                    height : 40px;
                    cursor : pointer;
                    font-weight : 600;
                    font-size : 15px;
                    box-shadow : 1px 3px 5px #d3d3d3;
                }

                .NextButton button:hover {
                    animation : jellyAnimation 0.5s;
                }

                @keyframes jellyAnimation {
                    0% {
                      transform: scale(1);
                    }
                    25% {
                      transform: scale(1.2);
                    }
                    50% {
                      transform: scale(0.8);
                    }
                    75% {
                      transform: scale(1.1);
                    }
                    100% {
                      transform: scale(1);
                    }
                }
            `}

            </style>
        </div>
    );
}

export default MainOne;