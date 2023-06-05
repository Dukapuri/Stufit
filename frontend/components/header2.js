import React from 'react';
import Router from "next/router";

function Header(params) {

  const moveRoute = () => {
    Router.push("/")
  }

    return (
      <header className="main-header">
        <ul className="header-menu">
          <li><p className="toHome"alt="logo-image" onClick={moveRoute}>StuFit</p></li>
          <li><img src={`/img/item4.png`} alt="logo-image" /></li>
          <li><img src={`/img/item5.png`} alt="logo-image" /></li>
          <li><img src={`/img/item6.png`} alt="logo-image" /></li>
        </ul>
        <style jsx>{`
              .main-header {
                 position : fixed;
                 z-index: 999; 
                 width : 20%;
                 height : 70px;
                 margin : 0;
                 padding : 0;
                 display : flex;
                 justify-content : flex-start;
                 align-items : center;
                 background : transparent;
                 border : 1px solid #d3d3d3;
                 border-radius : 10px;
                 box-shadow : 2px 2px 10px #d7d7d7;
               }

               ul {
                list-style-type : none;
                display : flex;
                align-items : center;
               }

               ul li {
                margin : 0;
                margin-right : 20px;
                padding : 0;
               }

               ul li p {
                color : #00FF66;
                font-size : 30px;
                font-weight : bold;
                cursor : pointer;
               }

               ul li img {
                width : 35px;
                cursor : pointer;
               }

               .toHome {
                margin-right : 35px;
               }
               
               
              `}
        </style>
      </header>
    )
  }
  
  export default Header;