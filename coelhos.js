// Método
// var coelho = {}
// coelho.diz = function(linha){
//     console.log("Coelho diz '" + linha + "'")
// }

// coelho.diz("Estou vivo")

function speak(line){
    console.log("O coelho " + this.type + " diz '" + line + "'")
}

// let coelhoBranco = {type: "branco", speak: speak}
let coelhoGordo = {type: "gordo", speak: speak}

// coelhoBranco.speak("Ó meu Dues, " + "como está tarde!")
// coelhoGordo.speak("Eu poderia comer uma cenoura gigante agora.")

speak.apply(coelhoGordo, ["Burp!"])
speak.call({type: "velho"}, "Nossa Senhora!")
