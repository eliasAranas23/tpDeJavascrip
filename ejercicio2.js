let array1=['leche','yogurt', 'tomate','cafe','mermelada'];
let array2=['tomate','pan','agua','cafe'];
let array3=[];
for(i=0; i < array1.length; i++){
    for(j=0; j < array2.length; j++){
    if (array2[j] === array1[i]){
  array3.push(array2[j]);
}
}
}
    console.log(array3);