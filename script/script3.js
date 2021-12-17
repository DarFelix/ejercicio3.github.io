
var valor;

function verificacion(){
    valor = parseFloat(document.getElementById("valor").value );


    if ( isNaN(valor)){
        swal("Valor erróneo", "Ingresa un valor númerico", "error");   
     }
     else if (valor>0)
     {
        swal("Valor verificado", ""+valor+" es un número positivo.","success");   
     }
     else if (valor<0)
     {
        swal("Valor verificado", ""+valor+" es un número negativo.","success");   
     }
     else if (valor==0)
     {
        swal("Valor verificado", ""+valor+" es un número nulo.","success");   
     }

        
}