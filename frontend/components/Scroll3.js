import Header from "./header";

function Scroll3(params) {
    return (
        <>
        <div className="container">
            <div className="content">
                <p className="p1">비대면 환경으로<br/>
                    실제 옆에 멘토가 있는 느낌으로<br/>
                    학습 서비스 경험 해보셨나요? <br/>
                </p>
                <p className="p2">
                    <span>Real-time Convergence Service</span><br/>
                    음성과 그림판 서비스로<br/>
                    실시간 Interaction하게 제공<br/>
                </p>
                <img className="ex-img" src={`/img/ex.png`} alt="ex-image" />
            </div>
        </div>
            <style jsx>{`
              .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                width : 100vw;
                margin : 0;
                padding : 0;
              }
              
              .content {
                display: flex;
                text-align: left;
              }
              
              .p1 {
                margin-bottom: auto;
                font-weight:800;
                font-size:25px;
              }
              
              .p2 {
                margin:50px;
                margin-top: auto;
                font-size:20px;
              }
              span {
                font-weight:550;
              }

              .content img {
                max-width: 100%;
                box-shadow : 2px 2px 6px #d7d7d7;
              }
                `}</style>
        </>
    )
}

export default Scroll3;