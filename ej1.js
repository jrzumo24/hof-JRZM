let items = [
    {nombre: 'Mouse', precio: 180},
    {nombre: 'Teclado', precio: 210},
    {nombre: 'Bocina', precio: 850},
    {nombre: 'Audifono', precio: 1580},
    {nombre: 'Mochila', precio: 990},

]
    
let datos = []
for (let i = 0; i < items.length; i++){
    if (items[i].precio>=500){
        datos.push(items[i])
    }
}

console.log('Items >=$500: ',datos);

let datos2 = items.filter( x => x.precio>=500 )
console.log('Filter: ', datos2);


