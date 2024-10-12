
//PRIMER PUNTO

//MULTIPLICAR POR 2

//const numeros = [5, 8, 12, 15, 2, 4,18, 21];
//const multiplicacion = numeros.map(numeros => numeros * 2);
//console.log(multiplicacion)

//METODO FILTER 

/*const numeros= [5 , 8, 12, 15, 2, 4, 18, 21];
let mayoresQueDiez= numeros.filter(function(numero){
    return numero >10;
})
console.log(mayoresQueDiez)*/


//REDUCE
//const suma= mayoresQueDiez.reduce((acc, num)=> acc+num, 0);
//console.log(suma)


//PUNTO DOS

/*const estudiante= {
  nombre: 'Juan Perez',
  edad: 20, 
  direccion: {
    ciudad:'Medellin',
    calle: 'Calle 10', 
    numero: 101
  },
  notas:{
    matematicas: 4.5,
    ingles: 3.8,
    ciencias: 4.0
  }

};

const{ nombre, direccion:{ ciudad}} = estudiante;

const {notas:{matematicas}}=estudiante


  console.log(nombre)
  console.log(ciudad)
  console.log(matematicas)



//PUNTO TRES 
  
const productos= [
    {nombre: 'laptop', categoria: 'tecnologia', precio: 1000},
    {nombre: 'smartphone', categoria: 'tecnologia', precio: 600},
    {nombre: 'camisa', categoria: 'ropa', precio: 30},
    {nombre: 'teclado', categoria: 'tecnologia', precio: 50},
    {nombre: 'zapatillas', categoria: 'ropa', precio: 80},
]

const categoriaTecnologia = productos.filter(producto => producto.categoria === 'tecnologia');
console.log(categoriaTecnologia)

const descuento10 = categoriaTecnologia.map(producto => ({producto, precio: producto.precio * 0.9 }));
console.log(descuento10)

const precioTotal = descuento10.reduce((total, producto) => total + producto.precio, 0);
console.log(precioTotal)*/




  


    