import React from 'react'
import {UsersType, UserType} from "../../redux/store";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../img/3426.jpg'



class Users extends React.Component<UsersType> {
    constructor(props: UsersType) {
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })
        }
    }
    render() {
        return <div>
            {
                this.props.users.map( user => <div key={user.id}>
                <span>
                    <div>
                        <img src= {user.photos}  className={style.userPhoto}/>
                        //{/*.small != null ? user.photoUrl.small : userPhoto}*/}
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {this.props.unFollow(user.id)}}>UnFollow</button> :
                            <button onClick={() => {this.props.follow(user.id)}}>Follow</button> }
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


    }
}

export default Users