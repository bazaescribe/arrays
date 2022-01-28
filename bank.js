function ejemploArray() {
    var listaMascotas = ["🐶", "🐈", "🐠", "🦜", "🦎", "🕷", "🦇"]
    
    var resultadoParcial = ""
    var content = ""

    console.log(listaMascotas)

    for(var i=0; i<listaMascotas.length; i++){
        resultadoParcial = listaMascotas[i]
        content = content + resultadoParcial + "<br>"
    }

    document.getElementById("result").innerHTML = content
}

function banca() {
    var info = [
        "José Luis",
        1000, 
        [120, -23, 1000, -132, 999]
    ]

    var resultadoParcial = ""
    var content = ""

    console.log(info)

    document.getElementById("name").innerHTML = info[0]
    document.getElementById("balance").innerHTML = info[1]

    for(var j=0; j<info[2].length; j++ ){ 
        resultadoParcial = info[2][j]
        content = content + resultadoParcial 
    }

    document.getElementById("history").innerHTML = content
}