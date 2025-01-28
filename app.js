    // Array para almacenar los nombres de los amigos
    let amigos = [];


    // Función para agregar nombres al array
    function agregarAmigo() {
      // Capturar el valor del campo de entrada
      let input = document.getElementById('amigo');

      // Validar que el campo no esté vacío
      if (input.value.trim() === "") {
        alert('Error. Por favor, ingrese un nombre');
        return;
      }
      // Añadir el nombre al array
      amigos.push(input.value.trim());

      // Actualizar la lista en pantalla
      actualizarLista();

      // Limpiar el campo de entrada
      input.value = '';
    }

    // Función para actualizar la lista en pantalla
    function actualizarLista() {
      // Obtener el elemento de la lista
      let lista = document.getElementById('listaAmigos');

      // Limpiar la lista existente
      lista.innerHTML = '';

      // Iterar sobre el arreglo de amigos y agregar elementos a la lista
     

      amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo; // Establecer el texto del <li>
    
        console.log("Elemento <li> a agregar:", li);  // Verificar cada <li> creado
    
        lista.appendChild(li); // Añadir el <li> al <ul>
      })
    }

    // Función para sortear un amigo secreto
    function sortearAmigo() {
      // Validar que haya amigos en el array
      if (amigos.length === 0) {
        alert('La lista está vacía. Por favor, añada amigos primero.');
        return;
      }

      // Generar un índice aleatorio
      const indiceAleatorio = Math.floor(Math.random() * amigos.length);

      // Obtener el nombre sorteado
      const amigoSorteado = amigos[indiceAleatorio];

      // Mostrar el resultado
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    }
