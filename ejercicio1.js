
function construirPiramide(numero) {
let suma=''
for(i=1;i<=numero;i++) {
  suma+=i;
  console.log(suma)
}
};
let numero= Number(prompt("ingrese un numero"));
console.log(construirPiramide(numero));
