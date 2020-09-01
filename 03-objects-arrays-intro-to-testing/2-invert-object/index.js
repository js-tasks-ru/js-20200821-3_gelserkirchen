/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */

 export function invertObj(obj) {

    if (typeof obj === 'object') {
      if (Object.keys(obj).length === 0) return obj;

      // start initialization
      const tmpObj = {};

      // change key -> <- value
      for (let [key, value] of Object.entries(obj)) {
        tmpObj[value] = key;
      }

      return tmpObj;
    }

}
