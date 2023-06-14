import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {MdOutlineLogout} from "react-icons/md";


const CreateUsers = () => {

    const navigate = useNavigate()

    return (
        <section className='CreateUser'>

            <div className="container">
                <header className='header'>

                        <nav className='header__nav'>
                            <div  className='groupsCreate__top'>
                    <span onClick={() => navigate(-1)} className='groups__create__back'>
                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 7.86603C-0.166666 7.48112 -0.166666 6.51888 0.500001 6.13397L9.5 0.937823C10.1667 0.552923 11 1.03405 11 1.80385L11 12.1962C11 12.966 10.1667 13.4471 9.5 13.0622L0.5 7.86603Z" fill="#5867DD"/>
</svg>
                    </span>
                                <span onClick={() => navigate(-1)}>Добавление пользователя/Редактирование</span>
                            </div>
                            <div className='header__right'>
                                <Link className='header__acc' to='/groups'>maxbirimkulov@mail.ru</Link>
                                <span className='header__logout' onClick={() => {
                                    navigate('/login')
                                }}>
                            <MdOutlineLogout/>
                        </span>
                            </div>
                        </nav>

                </header>

                <div className="CreateUser__btns">
                    <button className='CreateUser__btns-btn' type='button'>Информация</button>
                    <button className='CreateUser__btns-btn' type='button'>История платежей</button>
                    <div className='CreateUser__btns-circle'>
                        <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="#14B855" stroke="#E5E5E5"/>
                        </svg>
                        <p className='CreateUser__btns-text'>Активен</p>
                    </div>


                </div>
                <form className='groupsCreate__form' action="">
                    <label className='groupsCreate__label'>
                        <input className='groupsCreate__input' placeholder='Название группы' type="text"/>
                    </label>

                    <label className='groupsCreate__label'>
                        <input className='groupsCreate__select ' placeholder='Добавить участников' type="text"/>
                    </label>

                    <button className='groupsCreate__create'>Создать группу</button>
                </form>
            </div>
        </section>
    );
};

export default CreateUsers;