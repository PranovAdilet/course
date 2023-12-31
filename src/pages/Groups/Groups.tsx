import React, {useEffect, useState} from 'react';
import {GrEdit} from 'react-icons/gr'
import {MdOutlineCancelPresentation} from 'react-icons/md'
import {useNavigate} from "react-router-dom";
import { useSelector} from "react-redux";
import {selectCourse} from "../../redux/reduxSelectors/reduxSelectors";
import {getAllCourse, limitCourse, filterArchive, filterActive, filterAll, limitCourseHide} from "../../redux/store/reducers/courses/courses";
import {useAppDispatch} from "../../redux/store/reducers/hooks/reduxHooks";
import axios from "axios";


const Groups = () => {

    const [myGroups, setMyGroups] = useState(false)

    const [groupLenght, setGroupLenght] = useState([])





    const navigate = useNavigate()

   useEffect(() => {
       axios(` http://localhost:8080/groups`)
           .then(response => setGroupLenght(response.data))
           .catch(err => console.log(err))


   }, [])
    const {data, limit, filter} = useSelector(selectCourse)



    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAllCourse(limit))
    },[limit])

    const getMyGroupsHandler = () => {
        data.map((item) => {

        })
    }




    return (
        <section className='groups'>
            <div className="container">
                <div className='groups__top'>
                    <p className='groups__top-text'>Показывать только мои группы</p>
                    <input onChange={() => {
                        setMyGroups(prevState => prevState = !prevState)
                    }} className='groups__top-check' type="checkbox"/>
                </div>

                <div className='groups__row'>
                    <div className="groups__menu">
                        <button onClick={() => dispatch(filterAll("all"))} className={`groups__btn${filter === "all" ? ` active` : ""}`}>Все
                            <span className='groups__btn-count'>{groupLenght.length}</span>
                        </button>
                        <button onClick={() => dispatch(filterActive("active"))} className={`groups__btn${filter === "active" ? ` active` : ""}`}>Активные
                            <span className='groups__btn-count'>5</span>
                        </button>
                        <button onClick={() => dispatch(filterArchive("archive"))} className={`groups__btn${filter === "archive" ? ` active` : ""}`}>Архив
                            <span className='groups__btn-count'>3</span>
                        </button>
                    </div>
                    <button onClick={() => navigate('/groups/create') } type='button' className="groups__create">Добавить группу</button>
                </div>

                <div className='groups__content'>
                    {
                        data.map((item) => (
                           <React.Fragment key={item.id}>
                               <div  className="groups__item">
                                   <div className='groups__item-left'>
                            <span className='groups__item-edit'>
                                <GrEdit/>
                            </span>
                                       <h2 onClick={() => navigate(`/groups/${item.id}`)} className='groups__item-title'>{item.name}</h2>
                                   </div>
                                   <span  className='groups__item-delete'>
                            <MdOutlineCancelPresentation/>
                        </span>
                               </div>
                           </React.Fragment>
                               ))

                    }
                </div>

                <div className='groups__bottom'>
                    {
                        limit >= groupLenght.length ?  <span onClick={() => {
                            dispatch(limitCourse(4))
                        }} className='groups__bottom-yet'>
                        Скрыть
                    </span> :  <span onClick={() => {
                            dispatch(limitCourse(groupLenght.length))
                        }} className='groups__bottom-yet'>
                        Показать еще
                    </span>
                    }
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

            </div>
        </section>
    );
};

export default Groups;