let items = [
    {nombre: 'Mouse', precio: 180},
    {nombre: 'Teclado', precio: 210},
    {nombre: 'Bocina', precio: 850},
    {nombre: 'Audifono', precio: 1580},
    {nombre: 'Mochila', precio: 990},

]

let iva = []
for (let i = 0; i < items.length; i++) {
    iva.push(items[i].precio*1.16)
    
}
console.log('precios con iva: ',iva);
let iva2 = items.map(x => x.precio*1.16)
console.log('Map: ', iva2);