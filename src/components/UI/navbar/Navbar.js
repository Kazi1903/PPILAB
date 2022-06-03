import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AppContext';
import MyButton from '../button/MyButton';
import styles from '../navbar/Navbar.module.css';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigator = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigator('/');
    }

    return (
        <div className={styles.navHeader}>
            <Link style={{color: 'white'}} to="/news">Новости</Link>
            <Link style={{color: 'white'}} to="/bookmarks">Заметки</Link>
            <Link style={{color: 'white'}} to="/about">О сайте</Link>
            
           
            
            <MyButton style={{color: 'white'}} onClick={() => logout()}>Выйти</MyButton>
            </div>
            
        
    );
};

export default Navbar;