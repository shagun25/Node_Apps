//Object property shorthand
// const name = 'shagun'
// const age = 19
// const user = {
//     name,
//     userAge: age
// }
// console.log(user)


//Destructuring
const product = {
    label:'Red notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined,
}
// const label = product.label
// const price = product.price
// const {label:productLabel,price,rating=9} = product
// console.log(productLabel)
// console.log(price)
// console.log(rating)



//Destructuring with function argument
const trasaction = (type, {label,stock})=>{
    console.log(type,label,stock)
}


trasaction('order',product)