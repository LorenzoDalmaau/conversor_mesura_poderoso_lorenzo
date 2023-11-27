# Lorenzo Poderoso Dalmau

# Functions
def celsius_choose():
    tempC = game.ask_for_number('Introduzca una temperatura', 2)
    tempC = ((tempC * 9/5) + 32) 
    return game.splash("Temperatura Celisus: " + str(tempC))

def farenheit_choose():
    tempF = game.ask_for_number('Introduzca una temperatura', 2)
    tempF = (tempF - 32) * 5 / 9
    return game.splash("Temperatura Farenheit: " + str(tempF))


def main():
    while ControllerButtonEvent.PRESSED:
        user_option = game.ask_for_number('0 Salir; 1 - Convertir a Celsius; 2 - Convertir a Farenheit', 1)
        if (user_option == 0):
            game.splash('¡Hasta la próxima!')
            break
        elif (user_option == 1):
            celsius_choose()
        elif (user_option == 2):
            farenheit_choose()
        else:
            game.show_long_text('Selecciona una opción válida', DialogLayout.BOTTOM) 

# Main
main()

