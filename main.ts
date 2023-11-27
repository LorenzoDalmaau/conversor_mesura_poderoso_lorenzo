//  Lorenzo Poderoso Dalmau
//  Functions
function celsius_choose() {
    let tempC = game.askForNumber("Introduzca una temperatura", 2)
    tempC = tempC * 9 / 5 + 32
    return game.splash("Temperatura Celisus: " + ("" + tempC))
}

function farenheit_choose() {
    let tempF = game.askForNumber("Introduzca una temperatura", 2)
    tempF = (tempF - 32) * 5 / 9
    return game.splash("Temperatura Farenheit: " + ("" + tempF))
}

function main() {
    let user_option: number;
    while (ControllerButtonEvent.Pressed) {
        user_option = game.askForNumber("0 Salir; 1 - Convertir a Celsius; 2 - Convertir a Farenheit", 1)
        if (user_option == 0) {
            game.splash("¡Hasta la próxima!")
            break
        } else if (user_option == 1) {
            celsius_choose()
        } else if (user_option == 2) {
            farenheit_choose()
        } else {
            game.showLongText("Selecciona una opción válida", DialogLayout.Bottom)
        }
        
    }
}

//  Main
main()
