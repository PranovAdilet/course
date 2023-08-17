import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    selectCourse,
    selectGroup,
    selectUser,
    selectUsers,
    selectUsersStudents
} from "../../redux/reduxSelectors/reduxSelectors";

import {useAppDispatch} from "../../redux/store/reducers/hooks/reduxHooks";
import {useParams, useNavigate} from "react-router-dom";
import {getGroup, IDeleteUser} from "../../redux/store/reducers/group/group";
import {ICourse, IGroup} from "../../interface/app.interface";
import {getAllUsers} from "../../redux/store/reducers/users/usersSlice";
import {log} from "util";
import {GrEdit} from "react-icons/gr";
import {MdOutlineCancelPresentation} from "react-icons/md";
import MultipleSelectChip from "../Groups/MultySelect";
import {deleteUser} from "../../redux/store/reducers/group/group";


const Group = () => {

    const {group} = useSelector(selectGroup)

    const navigate = useNavigate()


    const dispatch = useAppDispatch()
    const params = useParams()

    const {data} = useSelector(selectUsers)

    useEffect(() => {
        dispatch(getGroup(params.id))
    }, [])

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])


    const [groupUsers, setGroupUsers] = useState<string[]>([])






    return (
        <section className='group'>
            <div className="container">
                <div className="group__content">
                    <div className="group__left">
                        <h3> Участники</h3>
                    </div>
                    <div className="group-center">
                        <h3> Видео-уроки</h3>
                    </div>
                    <div className="group__right">
                        <h3> Домашнее задание</h3>
                    </div>
                </div>
                <div>

                    <div className='groups__top'>
                        <p className='groups__top-text'>Список участников</p>

                    </div>
                    <div className='groups__content'>
                        <div className='users__filter'>
                            <ul className='users__filter-ul' >
                                <li className='users__filter-li'>ФИО</li>
                                <li className='users__filter-li'>Группа</li>
                                <li className='users__filter-li'>Телефон</li>
                                <li className='users__filter-li'>Статус</li>
                            </ul>
                        </div>
                        {
                            group &&  data.map((item) => (
                                group.personName.map((el) => (
                                    item.id === el &&  <div key={item.id} className="groups__item">
                                        <div className='groups__item-left'>
                            <span className='groups__item-edit'>
                                <GrEdit/>
                            </span>
                                            <div className='users__info'>
                                                <h2 onClick={() => navigate(`/user/${item.id}`)} className='groups__item-title2'>{item.name}</h2>
                                                <h2 className='groups__item-title2'>{group.name}</h2>
                                                <h2  className='groups__item-title2'>{item.phone}</h2>
                                                <h2 className='groups__item-title2'>Активен</h2>
                                            </div>
                                        </div>
                                        <span onClick={async () =>  {
                                            const deleteUserGroup: IDeleteUser = {
                                                group: group,
                                                id: el
                                            }
                                            await dispatch(deleteUser(deleteUserGroup))
                                            await dispatch(getAllUsers())


                                        }}   className='groups__item-delete'>
                            <MdOutlineCancelPresentation/>
                        </span>
                                    </div>
                                ))
                            ))
                        }
                        <MultipleSelectChip personName={groupUsers} setPersonName={setGroupUsers}/>
                        <div className='groups__bottom'>
                    <span className='groups__bottom-yet'>
                        Показать еще
                    </span>
                            <div className='groups__bottom-right'>
                        <span className='groups__prev'>
                            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.499999 7.86602C-0.166668 7.48112 -0.166667 6.51888 0.5 6.13397L9.5 0.937821C10.1667 0.552921 11 1.03405 11 1.80385L11 12.1962C11 12.966 10.1667 13.4471 9.5 13.0622L0.499999 7.86602Z" fill="#5867DD"/>
</svg>

                        </span>
                                <span className='groups__bottom-text'>Предыдущие</span>
                                <span className='groups__next'>
                            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 6.13397C11.1667 6.51888 11.1667 7.48112 10.5 7.86603L1.5 13.0622C0.833332 13.4471 -6.10471e-07 12.966 -5.76822e-07 12.1962L-1.2256e-07 1.80385C-8.8911e-08 1.03405 0.833333 0.552922 1.5 0.937822L10.5 6.13397Z" fill="#5867DD"/>
</svg>

                        </span>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Group;