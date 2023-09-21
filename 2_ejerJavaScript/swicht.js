function mostrar(){

 opc=parseInt(prompt("hola chic@ ingresa la opcion 1 para area rectangulo 2 para area cuadrado 3 para area triangulo y 4 para salir"));
    switch(opc){
        case 1:
            b=parseInt(prompt("ingrese la base"));
            a=parseInt(prompt("ingrese la altura"));
            var resultado=b*a;
                if (b!=0 && a!=0){
                document.write(" el resultado del area del rectangulo es: "+resultado)
                }else{
                document.write("verfica los datos de base por altura")
        
            }
        break;

        case 2:
            l=parseInt(prompt("ingrese el lado"));
            l=parseInt(prompt("ingrese el lado"));
            var resultado=l*l;
                if (l!=0 && l!=0){
                document.write(" el resultado del area del cuadrado es: "+resultado)
                }else{
                document.write("verfica los datos de altura por altura")
        
            }
        break;

        case 3:
            b=parseInt(prompt("ingrese la base"));
            a=parseInt(prompt("ingrese la altura"));
            var resultado= (b*a) /2;
                if (b!=0 && a!=0){
                document.write(" el resultado del area del triangulo es: "+resultado)
                }else{
                document.write("verfica los datos de base por altura")
        
            }
        break;

        case 4:
            document.write("saliste")
            break;
        
            
            
            
 }
};



