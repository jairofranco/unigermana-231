console.log('Hola mundo');
var numero1 = 10;
var numero2 = 30;
var resultado = numero1+numero2;
console.log(resultado);
var cadena = "El resultado es:";
console.log(cadena);
var resultado2 =  cadena+resultado;
console.log(resultado2);
cadena ="Lorem \t ipsum dolor sit \"amet\"  consectetur\n adipisicing elit. Modi o";
console.log(cadena);
var semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo",123];
semana[8]="otro valor";
console.log(semana);
console.log(semana[3]);
var cumple = true;
console.log(cumple);
for(var i =0; i<semana.length;i++){
    console.log(semana[i]);
}
for( dia in semana){
    if(!cumple){ 
        console.log(dia);
        console.log(semana[dia]);
    }else{
        console.log("Si cumple");
    }
}

