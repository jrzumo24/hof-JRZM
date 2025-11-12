let items = [
    {nombre: 'Mouse', precio: 180},
    {nombre: 'Teclado', precio: 180},
    {nombre: 'Bocina', precio: 850},
    {nombre: 'Audifono', precio: 1580},
    {nombre: 'Mochila', precio: 990},

]

let item = null
for (let i = 0; i < items.length; i++) {
    if (items[i].nombre === 'Audifono'){
        item = items[i]
        break
    }
    
}
console.log('Item: ',item);
let item2 = items.find(x => x.nombre==='Audifono')
console.log('Find: ',item2);