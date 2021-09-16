window.alert("Bem-vindo a Calculadora Online! Descubra sua média e se foi aprovado :) ou não :(");

function calculoMedia() {
    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let mediaNotas = (nota1 + nota2) / 2
    if (mediaNotas >= 7) {
        window.alert("Você foi aprovado com média " + mediaNotas +"!");
    } else {
        window.alert("Você foi reprovado com média " + mediaNotas +"!");
    }
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}



