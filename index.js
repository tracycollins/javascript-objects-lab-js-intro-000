function updateObjectWithKeyAndValue(obj, key, val) {
  var newObj = Object.assign({}, obj, {[key]: val})
  return newObj
}
