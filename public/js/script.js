function calculoMedia() {
    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let mediaNotas = (nota1 + nota2) / 2
    if (mediaNotas >= 7) {
        let media1 = document.getElementById("textomedia");
        let textomedia = "Parabéns! Você foi aprovado com média " + mediaNotas + ".";
        media1.innerHTML = textomedia;
    } else {
        let media2 = document.getElementById("textomedia");
        let textomedia = "Infelizmente você foi reprovado com média " + mediaNotas + ".";
        media2.innerHTML = textomedia;
    }
}

function limparResultado() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    textomedia.innerText = "";
}


