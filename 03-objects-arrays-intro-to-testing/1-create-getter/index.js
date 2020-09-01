/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

  const array = path.split(".");

  return function (obj) {
    let result;
    findFieldInObject(obj);

    // recursion function
    function findFieldInObject(obj) {
      let nameOfFieldInObject = array.shift();

      if (Object.keys(obj).includes(nameOfFieldInObject)) {
        if (array.length == 0) {
          result = obj[nameOfFieldInObject];
        } else {
          findFieldInObject(obj[nameOfFieldInObject])
        }
      } else { return;}
    }

    return result;
  };

}
