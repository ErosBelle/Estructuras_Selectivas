//Elabore un algoritmo que lea el nombre, el salario bruto, las deducciones y las
//bonificaciones de dos trabajadores, e imprima (escriba un mensaje) el nombre del que
//más salario neto tiene.

let salario_B,deducciones, bonificaciones, T1
let salario_B2,deducciones2, bonificaciones2, T2

T1 = prompt('Ingrese el nombre del trabajador 1')
T2 = prompt('Ingrese el nombre del trabajador 2')
salario_B = Number(prompt('Ingrese su salario'))
deducciones = Number(prompt('Ingrese las prestaciones'))
bonificaciones = Number(prompt('Ingrese sus bonificaciones'))
salario_B2 = Number(prompt('Ingrese su salario'))
deducciones2 = Number(prompt('Ingrese las prestaciones'))
bonificaciones2 = Number(prompt('Ingreses sus bonificaciones'))


let salario_F = (salario_B2+-deducciones)+ bonificaciones
let salario_F2 =(salario_B+-deducciones)+ bonificaciones2

if (T1>T2) {
    alert ( 'El empleado ' + T1 + ' Tiene salario mas alto ' + salario_F) ;
} else if (T1<T2) {
    alert ( 'El empleado ' + T2 + ' Tiene salario mas alto ' + salario_F2)
}

