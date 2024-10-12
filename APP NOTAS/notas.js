// Arreglo que almacena las notas
let notas = [];

// Referencias a los elementos del DOM
const listaNotas = document.getElementById('listaNotas');
const nuevaNota = document.getElementById('nuevaNota');
const buscarNota = document.getElementById('buscarNota');
const agregarNotaBtn = document.getElementById('agregarNota');

// Función para agregar una nueva nota
function agregarNota() {
    const texto = nuevaNota.value.trim();
    if (texto !== "") {
        notas.push({ id: Date.now(), texto: texto, editada: false });
        nuevaNota.value = "";  // Limpiar el campo de texto
        mostrarNotas();
    }
}

// Función para mostrar las notas en el DOM
function mostrarNotas(filtradas = notas) {
    listaNotas.innerHTML = '';  // Limpiar la lista de notas

    filtradas.forEach(nota => {
        // Crear el contenedor de cada nota
        const divNota = document.createElement('div');
        divNota.classList.add('nota');
        if (nota.editada) divNota.classList.add('editada');
        
        const pTexto = document.createElement('p');
        pTexto.textContent = nota.texto;

        // Botón para editar la nota
        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.classList.add('editar');
        editarBtn.onclick = () => editarNota(nota.id);

        // Botón para eliminar la nota
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.classList.add('eliminar');
        eliminarBtn.onclick = () => eliminarNota(nota.id);

        divNota.appendChild(pTexto);
        divNota.appendChild(editarBtn);
        divNota.appendChild(eliminarBtn);

        listaNotas.appendChild(divNota);
    });
}

// Función para editar una nota
function editarNota(id) {
    const nota = notas.find(n => n.id === id);
    const nuevoTexto = prompt("Edita tu nota:", nota.texto);

    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        nota.texto = nuevoTexto.trim();
        nota.editada = true;
        mostrarNotas();
    }
}

// Función para eliminar una nota
function eliminarNota(id) {
    notas = notas.filter(n => n.id !== id);
    mostrarNotas();
}

// Función para filtrar notas según el texto de búsqueda
function filtrarNotas() {
    const termino = buscarNota.value.toLowerCase();
    const notasFiltradas = notas.filter(nota => nota.texto.toLowerCase().includes(termino));
    mostrarNotas(notasFiltradas);
}

// Event Listeners
agregarNotaBtn.addEventListener('click', agregarNota);
buscarNota.addEventListener('input', filtrarNotas);

// Mostrar las notas iniciales (vacío)
mostrarNotas();
