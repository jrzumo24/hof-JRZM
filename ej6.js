let items = [
    {nombre: 'Mouse', precio: 180},
    {nombre: 'Teclado', precio: 210},
    {nombre: 'Bocina', precio: 850},
    {nombre: 'Audifono', precio: 1580},
    {nombre: 'Mochila', precio: 990},

]

for (let i = 0; i < items.length; i++) {
    console.log(items[i].nombre.toUpperCase(), '$',items[i].precio*1.16);
    
}

items.forEach(x=> console.log('forEach',x.nombre.toLocaleUpperCase(), '$',x.precio*1.16 ))