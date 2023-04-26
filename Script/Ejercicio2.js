let edadh1

edadh1 = Number(prompt('Ingrese la edad'))

if (edadh1<10) {
    alert('Niño')
} else if (edadh1>=10 && edadh1<15 ) {
    alert('Preadolescente')
}  else if (edadh1>=15 && edadh1<18 ) {
    alert('adoslecente')
}  else if (edadh1>=18 && edadh1<50 ) {
    alert('Adulto')
}  else if (edadh1>=50) {
    alert('Adulto Mayor')
} 

