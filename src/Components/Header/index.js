import './styles.css';
import Logo from '../../assets/img/logo192.png';
const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <a href="https://reactjs.org/" className='logo-header'>
                <img src={Logo} alt="logo"/>
                <h1>React</h1>
                </a>
                <nav className='nav-header'>
                    <a href="https://reactjs.org/" className='nav-header-link'>Docs
                    <span className='link-border'></span></a>
                    <a href="https://reactjs.org/" className='nav-header-link'>Tutorial
                    <span className='link-border'></span></a>
                    <a href="https://reactjs.org/" className='nav-header-link'>Blog
                    <span className='link-border'></span></a>
                    <a href="https://reactjs.org/" className='nav-header-link'>Community
                    <span className='link-border'></span></a>
                </nav>
                <form action="">
                    <input type="search" placeholder='Search'/>
                </form>
                <div className="links-header">
                    <a href="https://reactjs.org/">v18.1.0</a>
                    <a href="https://reactjs.org/">Languages</a>
                    <a href="https://reactjs.org/">Github</a>
                </div>
            </div>
        </header>
    )
}

export default Header

