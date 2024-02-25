// Este programa es un simulador de carrito de compras
// con lo visto hasta el momento

// Función para mostrar opciones
function mostrarOpciones(){
    console.log("Opciones de compra:");
    console.log("1. Camisa - $50");
    console.log("2. Remera - $15");
    console.log("3. Zapatillas - $40");
    console.log("4. Pantalón - $30");
}

// Ejecuta el carrito de compras
function carritoDeCompras() {
    let totalApagar = 0;
    let seleccion;

    console.log("Bienvenido al carrito de compras");

    // Ejecutar MIENTRAS la funcion devuelve verdadero
    do {
        mostrarOpciones();

        seleccion = parseInt(prompt(
            "Seleccione una opción para agregar al carrito\n" + 
            "Opciones de compra:\n" +
            "1. Camisa - $50\n" +
            "2. Remera - $15\n" +
            "3. Zapatillas - $40\n" +
            "4. Pantalón - $30\n" +
            "(Presione 0 para finalizar)"
        ));
        
        // Controlar si es valida la seleccion
        if (seleccion >= 1 && seleccion <= 4) {
            switch (seleccion) {
                case 1:
                    totalApagar += 50;
                    console.log("Agrego al carrito: 1. Camisa, con un importe de $50");
                    break;
                case 2:
                    totalApagar += 15;
                    console.log("Agrego al carrito: 2. Remera, con un importe de $15");
                    break;
                case 3:
                    totalApagar += 40;
                    console.log("Agrego al carrito: 3. Zapatillas, con un importe de $40");
                    break;
                case 4:
                    totalApagar += 30;
                    console.log("Agrego al carrito: 4. Pantalon, con un importe de $30");
                    break;
            }
            console.log("Total actual en el carrito: $" + totalApagar);
        } else if (seleccion === 0) { //si la seleccion es 0 recien sale y muestra si desea pagar en cuotas o no
            let respuesta = prompt("¿Desea pagar en cuotas? s-Si n-No").toLowerCase();
            if (respuesta === "s") {
                let cantidadCuotas = parseInt(prompt("Ingrese el número de cuotas para pagar el total:"));
                if (!isNaN(cantidadCuotas) && cantidadCuotas > 0) {
                    let cuota = totalApagar / cantidadCuotas;
                    console.log("El total de la compra es de: $" + totalApagar.toFixed(2) + ". Las cuotas a pagar son: " + cantidadCuotas + " y tienen un valor de: $" + cuota.toFixed(2));
                } else {
                    console.log("Número de cuotas inválido");
                }
            } else if (respuesta === "n") {
                console.log("El total de la compra es: $" + totalApagar.toFixed(2));
            } else {
                console.log("Respuesta inválida. Mostrando total sin división");
                console.log("El total de la compra es: $" + totalApagar.toFixed(2));
            }
            console.log("Gracias por tu compra");
        } else {
            console.log("Selección inválida. Por favor, elija un número válido.");
        }
    } while (seleccion !== 0);
}

// Llamado a funcion para que se ejecute
carritoDeCompras();
