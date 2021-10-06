let hora = 156
let estado;

if( hora >= 6 && hora <= 11 ){
    estado = "Buenos días";
}
else if ( hora >= 12 && hora <= 18){
    estado = "Buenas tardes";
}
else if ( hora >= 19 && hora <= 23){
    estado = "Buenas noches";
}
else if ( hora >= 0 && hora <= 5 ){
    estado = "Durmiendo";
}
else estado = "Desconocido"

console.log(estado)