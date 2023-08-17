import React, {useEffect, useState} from 'react';
import avatar from "../../images/profile/avatar.png"
import {useParams} from "react-router-dom";
import {getUser} from "../../redux/store/reducers/profile/profile";
import {useSelector} from "react-redux";
import {selectProfile, selectUsers} from "../../redux/reduxSelectors/reduxSelectors";
import {selectUser} from "../../redux/reduxSelectors/reduxSelectors";
import {getGroup} from "../../redux/store/reducers/group/group";
import {useAppDispatch} from "../../redux/store/reducers/hooks/reduxHooks";

const Profile = () => {

    const params = useParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUser(params.id))
    }, [])

    const {profile} = useSelector(selectProfile)



    const [typeGroups, setTypeGroups] = useState('all')
    return (
        <section className="profile">
            <div className="container">
                <div className='profile__top'>
                    <div className="groups__menu">
                        <div className="groups__menu">
                            <button onClick={() => setTypeGroups("all")} className={`groups__btn${typeGroups === "all" ? ` active` : ""}`}>Информация
                            </button>
                            <button onClick={() => setTypeGroups("active")} className={`groups__btn${typeGroups === "active" ? ` active` : ""}`}>Карты
                            </button>

                        </div>
                    </div>
                </div>
                <div className="profile__content">

                    <div className="profile__left">
                        <span >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="#14B855" stroke="#E5E5E5"/>
</svg>
                        </span>
                        <p className="profile__left-text">{profile!.status}</p>
                    </div>
                    <div className='profile__right'>
                        <img className="profile__img" src={avatar} alt=""/>
                        <p className="profile__name">{profile!.name} {profile!.surname}</p>
                        <span className="profile__line-top"></span>
                        <div className="profile__info-list">
                            <div className="profile__item">
                                <div className="profile__item-info">
                                    <span className="profile__svg">1</span>
                                    <p className="profile__text">+{profile!.phone}</p>
                                </div>
                                <span className="profile__line"></span>
                            </div>
                            <div className="profile__item">
                                <div className="profile__item-info">
                                    <span className="profile__svg">2</span>
                                    <p className="profile__text">{profile!.email}</p>
                                </div>
                                <span className="profile__line"></span>
                            </div>
                            <div className="profile__item">
                                <div className="profile__item-info">
                                    <span className="profile__svg">3</span>
                                    <p className="profile__text">+sveta84_official</p>
                                </div>
                                <span className="profile__line"></span>
                            </div>
                        </div>
                        <div className="profile__info">
                            <p className="profile__info-text">Ниша</p>
                            <p className="profile__info-text">Группа/класс</p>
                        </div>
                        <div className="profile__info">
                            <p className="profile__info-text">{profile!.city}</p>
                            <p className="profile__info-text">{profile!.passport}</p>
                        </div>
                        <div className="profile__info">
                            <p className="profile__info-text">Ниша</p>
                            <p className="profile__info-text">Группа/класс</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Profile;