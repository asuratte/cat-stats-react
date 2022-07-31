import logo from '../images/cat-stats-icon.svg';

const Header = () => {
    return (
        <header className="py-4">
            <div className="container text-center">
                <div className="logo-container d-flex justify-content-center align-items-baseline">
                    <img src={logo} alt="CatStats Logo" className="cat-stats-icon" />
                    <h1>CatStats</h1>
                </div>
                <p>Learn more about your favorite four-legged friends</p>
            </div>
        </header>
    )
}

export default Header