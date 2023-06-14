import React, { useState, ChangeEvent, FormEvent } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const RemindPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(email)
        navigate("/fulfilledremind")
    };
    return (
        <section className="login">
            <form action="" className="login__form" onSubmit={handleSubmit}>
                <Link className="login__link" to="/login">
                    <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.499999 7.86602C-0.166668 7.48112 -0.166667 6.51888 0.5 6.13397L9.5 0.937821C10.1667 0.552921 11 1.03405 11 1.80385L11 12.1962C11 12.966 10.1667 13.4471 9.5 13.0622L0.499999 7.86602Z"
                            fill="#5867DD"
                        />
                    </svg>
                    Вернуться назад
                </Link>
                <h2 className="login__title">Напомнить пароль</h2>
                <label className="login__label">
          <span className="login__label-icon">
            <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M16.3571 19.4455C14.8086 20.4299 12.9709 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C15.4493 1 19.2199 3.13652 20.5177 7.15385C20.8308 8.12317 21 8.69231 21 10.2308C21 10.2308 21 12.5385 20.2308 13.6923C19.7179 14.4615 19.1996 14.9027 18.6923 15.2308C18.1799 15.5622 17.9254 15.5418 17.1538 15.6154C16.4051 15.6868 15.2308 15.2308 15.2308 15.2308V6"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M14.8462 7.22989C13.1675 5.51501 10.4818 5.08175 8.30772 6.33699C5.73229 7.82391 4.84989 11.1171 6.33681 13.6925C7.82373 16.2679 11.1169 17.1503 13.6923 15.6634C14.126 15.413 14.5117 15.1114 14.8462 14.7706"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
            </svg>
          </span>
                    <input
                        placeholder="Введите ваш Email"
                        onChange={handleChange}
                        value={email}
                        className="login__field"
                        type="email"
                    />
                </label>
                <div className="login__bot" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" className="login__btn">
                        Отправить на почту
                    </button>
                </div>
            </form>
        </section>
    );
};

export default RemindPassword;
