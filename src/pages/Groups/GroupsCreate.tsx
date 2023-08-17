import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/store/reducers/hooks/reduxHooks";
import {useSelector} from "react-redux";
import {
    selectUsers,
    selectUsersMentors,
    selectUsersStudents,
    selectUsersSupports
} from "../../redux/reduxSelectors/reduxSelectors";
import {getAllUsers} from "../../redux/store/reducers/users/usersSlice";
import MultipleSelectChip from "./MultySelect";
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";
import {ICourseGroup} from "../../interface/app.interface";


const GroupsCreate = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm<ICourseGroup>()





    const [personName, setPersonName] = React.useState<string[]>([]);

    const onSubmit: SubmitHandler<ICourseGroup> = (data) => {
        const newGroup = {...data, personName }

        axios.post("http://localhost:8080/groups", newGroup)
            .then((data) => {
                setPersonName([])
                alert("Вы успешно добавили группу!")
            })
            .catch((err) => alert(err))

        reset()
    }

    const mentors = useSelector(selectUsersMentors)
    const supports = useSelector(selectUsersSupports)


    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])


    return (
        <section className='groupsCreate'>
            <div className="container">
                <div  className='groupsCreate__top'>
                    <span onClick={() => navigate(-1)} className='groups__create__back'>
                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 7.86603C-0.166666 7.48112 -0.166666 6.51888 0.500001 6.13397L9.5 0.937823C10.1667 0.552923 11 1.03405 11 1.80385L11 12.1962C11 12.966 10.1667 13.4471 9.5 13.0622L0.5 7.86603Z" fill="#5867DD"/>
</svg>
                    </span>
                    <span onClick={() => navigate(-1)}>Создание группы</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='groupsCreate__form' action="">
                    <label className='groupsCreate__label'>
                        <input {...register("name")} className='groupsCreate__input' placeholder='Название группы' type="text"/>
                    </label>
                    <label className='groupsCreate__label'>
                        <select {...register("mentor")}>
                            {
                                mentors.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </label>
                    <label className='groupsCreate__label'>
                        <select {...register("support")}>
                            {
                                supports.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </label>

                    <label className='groupsCreate__label'>
                        <MultipleSelectChip personName={personName} setPersonName={setPersonName}/>
                    </label>

                    <button type="submit" className='groupsCreate__create'>Создать группу</button>
                </form>
            </div>
        </section>
    );
};

export default GroupsCreate;