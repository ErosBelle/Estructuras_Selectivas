//Crear un algoritmo que le permita al usuario ingresar los datos de dos buses así: Placa,
//El número de pasajeros transportados y el valor del pasaje, y el computador le
//muestre la placa del bus que más dinero recogió.

let N_pasajeros,V_pasaje, Placa1
let N_pasajeros2,V_pasaje2, Placa2

Placa1 = prompt('Ingrese la placa del bus 1')
Placa2 = prompt('Ingrese la placa del bus 2')
V_pasaje = Number(prompt('Ingrese el valor del pasaje 1'))
V_pasaje2 = Number(prompt('Ingrese el valor del pasaje 2'))
N_pasajeros = Number(prompt('Ingrese el numero de pasajeros del bus 1'))
N_pasajeros2 = Number(prompt('Ingrese el numero de pasajeros del bus 1'))

let bus1 = (V_pasaje * N_pasajeros)
let bus2 =(V_pasaje2 * N_pasajeros2)

if (bus1>bus2) {
    alert ( bus1 +' El bus 1 recolecto mas dinero') 
} else if (bus1<bus2) {
    alert ( bus2 + ' El bus 2 recolecto mas dinero')
}
