///// ainda sem eventos //// 



function eventos(carros,mapas,mapAtual) {

    event_Trafego(carros,mapas,mapAtual)
}

function  event_Trafego(carros,mapas,mapAtual){
    var mp = mapas[0]
    if(mapAtual.nome == mp.nome){
        return event_Trafego_01(carros)
    }
}

function event_Trafego_01(carros) {
    //y270
    //x170
    //y1060
    //x1480
    for (var i in carros) {
        let p1 = 230
        let p2 = 110
        let p3 = 1120
        let p4 = 1550
        let c = carros[i]
        if (/// presiso diminuir
            c.posX == 170 && (c.posY != 1120 && c.posY != 230) ||
            c.posX == 1480 && (c.posY != 1120 && c.posY != 230) ||
            c.posY == 270 && (c.posX != 110 && c.posX != 1550) ||
            c.posY == 1060 && (c.posX != 110 && c.posX != 1550)
        ) {
            p1 = 270
            p2 = 170
            p3 = 1060
            p4 = 1480
        } else {
            p1 = 230
            p2 = 110
            p3 = 1120
            p4 = 1550
        }
        c.event_1(p1, p2, p3, p4)
    }

}





/////////////// fim de jogo 
function gameOver() {
    var fim = document.createElement('div')
    fim.setAttribute('id', 'gameOver')
    var fim2 = document.createElement('div')
    fim2.setAttribute('id', 'gameOver2')
    
    var main = document.querySelector('main')
    main.appendChild(fim)
    main.appendChild(fim2)
    var a = document.createElement('a')
    a.setAttribute('href', '../index.html')
    fim2.appendChild(a)
    a.innerText= 'Game Over'
}
