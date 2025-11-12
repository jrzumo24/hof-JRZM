let items = [
    {nombre: 'Mouse', precio: 180},
    {nombre: 'Teclado', precio: 210},
    {nombre: 'Bocina', precio: 850},
    {nombre: 'Audifono', precio: 1580},
    {nombre: 'Mochila', precio: 990},

]

let total = 0
for (let i = 0; i < items.lengt; i++) {
    total+=items[i].precio
    
}
console.log('Total: $',total);
let total2 = items.reduce( (acum, x) => acum+x.precio, 0)
console.log('Reduce: $',total2);