import axios from '@/utils/axios'

const adminApi = {
    login:'admin/login'
}

/**
 * 管理员登录
 * @param params
 * @returns {AxiosPromise}
 */
const adminLogin = (params) => {
    return axios.post(adminApi.login, params)
};

export {adminLogin}