import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../img/3426.jpg"
import {UserType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {getFollowedUser, getUnFollowedUser} from "../api/api";

type UsersPropsType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (el: number) => void,
    users: Array<UserType>
    unFollow: (userId: number) => void,
    follow: (userId: number) => void
    ToggleIsFollow:(isFollow: boolean, id: number)=>void
    followingInProgress: Array<number>
    followThunk:(userId: number) => void
    unfollowThunk:(userId: number) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(el => {
                    //@ts-ignore
                    return <span className={props.currentPage === el && style.selected}
                                 onClick={(e) => {
                                     props.onPageChange(el)
                                 }}>{el}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={style.userPhoto}/>
                             </NavLink>
                        //{/*.small != null ? user.photoUrl.small : userPhoto}*/}
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled = {props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.unfollowThunk(user.id)

                            }}>UnFollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.followThunk(user.id)
                            }}>Follow</button>}
                            </div>
                            </span>
                    <span>
                            <span>
                            <div>{user.name}</div><div>{user.status}</div>
                            </span>
                            <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                            </span>
                            </span>

                </div>)
            }


        </div>

    )
}


export default Users