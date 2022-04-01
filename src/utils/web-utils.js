const successMsg = (msg) => {
    return ElMessage({
        message: msg,
        type: 'success',
        center: true,
    })
}

const errorsMsg = (msg) => {
    return ElMessage({
        message: msg,
        type: 'error',
        center: true,
    })
}

export {successMsg,errorsMsg}
