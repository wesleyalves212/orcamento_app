function calcular(){
    
    var valor1 = document.getElementById('valor1').value;
    valor1 = parseFloat(valor1.replace(',','.'));
    
    var valor2 = document.getElementById('valor2').value;
    valor2 = parseFloat(valor2.replace(',','.'));
    
    var valor3 = document.getElementById('valor3').value;
    valor3 = parseFloat(valor3.replace(',','.'));
    
    var valor4 = document.getElementById('valor4').value;
    valor4 = parseFloat(valor4.replace(',','.'));
    
    var valor5 = document.getElementById('valor5').value;
    valor5 = parseFloat(valor5.replace(',','.'));
    
    var valor6 = document.getElementById('valor6').value;
    valor6 = parseFloat(valor6.replace(',','.'));
    
    var valor7 = document.getElementById('valor7').value;
    valor7 = parseFloat(valor7.replace(',','.'));
    
    var valor8 = document.getElementById('valor8').value;
    valor8 = parseFloat(valor8.replace(',','.'));
    
    var valor9 = document.getElementById('valor9').value;
    valor9 = parseFloat(valor9.replace(',','.'));
    
    var valor10 = document.getElementById('valor10').value;
    valor10 = parseFloat(valor10.replace(',','.'));
    
    var acrescimo = document.getElementById('acrescimo').value;
    acrescimo = parseFloat(acrescimo.replace(',','.'));
    
    var desconto = document.getElementById('desconto').value;
    desconto = parseFloat(desconto.replace(',','.'));
    
    document.getElementById('total').value = ((valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10 + acrescimo) - desconto).toFixed(2);
    
}