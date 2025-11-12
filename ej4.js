let items = [
    {nombre: 'Mouse', precio: 180},
    {nombre: 'Teclado', precio: 180},
    {nombre: 'Bocina', precio: 850},
    {nombre: 'Audifono', precio: 1580},
    {nombre: 'Mochila', precio: 990},

]

let existe=false
for (let i = 0; i < items.length; i++) {
    if (items[i].precio>=1000){
        existe=true
        break
    }
}

console.log('Hay articulos >=1000: ',existe);
let existe2 = items.some(x => x.precio>=1000)
console.log('some: ',existe2);

