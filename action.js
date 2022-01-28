function greet() {
    alert("No debiste presionar ese botón")
}

function personalizedGreet() {
    var name = ""
    var year = 0
    var age = 0
    var module = 0

    name = document.getElementById("nameInput").value
    year = document.getElementById("yearInput").value

    age = 2022 - year

    /** concatenar: pegar una cosa tras otra */

    console.log("Hola " + name + " de " + age + " años, no debiste presionar el botón")

    module = age%2

    /** Función condicional */

    if(module==0){
        console.log("Tu edad es par")
    } else {
        console.log("Tu edad es impar")
    }

    /** Si me dejan entrar a un bar o no? */

    for(var i=0; i<age; i++) {
        console.log("🕯" + i)
    }

}
