function updateObjectWithKeyAndValue(obj, key, val) {
  var new obj = Object.assign(obj, {[key]: val})
  return obj
}
