import * as axios from "axios"

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '00c9ff68-884f-4d55-9f3f-14b040cb34f7'
   }
})

export const usersAPI = {

   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get( `users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data
         })
   },
   getProfile(userId) {
      return instance.get( `profile/` + userId)
   },
   follow(userId) { 
   return instance.post( `follow/${userId}`)
   },
   unfollow(userId) {
   return instance.delete( `follow/${userId}`)
   }
}
export const authAPI = {
   me() {
      return instance.get( `auth/me`)
   },
}

         