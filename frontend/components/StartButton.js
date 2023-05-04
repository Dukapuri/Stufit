import Router from "next/router";

const moveRoute = () => {
    Router.push("/Nextpage")
}
function StartButton() {
    return (
        <div className="start-button">
            <button onClick={moveRoute}>Start →</button>
            <style jsx>{`
            .start-button {
                position: relative;
                width: 100%;
                height: 75vh;
            }
            button {
                background-color: #00ff66;
                border: 1px solid transparent;
                border-radius : 15px;
                width : 100px;
                height : 30px;
                cursor : pointer;
                font-weight : 600;
                font-size : 12px;
                position: absolute;
                bottom: 20px;
                right: 100px;
            }
            `}</style>
        </div>
    )
}

export default StartButton;