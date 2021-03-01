import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../img/3426.jpg"
import {UserType} from "../../redux/store";

type UsersPropsType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (el: number) => void,
    users: Array<UserType>
    unFollow: (userId: number) => void,
    follow: (userId: number) => void
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
                        <img src={user.photos.small !=null ? user.photos.small : userPhoto}
                             className={style.userPhoto}/>
                        //{/*.small != null ? user.photoUrl.small : userPhoto}*/}
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                props.unFollow(user.id)
                            }}>UnFollow</button> :
                            <button onClick={() => {
                                props.follow(user.id)
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