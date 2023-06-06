import React from 'react';

function MainTwo() {
    return (
        <div className="MainTwoWrapper">
            <div className="MainTwoContents">
                <img src = "/img/main2.png"/>
                <p>여러요소 부담되는 학습환경<br/>도전의지 감소되는 나의자세<br/>이젠 StuFit에서 <span>STOP</span></p>
            </div>
            <style jsx>{`
                .MainTwoWrapper {
                    width : 100vw;
                    height : 90vh;
                    padding : 0;
                    margin : 0;
                    display : flex;
                    justify-content : center;
                    align-items: center;
                }

                .MainTwoContents {
                    width : 80%;
                    height : 80%;
                    margin : 0;
                    padding : 0;
                    display : flex;
                    justify-content : space-evenly;
                    align-items : center;
                }

                .MainTwoContents img {
                    width : 30%;
                }

                .MainTwoContents p {
                    width : 450px;
                    font-size : 30px;
                    text-align : center;
                    font-weight : bold;
                }

                .MainTwoContents span {
                    color : red;
                }

            `}

            </style>
        </div>
    );
}

export default MainTwo;