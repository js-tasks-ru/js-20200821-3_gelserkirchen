/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
<<<<<<< HEAD
export function invertObj(obj) {

=======
 export function invertObj(obj) {
    if (typeof obj !== 'object') {
      return undefined
    }

    // start initialization
    const tmpObj = {};

    // change key -> <- value
    for (let [key, value] of Object.entries(obj)) {
       tmpObj[value] = key;
    }

    return tmpObj;
>>>>>>> ec6a000... решил задачу 3.3 и украсил другие задачи из курса 3
}
