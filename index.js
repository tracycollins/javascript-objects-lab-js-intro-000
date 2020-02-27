function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, {[key]: val})
  // return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign(obj, {[key]: val})
}

function deleteFromObjectByKey(obj, key) {
  return delete Object.assign({}, obj).[key]
}
