import axios from "axios";


export const getUser = (pageNumber: number, pageSize: number) => {
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => response.data)}

export const getFollowedUser = (id: number) => {
   return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "c23443b4-60bf-485c-b390-e5ba1c9043b1"
            }
        }
    )
}
export const getUnFollowedUser = (id: number) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "c23443b4-60bf-485c-b390-e5ba1c9043b1"
            }
        }
    )
}
export const getUserProfile = (userId: string) => {
   return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
       withCredentials: true,
       headers: {
           "API-KEY": "c23443b4-60bf-485c-b390-e5ba1c9043b1"
       }
   })
}
export const getAuthMy = () => {
    return  axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
        withCredentials: true,
        headers: {
            "API-KEY": "c23443b4-60bf-485c-b390-e5ba1c9043b1"
        }
    })
}
export const getStatus = (userId: string) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/`+userId, {
        withCredentials: true,
        headers: {
            "API-KEY": "c23443b4-60bf-485c-b390-e5ba1c9043b1"
        }
    })
}
export const updateStatus = (status: string) => {
    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: status},{
        withCredentials: true,
        headers: {
            "API-KEY": "c23443b4-60bf-485c-b390-e5ba1c9043b1"
        }})
}
export const login = (email: string, password: string, rememberMe: boolean = false) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password,rememberMe}, {
        withCredentials: true,
        headers: {
            "API-KEY": "c23443b4-60bf-485c-b390-e5ba1c9043b1"
        }
    })
}
export const logOut = () => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
        withCredentials: true,
        headers: {
            "API-KEY": "c23443b4-60bf-485c-b390-e5ba1c9043b1"
        }
    })
}