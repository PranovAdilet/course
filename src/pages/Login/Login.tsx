import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {ILoginFields} from "../../interface/app.interface";
import axios from "axios";
import {log} from "util";
import {useAppDispatch} from "../../redux/store/reducers/hooks/reduxHooks";
import {loginUser} from "../../redux/store/reducers/user/userSlice";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset


    } = useForm<ILoginFields>({mode: "onBlur"})
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const onSubmit:SubmitHandler<ILoginFields> = (data) => {
        dispatch(loginUser(data)).then(() => navigate("/"))

    }
    return (
        <section className='login'>
            <form onSubmit={handleSubmit(onSubmit)} action=""  className='login__form'>
                <h2 className='login__title'>Вход в аккаунт</h2>
                <label  className='login__label'>

                    <span className='login__label-icon'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3571 19.4455C14.8086 20.4299 12.9709 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C15.4493 1 19.2199 3.13652 20.5177 7.15385C20.8308 8.12317 21 8.69231 21 10.2308C21 10.2308 21 12.5385 20.2308 13.6923C19.7179 14.4615 19.1996 14.9027 18.6923 15.2308C18.1799 15.5622 17.9254 15.5418 17.1538 15.6154C16.4051 15.6868 15.2308 15.2308 15.2308 15.2308V6" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8462 7.22989C13.1675 5.51501 10.4818 5.08175 8.30772 6.33699C5.73229 7.82391 4.84989 11.1171 6.33681 13.6925C7.82373 16.2679 11.1169 17.1503 13.6923 15.6634C14.126 15.413 14.5117 15.1114 14.8462 14.7706" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </span>

                    <input {...register('email',{
                        required: 'Email is require field',
                        pattern: {
                            value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                            message: 'Please enter valid email',
                        },
                    })} placeholder='Введите ваш Email' className='login__field' type="email"/>
                    {errors?.email && (<div style={{color: 'red'}}>{errors.email.message}</div>)}

                </label>
                <label  className='login__label'>

                    <span className='login__label-icon'>
                        <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8.5" y="14" width="2" height="5" rx="1" fill="#222222"/>
                        <rect x="1" y="10.167" width="17" height="12.8333" rx="3" stroke="#222222" strokeWidth="2"/>
                        <path d="M14 10H15V9V6.5C15 3.46243 12.5376 1 9.5 1C6.46243 1 4 3.46243 4 6.5V9V10H5H14Z" stroke="#222222" strokeWidth="2"/>
                    </svg>

                    </span>

                    <input {...register("password")} placeholder='Введите ваш пароль' className='login__field' type="password"/>
                </label>
                <div className='login__bot'>
                    <Link to={"/remindpassword"} className='login__forgot'>Забыли пароль?</Link>
                    <button className='login__btn' type={"submit"}>Войти</button>
                </div>

            </form>
        </section>
    );
};

export default Login;