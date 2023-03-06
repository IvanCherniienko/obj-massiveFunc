const array = [45, 66, 16]
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

function mapping(arrandobj, callback) {
  if (Array.isArray(arrandobj)) {
    const newArray = []
    arrandobj.forEach((item) => {
      newArray.push(callback(item))
    })
    return newArray;
  } else if (typeof arrandobj === 'object' && arrandobj !== null) {
    const newObj = {}
    for (let key of Object.keys(arrandobj)) {
      newObj[key] = callback(arrandobj[key])
    }
    return newObj
  } else {
    alert('Ошибка валидации')
  }
}


    

