import React, { useState, ChangeEvent, FormEvent } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const ResetPassword = () => {
    const [password,setPassword ] = useState('');
    const [resPassword,setResPassword ] = useState('');
    const navigate = useNavigate()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setResPassword(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(password)
        navigate("/")
    };

    return (
        <section className="login">
            <form action="" className="login__form" onSubmit={handleSubmit}>
                <h2 className="login__title">Восстановления пароля</h2>
                <label className="login__label">
          <span className="login__label-icon">
           <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8.5" y="14" width="2" height="5" rx="1" fill="#222222"/>
<rect x="1" y="10.166" width="17" height="12.8333" rx="3" stroke="#222222" strokeWidth="2"/>
<path d="M14 10H15V9V6.5C15 3.46243 12.5376 1 9.5 1C6.46243 1 4 3.46243 4 6.5V9V10H5H14Z" stroke="#222222" strokeWidth="2"/>
</svg>

          </span>
                    <input
                        placeholder="Введите новый пароль"
                        onChange={handleChange}
                        value={password}
                        className="login__field"
                        type="password"
                    />

                </label>
                <label className="login__label">
          <span className="login__label-icon">
            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8.5" y="14" width="2" height="5" rx="1" fill="#222222"/>
<rect x="1" y="10.166" width="17" height="12.8333" rx="3" stroke="#222222" strokeWidth="2"/>
<path d="M14 10H15V9V6.5C15 3.46243 12.5376 1 9.5 1C6.46243 1 4 3.46243 4 6.5V9V10H5H14Z" stroke="#222222" strokeWidth="2"/>
</svg>

          </span>
                    <input
                        placeholder="Подтвердите пароль"
                        onChange={handleChangePass}
                        value={resPassword}
                        className="login__field"
                        type="password"
                    />

                </label>
                {
                    password === resPassword && password.length >= 8 ?
                        <div className="login__bot" style={{ display: 'flex', justifyContent: 'center' }}>
                            <button type="submit" className="login__btn-res">
                                 Сменить пароль
                            </button>
                        </div>
                        :
                        <div className="login__bot">
                            <button className="res__btn" type={"button"}>
                                ...
                            </button>
                        </div>

                }


            </form>
        </section>
    );
};

export default ResetPassword;
