import React from 'react'
import {UsersType} from "../../redux/store";
import style from './Users.module.css'


const Users = (props:UsersType) => {


    return <div>
        {
            props.users.map( user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={style.userPhoto}/>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {props.unFollow(user.id)}}>UnFollow</button> :
                            <button onClick={() => {props.follow(user.id)}}>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div><div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>

            </div>)
            }

    </div>
}

export default Users