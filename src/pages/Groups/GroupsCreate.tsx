import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/store/reducers/hooks/reduxHooks";
import {createGroup} from "../../redux/store/reducers/courses/courses";
import {useSelector} from "react-redux";
import {
    selectUsers,
    selectUsersMentors,
    selectUsersStudents,
    selectUsersSupports
} from "../../redux/reduxSelectors/reduxSelectors";
import {getAllUsers} from "../../redux/store/reducers/users/usersSlice";
import SelectGroup from "./SelectGroup";
import Select, {GroupBase} from 'react-select';



type Option = { value: string | number | undefined; label: string  };

const GroupsCreate = () => {


    const [title, setTitle] = useState<string>('')
    const mentors = useSelector(selectUsersMentors)
    const supports = useSelector(selectUsersSupports)
    const students: Option[] = useSelector(selectUsersStudents)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const [selectedOption, setSelectedOption] = useState<GroupBase<(string | number | undefined)[]> | null>(null );

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
                <form onSubmit={(e) => {
                    e.preventDefault()
                       dispatch(createGroup(title))
                         setTitle('')
                }} className='groupsCreate__form' action="">
                    <label className='groupsCreate__label'>
                        <input value={title} onChange={(e) => {
                            setTitle(e.target.value)
                        }} min="4" className='groupsCreate__input' placeholder='Название группы' type="text"/>
                    </label>
                    <label className='groupsCreate__label'>
                        <SelectGroup options={mentors}/>
                    </label>
                    <label className='groupsCreate__label'>
                        <SelectGroup options={supports}/>
                    </label>

                    <label className='groupsCreate__label'>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={students}
                        />
                    </label>

                    <button type="submit" className='groupsCreate__create'>Создать группу</button>
                </form>
            </div>
        </section>
    );
};

export default GroupsCreate;