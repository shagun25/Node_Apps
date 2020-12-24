const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'shagun'
user.age = '19'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)









// const book = {
//     title: 'The RoBo',
//     author: 'shagun',
// }
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)

