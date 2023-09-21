function mostrar(){

    opc=parseInt(prompt("hola chic@ ingresa la opcion 1 para sumar 2 para resta 3 para multiplicar 4 para dividir y 5 cual es mayor"));
       switch(opc){
           case 1:
            var num1=parseInt(prompt("ingrese un digito"));
            var num2=parseInt(prompt("ingrese un digito"));
            var resultado = num1+num2
            document.write("el resultado es: " +resultado)
            break;

            case 2:
            var num1=parseInt(prompt("ingrese un digito"));
            var num2=parseInt(prompt("ingrese un digito"));
            var resultado = num1-num2
            document.write("el resultado es: " +resultado)
            break;

            case 3:
            var num1=parseInt(prompt("ingrese un digito"));
            var num2=parseInt(prompt("ingrese un digito"));
            var resultado = num1*num2
            document.write("el resultado es: " +resultado)
            break;

            case 4:
            var num1=parseInt(prompt("ingrese un digito"));
            var num2=parseInt(prompt("ingrese un digito"));
            var resultado = num1/num2
            document.write("el resultado es: " +resultado)
            break;

            case 5:
            var num1=parseInt(prompt("ingrese un digito"));
            var num2=parseInt(prompt("ingrese un digito"));
                
            if (num1>num2){
                document.write(" el  mayor es: "+num1)
                }
          

            else
                document.write (`el numero ${num2} es mayor`)



       };
    };