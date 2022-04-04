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

/**
 * 在数组对象中寻找关键字,在另一个对象赋值
 * @param array 查询的数组(里面的某个对象被赋值)
 * @param object  对象
 * @param prop 和对象的key相等   array[index - 1].value = object[item.prop]
 */
const findKeyForValue = (array,object) => {
    array.forEach(item => {
        let index = Object.keys(object).findIndex((x) => x === item.prop);
        if (index >= 0 && index <= array.length) {
            array[index - 1].value = object[item.prop]
        }
    })
}
/**
 * 上方法的逆过程
 * @param array
 * @param object
 */
const arrayKeyForObject = (array,object) => {
    array.forEach(item => {
        let index = Object.keys(object).findIndex((x) => x === item.prop);
        if (index >= 0 && index <= array.length) {
            object[item.prop] = array[index - 1].value
        }
    })
}


/**
 * 保存 session
 * @param key
 * @param value
 */
const setSession = (key, value) => {
    window.sessionStorage.setItem(key, value);
}

const getSession = (key) => {
    return window.sessionStorage.getItem(key);
}

const removeSession = (key) => {
    window.sessionStorage.removeItem(key);
}
const removeAllSession = () => {
    window.sessionStorage.clear();
}


export {successMsg, errorsMsg, setSession, getSession, removeSession, removeAllSession,findKeyForValue,arrayKeyForObject}
