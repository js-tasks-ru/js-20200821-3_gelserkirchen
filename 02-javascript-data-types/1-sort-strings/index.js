/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  switch (param) {
    case 'asc':
      return sortInParamOrder(arr, 1);
      break;
    case 'desc':
      return sortInParamOrder(arr, -1);
      break;
    default:
      return sortInParamOrder(arr, 1);
  }

  function sortInParamOrder(arr, order) {
      return [...arr].sort((a, b) => order * a.localeCompare(b, undefined, { caseFirst: "upper" }));

  }
}




