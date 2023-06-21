import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {MdOutlineLogout} from "react-icons/md";
import {SubmitHandler, useForm} from "react-hook-form";
import {IShippingFields} from "../../interface/app.interface";
import { GeneratePassword } from "js-generate-password";
import axios from "axios";



const CreateUsers = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset


    } = useForm<IShippingFields>()

    const onSubmit:SubmitHandler<IShippingFields> = data => {

        const password = GeneratePassword({
                length: 8,

            });
        const newUser = {...data, password, payments: [], groups: []}

        axios.post("http://localhost:8080/register",newUser)
                .then((data) => {
                    console.log(password)
                })
                .catch((err) => console.log(err))

        reset()
    }
    const [typeGroups, setTypeGroups] = useState('all')

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
                   <div className='CreateUser__btns-left'>
                       <button onClick={() => setTypeGroups("all")} className={`groups__btn${typeGroups === "all" ? ` active` : ""}`}>Информация

                       </button>
                       <button onClick={() => setTypeGroups("active")} className={`groups__btn${typeGroups === "active" ? ` active` : ""}`}>История платежей

                       </button>
                       <div className='CreateUser__btns-circle'>
                           <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="#14B855" stroke="#E5E5E5"/>
                           </svg>
                           <p className='CreateUser__btns-text'>Активен</p>
                       </div>
                   </div>

                    <div className='CreateUser__btns-right'>
                        <Link to={"/remindpassword"} className='groups__btn'>Сменить пароль</Link>
                        <button className='groupsCreate__create'>Удалить</button>
                    </div>


                </div>


                    <form className='groupsCreate__form' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input {...register('name',{
                            required: 'Name is require field',
                        })}
                               type="text"
                               placeholder='Name'
                        />
                        {errors?.name && (<div style={{color: 'red'}}>{errors.name.message}</div>)}

                            <input {...register('surname',{
                                required: 'SurnameName is require field',
                            })}
                                   type="text"
                                   placeholder='Surname'
                            />
                            {errors?.name && (<div style={{color: 'red'}}>{errors.name.message}</div>)}



                            <input {...register('email',{
                            required: 'Email is require field',
                            pattern: {
                                value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                                message: 'Please enter valid email',
                            },
                        })}
                               type="text"
                               placeholder='Email'
                        />
                        {errors?.email && (<div style={{color: 'red'}}>{errors.email.message}</div>)}

                    </div>

                    <div>

                        <input {...register('phone',{
                            required: 'Phone is require field',
                            pattern: {
                                value: /^\+996\d{9}$/,
                                message: 'Please enter valid number',
                            },
                        })}
                               type="text"
                               placeholder='Phone'
                        />
                        {errors?.phone && (<div style={{color: 'red'}}>{errors.phone.message}</div>)}

                        <input {...register('passport',{
                            required: 'Passport is require field',
                            // pattern: {
                            //     value: /1/,
                            //     message: 'Please enter valid ',
                            // },
                        })}
                               type="text"
                               placeholder='Passport'
                        />
                        {errors?.passport && (<div style={{color: 'red'}}>{errors.passport.message}</div>)}

                        <input {...register('city',{
                            required: 'City is require field',
                            // pattern: {
                            //     value: /1/,
                            //     message: 'Please enter valid ',
                            // },
                        })}
                               type="text"
                               placeholder='City'
                        />
                        {errors?.city && (<div style={{color: 'red'}}>{errors.city.message}</div>)}



                    </div>


                    <div>
                        <select defaultValue={'Offline'} {...register('status')} name="" id="">
                            <option  value="Offline">Offline</option>
                            <option value="Online">Online</option>
                        </select>

                        <select defaultValue='Student'  {...register('role')} name="" id="">
                            <option   value="Student">Student</option>
                            <option value="Mentor">Mentor</option>
                            <option value="Support">Support</option>
                            <option value="Administration">Administration</option>
                        </select>
                    </div>

                    <div>
                        <button className='groupsCreate__create'>Submit</button>
                    </div>
                </form>




            </div>
        </section>
    );
};

export default CreateUsers;

