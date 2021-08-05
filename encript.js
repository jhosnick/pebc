var prodId = getParameterByName('prodId');

const inventario = [
  /*{ nombre: 'Rodrigo Salazar', ci: 444888 },
 */
  { nro:666, nombre: 'Brian Rodrigo Salazar Quispe', ci: 8468662 ,cargo:'presidente' , macro: 'la paz', dist: '666'},

  { nro:1, nombre: 'Josue Viktor Morales', ci: 6957485 ,cargo:'Coordinador Político D-15' , macro: 'San Antonio', dist: '15'},
  { nro:2, nombre: 'Hernan ivan arias duran', ci: 161809 ,cargo:'Alcalde' , macro: 'Sur', dist: '19'},

];
var item = inventario.find(item => item.nro === parseInt(prodId, 10));
var item = inventario.find(item => item.ci === parseInt(prodId, 10));

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//console.log(item.nombre);
function getMiembro() {
  document.getElementById("nro").innerHTML = item.nro;
  document.getElementById("nombres").innerHTML = item.nombre;
  document.getElementById("ci").innerHTML = item.ci;
  document.getElementById("cargo").innerHTML = item.cargo;
  document.getElementById("macro").innerHTML = item.macro;
  document.getElementById("dist").innerHTML = item.dist;
}
