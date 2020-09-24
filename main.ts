let Celsius = 0
input.onButtonPressed(Button.A, function () {
    if (Celsius == 10) {
        basic.showNumber(Celsius)
        basic.showString("Ski time!")
    } else if (Celsius == 20) {
        basic.showNumber(Celsius)
        basic.showString("Picnic time!")
    } else if (Celsius == 30) {
        basic.showNumber(Celsius)
        basic.showString("Beach time!")
    } else if (Celsius == 40) {
        basic.showNumber(Celsius)
        basic.showString("It is better to stay at home")
    } else {
        basic.showNumber(Celsius)
    }
})
basic.forever(function () {
    Celsius = input.temperature()
})
