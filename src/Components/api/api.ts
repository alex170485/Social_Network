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
   return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
}

