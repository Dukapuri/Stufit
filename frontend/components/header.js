
function Header(params) {

  return (
    <header className="top-header">
      <div className="logo-section">
        <img className="header-img" src={`/img/logo.png`} alt="logo-image" />
        <h1 className="header-h3">StuFit</h1>
      </div>
      <ul className="header-menu">
        <li>About</li>
        <li>MyPage</li>
        <li>Learn</li>
        <li>Q&A</li>
      </ul>
      <style jsx>{`
            .top-header {
               z-index: 999; 
               height:70px;
               width: 100%;
               padding: 20px 0 0 40px;
               display: flex;
               justify-content: space-evenly;
               overflow-x : hidden;
             }
               position: fixed;
              }
             
             .header-img {
               width: 50px;
             }
           
             .header-h3 {
               margin: 0;
               margin-left: 15px;
               display: inline-block;
               color: #00ff66;
             }
           
             .logo-section * {
                   vertical-align: middle;
             }
           
             .header-menu{
               margin: 0;
               padding: 0;
               display: flex;
               list-style-type: none;
             }
           
             .header-menu li {
               margin-right: 20px;
               display: inline-block;
               color: #00ff66;
               text-align: center;
               padding: 14px 16px;
               text-decoration: none;
               font-size: 18px;
               line-height: 30px;
               font-weight: 500;
             }
            `}
      </style>
    </header>
  )
}

export default Header;