// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema

document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos del DOM
    const amigoInput = document.querySelector('#amigo'); // Campo de texto
    const btnAdd = document.querySelector('.button-add'); // Botón Añadir
    const listaAmigos = document.querySelector('.name-list'); // Lista para mostrar amigos
    const result = document.querySelector('.result-list'); // Lista para mostrar resultados
    const btnSort = document.querySelector('.button-draw'); // Botón Sortear


    // Función para agregar un amigo
    const agregarAmigo = () => {
        const nombreAmigo = amigoInput.value.trim(); // Obtener el valor del input
        if (nombreAmigo === '') {
            alert('Debes ingresar un nombre');
            return; // Salir si el input está vacío
        }
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = nombreAmigo;
        listaAmigos.appendChild(li); // Agregar a la lista
        amigoInput.value = ''; // Limpiar el campo de texto
    };

    // Función para sortear amigos
    const sortearAmigo = () => {
        const amigos = Array.from(listaAmigos.children);
        if (amigos.length === 0) {
            alert('No hay amigos en la lista para sortear');
            return;
        }
        amigos.sort(() => Math.random() - 0.5); // Mezclar aleatoriamente
        result.innerHTML = ''; // Limpiar resultados anteriores
        amigos.forEach((amigo, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1} - ${amigo.textContent}`;
            result.appendChild(li);
        });
    };


    // Vincular la función al botón
    btnAdd.addEventListener('click', agregarAmigo);
    btnSort.addEventListener('click', sortearAmigo);
});

