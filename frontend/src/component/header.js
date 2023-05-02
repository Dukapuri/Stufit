
function Header(params) {
    
    return (
    <header className="top-header">
        <img className="header-img" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo-image"/>
    </header>
    )
}

export default Header;