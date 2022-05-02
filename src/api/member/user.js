import axios from '@/utils/axios'


const memberApi = {
    register: 'member/register',
    getCode: 'member/get/phone/code',
    login:'member/login',
    logout:'member/logout',
    user:'member/get/user'
}
/**
 * 会员注册
 * @param param
 */
export const memberRegister = (param) => {
    return axios.post(memberApi.register, param)
}
/**
 * 获取验证码
 * @param param 手机号
 * @returns {AxiosPromise}
 */
export const getPhoneCode = (param) => {
    return axios.get(memberApi.getCode, param)
}


export const memberLogin = (param) => {
    return axios.post(memberApi.login, param)
}

export const memberLogout = () => {
    return axios.get(memberApi.logout)
}

export const queryMember = () => {
    return axios.get(memberApi.user)
}