function valores(){
    const ladoA=document.getElementById("l1").value
    const ladoB=document.getElementById("l2").value
    const ladoC=document.getElementById("l3").value
    const forma=document.getElementById("selector").value
    if (forma==1) {
        const Area = 0.5 * (ladoA + ladoC) * ladoB;
        document.getElementById("resultado").innerText=Area
    }

    if (forma==2) {
        const triangulo = 0.5 * (ladoA - ladoC) * ladoB;
        document.getElementById("resultado").innerText=triangulo
        }

    if (forma==3) {
        const Rectangulo = ladoC * ladoB;
        document.getElementById("resultado").innerText=Rectangulo
        }

}