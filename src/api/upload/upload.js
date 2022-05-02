import axios from '@/utils/axios'

const uploadApi = {
    image: 'project/upload/image',
}

export const uploadImage = (url,data) => {
    return axios.postConfig(url, data, {
        'Content-Type': 'multipart/form-data'
    })
}