import * as axios from "axios"

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '00c9ff68-884f-4d55-9f3f-14b040cb34f7'
   }
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get( `users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
         })
         .then(response => {
            return response.data
         })
   }
}

// export const follow = (currentPage = 1, pageSize = 5) => {
//    return axios.get( `follow?page=${currentPage}&count=${pageSize}`, {
//          withCredentials: true,
//       })
//       .then(response => {
//          return response.data
//       })
// }
         