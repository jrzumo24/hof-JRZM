let items = [
    {nombre: 'Mouse', precio: 180},
    {nombre: 'Teclado', precio: 210},
    {nombre: 'Bocina', precio: 850},
    {nombre: 'Audifono', precio: 1580},
    {nombre: 'Mochila', precio: 990},

]

let existe = false
for (let i = 0; i < items.length; i++) {
    if (items[i].precio<500) {
        existe=false
        break;

    }
}

console.log('Todo cuesta >=500:',existe);
let existe2 = items.every(x => x.precio>=500)
console.log('Every: ',existe2);