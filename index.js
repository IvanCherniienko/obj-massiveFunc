const Array = [45, 66, 16]
const obj = {
  name: 'John',
  age: 25,
  hobbies: ['reading', 'cooking', 'hiking'],
  }

const { right, wrong } = function filter(array, callback) {
  const right = []
  const wrong = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      right.push(array[i])
    } else {
      wrong.push(array[i])
    }
  }
  return { right, wrong }
}

function mappingObj(obj, callback) {
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    const mappedObj = {}
    for (const key in obj) {
      if (key in obj) {
        mappedObj[key] = callback(obj[key], key, obj)
      }
    }
    return mappedObj
  } else {
    alert('Ошибка валидации')
  }
}

function mappingArr(Array, callback) {
  if (Array.isArray(Array)) {
    const mappedArr = []
    for (let i = 0; i < Array.length; i++) {
      mappedArr[i] = callback(arr[i], i, Array)
    }
    return mappedArr
  } else {
    alert('Ошибка валидации')
  }
}




    

