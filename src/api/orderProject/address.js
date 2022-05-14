import axios from '@/utils/axios'

const api = {
    getLaunchName: 'order/launch/name/get', // 项目集资
    address: 'order/address/get', // 项目集资
}

export const queryLaunch = (id) => {
    return axios.get(api.getLaunchName,id)
}

