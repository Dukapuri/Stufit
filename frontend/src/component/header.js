import '../css/header.css';

function Header(params) {
    
    return (
        <header className="top-header">
            <Logo></Logo>
            <ul className="header-menu">
                <li>About</li>
                <li>MyPage</li>
                <li>Learn</li>
                <li>Q&A</li>
            </ul>
        </header>
    )
}

function Logo(params) {
    return (
        <div className="logo-section">
            <img className="header-img" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo-image"/>
            <h1 className="header-h3">StuFit</h1>
        </div>
    )
}
export default Header;