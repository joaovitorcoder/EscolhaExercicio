let rotacaoAtual = 0
function girar(){
    const roleta = document.getElementById("roleta");
    
    const giro = Math.floor(Math.random() * 360) + 4600;
    rotacaoAtual += giro;
    roleta.style.transform = `rotate(${rotacaoAtual}deg)`;
}


