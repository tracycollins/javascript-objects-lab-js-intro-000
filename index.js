function updateObjectWithKeyAndValue(obj, key, val) {
  var obj = Object.assign(obj, {[key]: val})
  return obj
}
