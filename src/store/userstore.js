import {defineStore} from 'pinia';

export const userStore = defineStore('user', {
    // other options...
    state: () => {
        return {
            user: {
                name: '',
                token: '',
                isLogin: false
            }
        }
    },
    getters:{
        getUser(state){
            return state.user
        }
    },
    actions:{
        setUserName(userName){
            this.user.name = userName
        },
        setToken( token){
            this.user.token = token
        },
        setLogin(isLogin){
            this.user.isLogin = isLogin
        }
    }
})