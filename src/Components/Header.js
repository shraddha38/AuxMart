import { Link } from 'react-router-dom';
import classes from './Header.module.css'
const Header = () => {
    return (
        <header className={classes.bar}>
            <div className={classes.logo}>
                Zaika
            </div>
            <ul>
                <li><Link to="/" style={{ textDecoration: 'none', color: 'white',padding:'1.5rem' }}>Home</Link></li>
                <li><Link to="/categories" style={{ textDecoration: 'none', color: 'white',padding:'1.5rem' }}>Categories</Link></li>
              
            </ul>
        </header>
    )
}

export default Header;
