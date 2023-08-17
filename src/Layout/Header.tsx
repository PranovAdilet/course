import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {MdOutlineLogout} from 'react-icons/md'



const Header = () => {

    const navigate = useNavigate()

    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className='header__left'>
                        <Link className='header__link' to='/groups'>Группы</Link>
                        <Link className='header__link' to='/user'>Пользователи</Link>
                    </div>
                    <div className='header__right'>
                        <Link className='header__acc' to='/groups'>123</Link>
                        <span className='header__logout' onClick={() => {
                            navigate('/login')
                        }}>
                            <MdOutlineLogout/>
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;